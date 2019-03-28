// globals fetch

function qS (selector) {
    return document.querySelector(selector)
}

function qSA (selector) {
    return document.querySelectorAll(selector)
}

const search = qS('#search-event')
const searchButton = document.createElement('button')
searchButton.innerText = 'Go!'
searchButton.addEventListener('click', function () {
    searchMusic(input)})
search.appendChild(searchButton)
searchButton.classList.add('search-event')

function searchMusic (input) {
    encodeURIComponent(input)
    let promise = fetch(`https://itunes-api-proxy.glitch.me/search?term=${input}`).then(function (response) {
        if (!response.ok) {
            throw Error(response.statusText)
        }
        return response.json()
    })
    return promise
}
console.log(searchMusic())