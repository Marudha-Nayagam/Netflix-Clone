

let apiKey = "http://www.omdbapi.com/?apikey=61e576a4&t="

let title = document.getElementById("title")
let date = document.getElementById("date")
let actors = document.getElementById("actors")
let genre = document.getElementById("genre")
let desc = document.getElementById("desc")
let director = document.getElementById("director")
let collection = document.getElementById("collection")
let rating = document.getElementById("rating")
let poster = document.getElementById("poster")

function search() {
    let query = document.getElementById("movieSearch").value;
    let api = apiKey+query
    console.log(apiKey)
    
fetch(api).then((movieData)=>{
   
    console.log(movieData)
    return movieData.json()
}).then((movie)=>{
    console.log(movie);

    title.innerText = movie.Title;
    date.innerText = movie.Released;
    actors.innerText = movie.Actors;
    genre.innerText = movie.Genre;
    desc.innerText = movie.Plot;
    director.innerText = movie.Director;
    collection.innerText = movie.BoxOffice;
    rating.innerText = movie.imdbRating;
    poster.src = movie.Poster;


})
}

// fetch(apiKey).then((data) =>{
//     return data.json()
// }).then((movie) =>{
//     console.log(movie)
// })