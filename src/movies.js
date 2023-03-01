// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directorsArray = moviesArray.map(function (element) {
    return element.director;
  });
  return directorsArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const spielbergMovies = moviesArray.filter(function (element) {
    return (
      element.director === "Steven Spielberg" && element.genre.includes("Drama")
    );
  });
  return spielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

  if (moviesArray.length === 0) {
    return 0;
  }

  const scoresArray = moviesArray.map(function (element) {
    return element.score;
  });

  const sumOfScores = scoresArray.reduce((acc, element) => {
    return acc + (element || 0);
  });

  const average = Number((sumOfScores / scoresArray.length).toFixed(2));

    return average;
  }


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

  const dramaArray = moviesArray.filter(function (element) {
    return element.genre.includes("Drama");
  });

  if (dramaArray.length === 0) {
    return 0;
  }

  const dramaScores = dramaArray.map(function (element) {
    return element.score;
  });

  const dramaScoreSum = dramaScores.reduce((acc, element) => {
    return acc + element;
  });

  const average = Number((dramaScoreSum / dramaScores.length).toFixed(2));

    return average;
  }


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const clonedArray = moviesArray.map(function(element){
        return element})
    
    
    const orderedArray = clonedArray.sort((mov1, mov2)=>{
        if (mov1.year < mov2.year){
            return -1;
        }

        else if (mov1.year > mov2.year){
            return 1;
        }

        else if (mov1.year === mov2.year) {
            if (mov1.title < mov2.title){
                return -1
            }

            else if (mov1.title < mov2.title){
                return 1
            }

            else {return 0}
        }
    })

    return orderedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const titlesArray = moviesArray.map((element) => element.title
    )

    titlesArray.sort((a,b) => {
      const clearedA = a.toLowerCase().replace(" ","")
      const clearedB = b.toLowerCase().replace(" ","")

      if(clearedA > clearedB) {
        return 1;
      }
      if (clearedA < clearedB) {
        return -1
      }
      return 0;

    })
    return titlesArray.slice(0, 20)}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
