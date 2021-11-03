
const createElement = async (state, stateAcronym, obj) => {
    const object = await obj

    const tab = document.querySelector('#tab')
    const canvas = document.querySelector('.container')
        canvas.innerText = ''
    const pagInfo = document.createElement('h1')
    const numbInfo = document.createElement('span')
    numbInfo.setAttribute('class', 'specialNumber')
        numbInfo.innerText = object.length
    const textInfo = document.createElement('span')
        textInfo.innerText = ` Imóveis à venda em ${state} - ${stateAcronym}`
    pagInfo.append(numbInfo,textInfo)
    
    const pagTag = document.createElement('div')
    pagTag.setAttribute('class', 'tag')
    pagTag.innerText = `${state} - ${stateAcronym}`

    const newTab = document.createElement('div')
    newTab.innerText = `${state} - ${stateAcronym}`
    tab.append(newTab)
    canvas.append(pagInfo,pagTag)

    const componente = await object.map((item)=>{
            const card = document.createElement('div')
            card.setAttribute('class', 'card')
            const textCard = document.createElement('div')
            textCard.setAttribute('class', 'textCard')
            //Inside card
            const address = document.createElement('p')
            address.innerText = `${item.street}, ${item.streetNumber}-${item.neighborhood}, ${item.state}-${item.stateAcronym}`

            const title = document.createElement('h2')
            title.innerText = item.name
            //Apartament Info
            //criar fução para executar os span
            const apartamentInfo = document.createElement('h6')
            const userMeter = document.createElement('span')
            userMeter.setAttribute('class', 'specialNumber')
            userMeter.innerText = item.usableAreas
            apartamentInfo.append(userMeter)
            const meter = document.createElement('span')
            meter.innerText = 'm² '
            apartamentInfo.append(meter)
            
            const bedNumber = document.createElement('span')
            bedNumber.setAttribute('class', 'specialNumber')
            bedNumber.innerText = item.bedrooms
            apartamentInfo.append(bedNumber)
            const bedrooms = document.createElement('span')
            bedrooms.innerText = ' Quarto '
            apartamentInfo.append(bedrooms)

            const bathroomNumber = document.createElement('span')
            bathroomNumber.setAttribute('class', 'specialNumber')
            bathroomNumber.innerText = item.bathrooms
            apartamentInfo.append(bathroomNumber)
            const bathrooms = document.createElement('span')
            bathrooms.innerText = ' Banheiro '
            apartamentInfo.append(bathrooms)

            const parkingSpaceNumber = document.createElement('span')
            parkingSpaceNumber.setAttribute('class', 'specialNumber')
            parkingSpaceNumber.innerText = item.parkingSpaces == 0 ? '--' : item.parkingSpaces
            apartamentInfo.append(parkingSpaceNumber)
            const parkingSpaces = document.createElement('span')
            parkingSpaces.innerText = ' Vaga '
            apartamentInfo.append(parkingSpaces)

            const amenitiesUl = document.createElement('ul')
            const amenities = item.amenities
            const amenitesIfo = amenities.map((item)=>{
                const amenitiesDictionary = {
                    ELECTRONIC_GATE : 'Portão Eletônico',
                    CINEMA : 'Cinema',
                    SAUNA : 'Sauna',
                    GARDEN : 'Jardim',
                    FURNISHED : 'Mobiliada',
                    FIREPLACE : 'Lareira',
                    AIR_CONDITIONING : 'Ar-condicionado',
                    BICYCLES_PLACE :'Lugar de bicicleta',
                    SPORTS_COURT : 'Quadra esportiva',
                    PETS_ALLOWED : 'Permitido animais',
                    AMERICAN_KITCH : 'Cozinha americana',
                    PLAYGROUND : 'Parque infantil',
                    POOL : 'Piscina',
                    BARBECUE_GRILL : 'Churrasqueira',
                    TENNIS_COURT : 'Quadra de Tênis',
                    LAUNDRY : 'Lavanderia',
                    PARTY_HALL : 'Salão de festas',
                    ELEVATOR : 'Elevador',
                    GATED_COMMUNITY : 'Condomínio Fechado',
                    GYM : 'Academia',
                }
                const amenitesLi = document.createElement('li')
                amenitesLi.innerText = amenitiesDictionary[item]
                amenitiesUl.append(amenitesLi)
            })
            const price = document.createElement('h3')
            price.innerText = `R$ ${Number(item.price).toLocaleString('pt-BR')}`
            const monthlyCondoFee = document.createElement('h4')
            const monthlyCondoText = document.createElement('span')
            monthlyCondoText.innerText = 'Condomínio: '
            const monthlyCondoSpan = document.createElement('span')
            monthlyCondoSpan.setAttribute('class', 'specialNumber')
            monthlyCondoSpan.innerText = item.monthlyCondoFee == undefined ? '--' : `R$ ${Number(item.monthlyCondoFee).toLocaleString('pt-BR')}`
            console.log(item.monthlyCondoFee)
            monthlyCondoFee.append(monthlyCondoText, monthlyCondoSpan)

            const image = document.createElement('img')
            image.setAttribute('src', item.media)

            textCard.append(address,title,apartamentInfo,amenitiesUl,price,monthlyCondoFee)
            card.append(image, textCard)
            canvas.append(card)
    })
}
export {createElement};