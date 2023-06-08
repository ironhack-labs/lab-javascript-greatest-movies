// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
/*

function getAllDirectors(moviesArray) {
  const directors = moviesArray.map((element) => {
    return element.director;
  });
  return directors;
}*/

// refactoring iteration 1 with bonus 

function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(element => element.director);
    return directors.filter((director,index,self) => self.indexOf(director) === index);
}
  
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const movies = moviesArray.filter(function (details) {
    return (
      details.director === "Steven Spielberg" && details.genre.includes("Drama")
    );
  });
    if (moviesArray.length === 0 || movies.length === 0) {
        return 0;
    }

  return movies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const score = moviesArray.reduce(function (acc, curr) {
    // if score property does not exist in the object, set currentvalue to 0
        if (!"score" in curr) {
            acc = acc + 0;
        }

    // is the score a number? if not, do not perform addition
        if (typeof curr.score === "number") {
            acc = acc + curr.score;
        }
    return acc;
  }, 0);

  // to get a float with 2 decimal places, use Math.round (number* 100) /100
    return Math.round((score / moviesArray.length) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

/*function dramaMoviesScore(moviesArray) {
const dramaMovies = moviesArray.filter(function(element){
    return element.genre.includes('Drama');
})
// all the hard work is already done in iteration 3, just call it now.
return scoresAverage(dramaMovies);

}
*/


// refactoring with arrow function in 1 line

function dramaMoviesScore(moviesArray) {
  // all the hard work is already done in iteration 3, just call it now.
    return scoresAverage(
        moviesArray.filter((element) => element.genre.includes("Drama"))
    );
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    // creating a deepcopy of the array so that the reference is removed
    let movies_deepcopy = JSON.parse(JSON.stringify(moviesArray));

    // numbers are sorted as strings in sort, so use inline function to compare btwn 2 numbers..
    movies_deepcopy.sort(function compareYears(a,b){
    // if(a-b is 0, they are the same years, in that case, sort alphabetically using localeCompare)
    if(a.year - b.year === 0){
        return a.title.localeCompare(b.title) ;
    }
    return a.year -b.year;
   })
   return movies_deepcopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let movies_deepcopy = JSON.parse(JSON.stringify(moviesArray));
    movies_deepcopy.sort(function compareTitles (a,b){
        return a.title.localeCompare(b.title);
    });

    const titlesArr = movies_deepcopy.map(element => element.title) ;
    if(titlesArr.length < 20){
        return titlesArr;
    }
    else{
        return titlesArr.filter(function(title,index){
            return index < 20;
        })
    }


}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
