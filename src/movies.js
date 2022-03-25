// The `movies` array from the file `src/data.js`.
//onsole.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(peliculas) {
  peliculas.forEach(pelicula=> console.log(pelicula.director))
}
getAllDirectors(movies)
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getDirectors(peliculas){
  const Directores = peliculas.map(pelicula=>pelicula.director)
  let result = peliculas.filter((pelicula,index)=>{
    return (Directores).indexOf(pelicula.director) === index;
  })
  return result; 
}


console.log(getDirectors(movies))





// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(peliculas) {
  let Movies = []
const MoviesSteven = peliculas.filter(pelicula=>pelicula.director==="Steven Spielberg")
const MoviesDramaSteven = MoviesSteven.map(peliculas=>peliculas.genre)
MoviesDramaSteven.forEach(pelicula=>{
  pelicula.forEach(pelicula=>{
    Movies.push(pelicula)
  })
})
const dramaMovies = Movies.filter(pelicula=>pelicula==="Drama")
console.log(dramaMovies.length)
}

howManyMovies(movies)

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(peliculas) {
  const totalScore = peliculas.reduce((total,pelicula)=>{
   return  total += pelicula.score
  },0)
  const PromScore = (totalScore/peliculas.length).toFixed(2)
  console.log(PromScore)

}
scoresAverage(movies)

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(peliculas) {
  let ArrayMovies = []
const Pelis = peliculas.map(pelicula=>{
  return pelicula.genre
})
  Pelis.forEach(peliculas=>{
    peliculas.forEach(movie=>{
      ArrayMovies.push(movie)
  })
})
const MoviesDrama = ArrayMovies.filter(pelicula=>{
  return pelicula === "Drama"
})
const averageMoviesDrama = Math.round((MoviesDrama.length * 100)/ArrayMovies.length) + "%"
console.log(averageMoviesDrama) 

//Entendí mal la iteración, no se por que entendí que tenía que sacar el porcentaje de las peliculas de drama de las 250 peliculas que hay jeje


const DramaMovies = movies.filter(movies => movies.genre.includes('Drama'));
const AverageScore = (DramaMovies.reduce((total,movie)=>{
  return total+=movie.score
},0))/DramaMovies.length

console.log(AverageScore)

}


dramaMoviesScore(movies)

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(peliculas) {
  const OrderList = (peliculas.map(pelicula=>{
    return pelicula.year
  })).sort(function(a,b){
    return b-a
  })
  OrderList.forEach(movie=>console.log(movie))
}
orderByYear(movies)

 //Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(peliculas) {
  let Order =( peliculas.map(pelicula=>{
    return pelicula.title
  })).sort()
  for(let i=0;i<20;i++){
    console.log(Order[i])
  }
}
orderAlphabetically(movies)

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(peliculas) {
  const minutes = peliculas.map(pelicula=>{
    pelicula.duration = (Number(pelicula.duration[0])*60) + Number(pelicula.duration.substring(2).slice(0,3)) 
    return pelicula
  })
  console.log(minutes)

}
turnHoursToMinutes(movies)

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(peliculas ) {
  let duplicados = [];
  const Scores = peliculas.map(pelicula=>{
    return pelicula.score
  })

const OrderScores = Scores.sort();
 
for (let i = 0; i < OrderScores.length; i++) {
  if (OrderScores[i + 1] === OrderScores[i]) {
    duplicados.push(OrderScores[i]);
  }

}

console.log(OrderScores)
}

bestYearAvg(movies)




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
