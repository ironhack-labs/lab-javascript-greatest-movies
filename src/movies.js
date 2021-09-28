// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// MAP RECIEVES A FUNCTION AND A ELEMENT. APPLYS THE FUNCTION TO THE ELEMENTS .
function getAllDirectors(movies) {

return movies.map((movie) => movie.director)

}

// FILTER: RECIEVES A FUNCION AND A ELEMENT. APPLYS THE FUNCION TO OUR ELEMENT AND RETURNS A NEW ELEMENT WITH THE TRUETHY VALUES

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {

const dramaSpilbergMovies = movies.filter( (movie) => movie.director==="Steven Spielberg" && movie.genre.includes("Drama"))
  
return dramaSpilbergMovies.length

}

// REDUCE - TAKES A STRING AND DOES A MATHEMATIC OPERATION UNTIL WE GET FINAL RESULT. 
//FOR THIS WE NEED THE VARIABLE ACC TO ACUMULATE THE VALUE DURING THE PROCESS OF SUM (OR OTHER MATH OPPERATION) THE CURRENT VALUE (CV)
// WE COULD ADD A SPECIFIC CURRENT VALUE 
// THE SIZE OF THE STRING DECREASES DURING THE OPERATION FROM STRING.LENGTH => LENGTH =1

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
 function scoresAverage(movies) {

    if (!movies.length)
    {
      return 0
    }
  
    const scoreArray=movies.map( (movie) => movie.score)
  
    const average= scoreArray.reduce( (acc, cv) => typeof cv === 'number' ? acc+cv : acc, 0)

  
    return Number.parseFloat( (average/scoreArray.length).toFixed(2) )
  }
  
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
 
 const  dramaMoviesArray = movies.filter((movie) => movie.score && movie.genre.includes("Drama") )

 if(dramaMoviesArray.length === 0) {
   return 0
 }
 
 // function dramaMoviesScore() {} it's the same of line 49 and 50?


 const scoreArray=dramaMoviesArray.map((movie) => movie.score)

 const average= scoreArray.reduce( (acc, cv) => acc + cv,0)

  return Number.parseFloat( (average/dramaMoviesArray.length).toFixed(2))
}


// SORT
// COMPARATION FUNCTION
//USES TWO VALUES (MOVIE 1 E MOVIE 2 f.e) AND APLLYS TO THEM A FUNCTION OF COMPARATION TO ORDER THE ITEM

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

const newArray = movies.map((movie) => movie)

  const yearArr= newArray.sort((movie1, movie2) => {

    if (movie1.year > movie2.year) {
      return 1
    }
    if (movie1.year < movie2.year) {
      return -1
    }
    if (movie1.year === movie2.year) {
        if (movie1.title > movie2.title) {
              return 1
        }
        if (movie1.title < movie2.title) {
              return -1
        }
        return 0
    }
  })

return yearArr

}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
 
  const newArray = movies.map( (movie) => movie.title)
  
  const alfaArr= newArray.sort((movie1, movie2) => {

    if (movie1 > movie2) {
      return 1
    }
    if (movie1 < movie2) {
      return -1
    }
    return 0
} )



if(alfaArr.length <20) {
  
  return alfaArr

}

  return alfaArr.slice(20,(alfaArr.length-1))

}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



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
