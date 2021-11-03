import { getEndpoint } from "./getEndpoint.js"
const inputListener = () =>{
    const searching = document.querySelector('input[name=search]')
    let timer
    const debounceFunction = (func,delay) => {
        clearTimeout(timer)
        timer = setTimeout (func, delay)
    }
    const searchValue = () => {
        const searchResult = searching.value
        searching.value = ''
        translateResult(searchResult)
    }
    searching.addEventListener('input', function () {
        debounceFunction(searchValue,1500)
    })
}

const translateResult = (string) =>{
    const newString = string.split(' ').join('').toLowerCase()
    const resultDictionary = {
        'sp' : 'sao-paulo',
        'são paulo' : 'sao-paulo',
        'sãopaulo' : 'sao-paulo',
        'saopaulo' : 'sao-paulo',
        'riojaneiro' : 'rio-de-janeiro',
        'riodejaneiro' : 'rio-de-janeiro',
        'rj' : 'rio-de-janeiro',
    }
    const valueToSearch = resultDictionary[newString]
    const state = valueToSearch == 'sao-paulo' ? 'sp': 'rj'
    getEndpoint(state,valueToSearch)
}

export {inputListener}
