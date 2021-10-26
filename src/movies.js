// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const movies = require('./data.js');


function getAllDirectors(someArray) {
  let directorsArray = someArray.map((eachMovie) => {
    return eachMovie.director;
  })
  return directorsArray;
  //console.log(directorsArray)
}








// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(someArray) {
  let stevenMovies = 0;
  
    someArray.forEach(eachMovie => {
      if ((eachMovie.director === "Steven Spielberg") && (eachMovie.genre.includes('Drama'))) {
        stevenMovies ++
      }
    });
    
    return stevenMovies;  
}






// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(someArray) {
  
  if (someArray.length === 0) {
    return 0;
  }  
  
  const sumScores = someArray.reduce((acc, eachScore) => {
    if (!eachScore.score) {
      return acc
    }
    return acc + eachScore.score;
  },0)
  
  let avgScore = sumScores / someArray.length;
  
  let roundedScore = Math.round((avgScore + Number.EPSILON) * 100) / 100;


  //console.log(roundedScore);
  return roundedScore;

}






// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(someArray) {

    
  let dramaMovies = someArray.filter(eachMovie => {
    return eachMovie.genre.includes('Drama');
  });

  let sumDramaScores = dramaMovies.reduce((acc, eachScore) => {
    return acc + eachScore.score;
  },0) ;

  let avgDramaScore = sumDramaScores / dramaMovies.length;

  let roundedDramaScore = Math.round((avgDramaScore + Number.EPSILON) * 100) / 100;

  return roundedDramaScore;

}





// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(someArray) {

  let moviesCopy = JSON.parse(JSON.stringify(someArray));
  
  let orderedMovies = moviesCopy.sort((a,b) => a.year - b.year);

  
  return orderedMovies;
}







// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(someArray) {

  let arryCopy = JSON.parse(JSON.stringify(someArray));
  let movieTitles = arryCopy.map(movie => movie.title)
  let sortedMovies = movieTitles.sort((a,b) => a - b);

  let only20 = [];
  let only20sorted = [];


  if (someArray.length > 20) {
    for (let i = 0; i < 20 ; i++) {
      only20 = sortedMovies.shift();
      only20sorted.push(only20);
    }
  } else {
    for (let i = 0; i < someArray.length; i++) {
      only20 = sortedMovies.shift();
      only20sorted.push(only20);
    }
  }

  return only20sorted;
}





// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(someArray) {

  let arrayCopy = JSON.parse(JSON.stringify(someArray));
  let hours = 0;
  let minutes = 0;

  arrayCopy.forEach(eachMovie => {
    let newArray = eachMovie.duration.split("");
    //console.log(newArray);
    //console.log(newArray[0]*60);
    eachMovie.duration = (parseInt(newArray[0], 10)*60+(parseInt (newArray[3], 10)*10)+(parseInt(newArray[4], 10)))
    //console.log(arrayCopy);
    return arrayCopy
  })
}







// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(someArray) {

  if (someArray.length === 0) {
    return null;
  }
  let yearsArray = []
  let avgScore = []
  let avgScores = []
  let sortedArray = someArray.sort((a,b) => a.year - b.year);

  
  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i].year === sortedArray[i+1].year) {
      yearsArray.push(someArray[i].year);
      avgScore.push(sortedArray[i].score + sortedArray[i+1]);
      avgScore.reduce((acc, eachNumber) => {
        return (acc + eachNumber) / avgScore.length;
      })

    } else {
      avgScores.push(avgScore);
      avgScore = 0;
    }
  }

  let maxScore = avgScores.indexOf(Math.max(...avgScores));
  let uniq = [...new Set(yearsArray)];

  console.log(`The best year was ${uniq[maxScore]} with an average score of ${avgScores[maxScore]}`)
  return `The best year was ${uniq[maxScore]} with an average score of ${avgScores[maxScore]}`;
  
}











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
