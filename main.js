// globals fetch

// functions that create shortcuts:
function qS (selector) {
    return document.querySelector(selector)
}
function qSA (selector) {
    return document.querySelectorAll(selector)
}

//! 1. Search for Music:

// function searchMusic (input) {

// }


// //! 1.1 Get Music/Fetch

function getMusic () {
    const promise = fetch(`https://itunes-api-proxy.glitch.me/lookup?id=909253&entity=album`)
    .then(function(response) {
        if (!response.ok) {
            throw Error(response.statusText)
        }
        return response.json()
    })
    return promise
}
console.log(getMusic())


//! 2. Display results of searchMusic for user-selection:

// function searchResults (input) {


// }

//! 3. Play user-selected track from searchResult:

// function playTrack () {

// }