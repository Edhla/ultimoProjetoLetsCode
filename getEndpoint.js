import { exploreObject } from "./exploreObject.js"
import { errorMessage } from "./errorMessage.js"

const getEndpoint = async (state,city) => {
    try{
        const response = await fetch(`https://private-9e061d-piweb.apiary-mock.com/venda?state=${state}&city=${city}`)
        return await exploreObject(response)
    } catch {
        return errorMessage()
    }
}
export { getEndpoint }