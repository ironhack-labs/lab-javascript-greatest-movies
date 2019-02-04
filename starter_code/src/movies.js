/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

let turnHoursToMinutes = movies.map(movie=>{
 parseInt( movie.duration.split(" ")[0], 10)*60+
   parseInt(movie.duration.split(" ")[1], 10)

 return movie;

})
console.log(turnHoursToMinutes);


// Get the average of all rates with 2 decimals 
 let averageRates = movies.map(movie =>{
     return parseFloat (movie.rate)   
})

   let avgRate = averageRates.reduce( (total, item) =>{
        return total + item}, 0) / averageRates.length

   console.log(avgRate); 


// Get the average of Drama Movies

let totalDramaMovie = movies.filter(movie => {
  movie.genre.includes("drama")
  return parseInt (movie.rate)
    })

    console.log("boe",totalDramaMovie)
//let rateDrama = parseInt(totalDramaMovie.rate)

    let avgRateDrama= totalDramaMovie.reduce((total, movie)=>{

        return total  + parseFloat(movie.rate)}, 0) / totalDramaMovie.length
    
    console.log ("?", avgRateDrama);


// Order by time duration, in growing order

console.log (turnHoursToMinutes.sort());


// How many movies did STEVEN SPIELBERG

 let movieBySteven = movies.filter( movie =>{
    if(movie.director=="Steven Spielberg")
   { return movie;}
 })
 console.log(movieBySteven);

 let dramaBySteven = movieBySteven.filter(movie => {
    return movie.genre.includes("Drama")
 })

    console.log(dramaBySteven.length);

// Order by title and print the first 20 titles

let orderTitle = movies.sort( (movieA, movieB)=>{
    return movieA.title < movieB.title ? -1: 1;
})
console.log(orderTitle.slice(0,20));

// Best yearly rate average

// let moviesByYear = movies.sort((movieA, movieB) =>{
//     return movieA.year<movieB.year ? -1:1;
    
// })
// console.log(moviesByYear);

let highRatedYear= movies.reduce((h, {year,title, rate}) => {
    return Object.assign(h, { [year]:( h[year] || [] ).concat({title,rate})})
  }, {})

console.log(highRatedYear);

let avgTopRateYear= highRatedYear.reduce((total, movie)=>{

    return total  + parseFloat(movie.rate)}, 0) / movie.year.length

console.log ("wow", avgTopRateYear);
