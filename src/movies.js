// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors =  (movies) =>{
 const getAllDirectors= movies.map((movies)=>movies.director)

    return getAllDirectors
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

/*const howManyMovies = (movies) => {
    const dramaStevenSpielberg =movies.filter((movies)=>{
    return (movies.director === "Steven Spielberg" && movies.genre.includes("Drama")
    })
    const numOfMovies= dramaStevenSpielberg.reduce((acc,movies)=> {
     counter ++
   },0)
    return numOfMovies

Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = movies.reduced((acc,movies.rate)/movies.length,0
)
}
*/
// Iteration 4: Drama movies - Get the average of Drama Movies

/*const dramaMoviesRate = (movies) => {
    const dramaMovies= movies.filter((movies)=>{
        movies.genre.includes("Drama")
})
 return ratesAverage (dramaMoviesRate)
}
*/
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

 //function orderByYear = movies.sort((a,b)=>  a.year - b.year
  
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
/*
const twentyMovies = movies.filter((movies,index)=>
 return (index<20 ))
const tittleTwentyMovies = twentyMovies.map((movies)=>movies.tittle)
 return tittleTwentyMovies

*/

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
