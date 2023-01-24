// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    let directorsArr = moviesArray.map((movie) => {
        return movie.director
    })
    return directorsArr
  }
console.log(getAllDirectors(movies))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
let genreDirector = moviesArray.filter(
  (movie) =>
    movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
);
return genreDirector.length;
}
console.log(howManyMovies(movies))

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
    
    if(moviesArray.length === 0) {
        return 0;
    } 
    
    let totalScore = moviesArray.reduce((acum, movie) => {
    return acum + movie.score;
}, 0);

let averageScore = totalScore/moviesArray.length;
let roundedAverageScore = averageScore.toFixed(2);

return roundedAverageScore;
}
console.log(scoresAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
let dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  return scoresAverage(dramaMovies);
}

console.log(dramaMoviesScore(movies))    

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
let cloneArray = structuredClone(moviesArray)
cloneArray.sort(( elem2, elem1) => {
    if (elem2.year > elem1.year) {
        return -1;
    } else if (elem2.year < elem1.year) {
        return 1;
    } else if (elem2.year === elem1.year) {
        if(elem2.title > elem1.title) {
            return 1;
        } else if(elem2.title < elem1.title) {
            return -1;
        } else {
            return 0;
        }
    }
});
return cloneArray;
}
console.log(orderByYear(movies))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {
let cloneOrder = structuredClone(moviesArray) 
let alphabeticOrder = cloneOrder.sort((element1, element2)=>{
if (element1.title > element2.title) {
    return 1; 
  } else if (element1.title < element2.title) {
    return -1;
  } else {
    return 0;
  }

})

let only20 = alphabeticOrder.splice(0,20)
let onlyString = only20.map((element)=> { 
return element.title.toString();
})
return onlyString
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
const moviesTime = JSON.parse(JSON.stringify(moviesArray))

moviesTime.map(elm => {

    const durationInNumber = 0
    if (elm.duration.includes("h") && elm.duration.includes("min")) {
        elm.duration = parseInt(elm.duration.substr(0, 1)) * 60 + parseInt(elm.duration.substr(3, 5))
    }
    else if (elm.duration.includes("h")) {
        elm.duration = parseInt(elm.duration.substr(0, 1)) * 60
    }
    else if (elm.duration.includes("min")) {
        elm.duration = parseInt(elm.duration.substr(-5, 2))
    }

})

return moviesTime
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
