const errorMessage = () => {
    console.log('funfouaquitbm')
    const canvas = document.querySelector('.container')
    canvas.innerText = ''
    const firstMessage = document.createElement('p')
    firstMessage.setAttribute('class', 'error')
    firstMessage.innerText = 'OOOOPS!'
    const secondMessage = document.createElement('p')
    secondMessage.setAttribute('class', 'error')
    secondMessage.innerText = 'ALGO DEU ERRADO NA SUA BUSCA.'
    const thirdMessage = document.createElement('p')
    thirdMessage.setAttribute('class', 'specialError')
    thirdMessage.innerText = `status 500`
    const fourthMessage = document.createElement('p')
    fourthMessage.setAttribute('class', 'error')
    fourthMessage.innerText = 'POR FAVOR, TENTE NOVAMENTE'
    canvas.append(firstMessage,secondMessage,thirdMessage,fourthMessage)
}
export { errorMessage }