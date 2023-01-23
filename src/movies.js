// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let soloNombre = moviesArray.map((nombres) => {
    return nombres.director;
  });
  return soloNombre;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let peliSpielberg = 0;
  let spielberg = moviesArray.filter((pelis) => {
    if (pelis.director === "Steven Spielberg" && pelis.genre.includes("Drama")) {
      return (peliSpielberg += 1);
    } else {
      return peliSpielberg;
    }
  });
  return peliSpielberg;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  let total = moviesArray.reduce((acc, pelis) => {
    if (pelis.score) {
      return acc + pelis.score;
    } else {
      return acc;
    }
  }, 0);

  let avg = total / moviesArray.length;
  let twoDigits = avg.toFixed(2);
  console.log(twoDigits);
  return Number(twoDigits);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  
    let total = moviesArray.reduce((acc, pelis) => {
        if (pelis.genre.includes("Drama")) {
          return acc + pelis.score;
        } else {
          return acc;
        }
      }, 0);
    
      let avg = total / moviesArray.length;
      let twoDigits = avg.toFixed(2);
      console.log(twoDigits);
      return Number(twoDigits);
  
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let newMoviesArr = structuredClone(movies)


    newMoviesArr.sort((a,b)=>{
        if (a.year>b.year){
            return 1
        } else if (a.year<b.year){
            return -1
        } else{
            return 0}
        

    })
    return newMoviesArr
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let cloneOrdenAlfabetico = structuredClone(movies)
    console.log (cloneOrdenAlfabetico)
    
    cloneOrdenAlfabetico.sort( (elem2, elem1) => {
      if (elem2.title > elem1.title) {
        return 1
      } else if (elem2.title < elem1.title) {
        return -1
      } else {
        return 0
      }
    } )
    return cloneOrdenAlfabetico.slice(0,20)

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  let cloneTiempo = structuredClone(movies)

  let tiempoStr= cloneTiempo.split("")
  let 
  
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
