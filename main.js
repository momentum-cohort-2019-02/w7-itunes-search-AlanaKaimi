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

function getMusic() {
    return fetch(`https://itunes-api-proxy.glitch.me/search?term=jack+johnson`)
    .then(function(response) {
        if (!response.ok) {
            throw Error(response.statusText)
        }
        return response.json()
    })
}
    
document.addEventListener('DOMContentLoaded', function() {
    getMusic()   
    .then(function (musicData) {
        console.log(musicData)
        let gmArtist = musicData.results[0].artistName
        let gmAlbum = musicData.results[0].collectionName
        qS('#artist').innerHTML = `Artist: ${gmArtist}`
        qS('#album').innerHTML = `Album: ${gmAlbum}`
    })
})



//! 2. Display results of searchMusic for user-selection:

// function searchResults (input) {


// }

//! 3. Play user-selected track from searchResult:

// function playTrack () {

// }