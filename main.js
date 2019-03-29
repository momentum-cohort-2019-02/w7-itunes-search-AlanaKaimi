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

    
fetch(`https://itunes-api-proxy.glitch.me/search?id=909253&entity=album`)
    .then(function (response) {
        window.response = response
        console.log(response)
    })


//! 2. Display results of searchMusic for user-selection:

// function searchResults (input) {


// }

//! 3. Play user-selected track from searchResult:

// function playTrack () {

// }