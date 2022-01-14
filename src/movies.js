// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(ListOfMovies) {
  let ListOfDir = ListOfMovies.map(function (element) {
    return element['director'];
  });

  return ListOfDir;
}
// console.log('---------');
// console.log('---------');

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(Datalist) {
  // we are going to find out how amny drama movies spielberg made
  // we need to sort out all the movies speilberg made / map
  // than we need to filter wich one of them are drama / filter
  let listOfSpielberg = Datalist.filter(function (element) {
    return element['director'] === 'Steven Spielberg';
    // This is an element

    // {
    //   title: 'Indiana Jones and the Last Crusade',
    //   year: 1989,
    //   director: 'Steven Spielberg',
    //   duration: '2h 7min',
    //   genre: ['Action', 'Adventure', 'Fantasy'],
    //   score: 8.3
    // },
  });
  let listOfDrama = listOfSpielberg.filter(function (element) {
    for (let i = 0; i < element['genre'].length; i++) {
      let current_genre = element['genre'][i];
      //return current_genre === "Drama";
      if (current_genre === 'Drama') {
        return true;
      }
    }
    return false;
  });
  return listOfDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(listOfmovies) {
  if (listOfmovies.length === 0) {
    return 0;
  }
  // I want all the scores first
  let listOfScores = listOfmovies.map(function (element) {
    return element['score'];
    // I want to conculatethe average score
  });
  let listOfFilterdScore = listOfScores.filter(function (number) {
    return number; // checking if a number is 'true'
    // where are filtering movies that don't have a score
  });
  let sumScores = listOfFilterdScore.reduce(function (sum, number) {
    return (sum += number);
  }, 0);
  // I am having a total amount of moviescore and deviding that bye the amount of movies
  return parseFloat((sumScores / listOfmovies.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(listOfmovies) {
  let listofmoviesWithGenre = listOfmovies.filter(function (element) {
    return element['genre'];
  });

  // cheak if these movies have drama
  let listOfDrama = listofmoviesWithGenre.filter(function (movie) {
    // i need to look through the list of genre and cheak if it containts drama
    for (i = 0; i < movie['genre'].length; i++) {
      if (movie['genre'][i] === 'Drama') {
        return true;
      }
    }
    return false;
  });
  if (listOfDrama.length === 0) {
    return 0;
  }

  let sumScores = listOfDrama.reduce(function (sum, movie) {
    return (sum += movie['score']);
  }, 0);
  return parseFloat((sumScores / listOfDrama.length).toFixed(2));
  // couculate the avarage
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(listOfmovies) {
  //console.log(listOfmovies);
  listCopy = listOfmovies.map(function (e) {
    return e;
  });
  listCopy.sort(function (a, b) {
    let decision = a['year'] - b['year'];
    if (decision === 0) {
      return a['title'].localeCompare(b['title']);
    } else {
      return decision;
    }
  });
  //console.log(listCopy);
  return listCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(listOfmovies) {
  //sort all the movie titles
  
  listOfmovies.sort(function (a, b) {
    return a['title'].localeCompare(b['title']);
  });
  
  let listOfMovieTitles = listOfmovies.map(function (element) {
    return element['title'];
    
  });
    if (listOfMovieTitles > 20){
    // if there are more than 20 tiltes return only 20 of them
    return element['title'].slice(0,20)
  }
    //console.log(listOfMovieTitles)
  return listOfMovieTitles
  

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
    bestYearAvg
  };
}
