import { createElement } from "./createElement.js"

const exploreObject = async(obj) => {
    const object = await obj.json()
    const arr = object.search.result.listings
    let state
    let stateAcronym
    const createObject = arr.reduce((acc, item)=>{
        const name = item.link.name
        const price = item.listing.pricingInfos[0].price
        const media = item.medias[0].url
        const usableAreas = item.listing.usableAreas[0]
        const bedrooms = item.listing.bedrooms[0]
        const bathrooms = item.listing.bathrooms[0]
        const parkingSpaces = item.listing.parkingSpaces[0]
        const amenities = item.listing.amenities
        const monthlyCondoFee = item.listing.pricingInfos[0].monthlyCondoFee
        const street = item.listing.address.street
        const streetNumber = item.listing.address.streetNumber
        const neighborhood = item.listing.address.neighborhood
        state = item.listing.address.state
        stateAcronym = item.listing.address.stateAcronym
        //Creating object
        const newObj = {name,price,media,usableAreas,bedrooms,bathrooms,parkingSpaces,amenities,monthlyCondoFee,street,streetNumber,neighborhood,state,stateAcronym}
        return [...acc, newObj]
    },[])
    createElement(state, stateAcronym,createObject)
}

export {exploreObject}