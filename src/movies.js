// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    let directores = moviesArray.map((directors)=> {
        return directors.director
    })
    return directores
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let total = 0;

    moviesArray.filter((numSpielberg) => {
       if(numSpielberg.director == "Steven Spielberg"){
        for(i=0;i<numSpielberg.genre.length;i++){
            if(numSpielberg.genre[i] == "Drama"){
                total++
            }
        }
       }
    })
    console.log(total)
    return total
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let puntaje =0;

    if(moviesArray.length == 0){
        return 0 
    }
    puntaje = moviesArray.reduce((anterior, actual) =>
    {
        if(typeof actual.score == "number"){
        return anterior+actual.score
    }
    else {
        return anterior
    }
},0)
    console.log(puntaje)
    let totalAvg = (puntaje/moviesArray.length).toFixed(2)
    return Number(totalAvg)
}   

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray) {
    
    let result = 0;
    let count = 0;
    let dramaMovies = moviesArray.filter((movie) =>
      movie.genre.includes("Drama")
    );
    if(dramaMovies.length == 0){return 0}

    dramaMovies.forEach((score) => {
      result += score.score;
      count++;

    }
    );
    let averageScore = (result / count).toFixed(2);
    console.log(averageScore);
    return Number(averageScore);
    
  }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
    let newArr = moviesArray.slice().sort((a, b) => {
      return a.year === b.year ? a.title.localeCompare(b.title) : a.year - b.year;
    });
    return newArr;
  }
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let newOrder = moviesArray.slice();
    newOrder.sort((a, b) => a.title.localeCompare(b.title));
    let titles = newOrder.slice(0, 20).map((movie) => movie.title);
    console.log(titles);
    return titles;
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
