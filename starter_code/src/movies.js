/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (movies) =>{
    let local = [...movies]
    let result = local.sort((movie1,movie2)=> compareMovies(movie1.year, movie2.year))
    return result
    
  }
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
let directors = (arr)=> {
    const newArray = arr.map((theDirector)=> {
  
      return theDirector.director;
    })
    return newArray;}
    console.log(directors(movies))
  
  let newList =(movies)=>{
      let result = movies.filter(a => (a.director === 'Steven Spielberg') && (a.year === 1981))
      return result
  
  }

  howManyMovies = () => {
    //   const spielberg = directors.filter(function(directors){
    //   return directors.director === "spielberg";
    // })
    
    // console.log(howManyMovies)
  
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
let movie1 = movies[0]
console.log(movie1)
let movie2 = movies[1]

const  compare = (a, b) => {
  if (a > b){
    return 1;
  }
  else if (a < b){
    return -1;
  }
  else if(a === b){
    return 0
  }
}
console.log(compare(movie1.title, movie2.title))
console.log(compare(movie1.year, movie2.year))

let answer = movies.sort((movie1,movie2)=> compare(movie2.title, movie1.title) )

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = array => {
    let sum = array.reduce((amount, current) => {
        if (current.rate) {
            return amount;
        }
        return amount+= current.rate
    },0);
    if (array.length === 0){
        return 0;
    }
    return+(sum/array.length).toFixed(20);
}

console.log(ratesAverage(movies))
// Iteration 5: Drama movies - Get the average of Drama Movies
const dramaMovies = (movies) => {
    const newDrama = movies.filter((movie)=> movie.genre.includes('drama'))
    return ratesAverage(newDrama)

}
console.log(dramaMovies(movies))

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
const timeFormat = (length)=>{
    let time = length.split("");
    let hasHours = length.includes("h");
    let hasMinuts = length.includes("min");
    if(hasHours && hasMinuts){
        return Number(time[1].split ("min") [0]) + Number(time[0].split ("h")[0])*60;
    }
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average
