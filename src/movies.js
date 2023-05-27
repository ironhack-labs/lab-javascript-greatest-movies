/* {
    title: 'The Godfather: Part II',
    year: 1974,
    director: 'Francis Ford Coppola',
    duration: '3h 22min',
    genre: ['Crime', 'Drama'],
    score: 9
  }, */

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directorList = moviesArray.map (movie =>  {

        return movie.director
    
       })
       return directorList
    }


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) {
      return 0; 
    }
  
    const spielbergDramas = moviesArray.filter(
      movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    );
  
    return spielbergDramas.length; 
  }
  
  const SpielbergMoviesCount = howManyMovies(movies);
  console.log(SpielbergMoviesCount);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
      return 0; 
    }
  
    const scoredMovies = moviesArray.filter(movie => typeof movie.score === 'number');
  
    if (scoredMovies.length === 0) {
      return 0; // why is Jasmine unhappy?
    }
  
    const totalScores = scoredMovies.reduce((sum, movie) => sum + (movie.score || 0), 0);
    const averageScore = totalScores / scoredMovies.length;
  
    return parseFloat(averageScore.toFixed(2)); 
  }
  

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
  
    if (dramaMovies.length === 0) {
      return 0;
    }
  
    let totalScore = 0;
    for (let i = 0; i < dramaMovies.length; i++) {
      totalScore += dramaMovies[i].score || 0;
    }
  
    const averageScore = totalScore / dramaMovies.length;
    return Number(averageScore.toFixed(2));
  }

  

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const orderedMovies = Array.from(moviesArray);
  
    orderedMovies.sort((a, b) => {
      if (a.year !== b.year) {
        return a.year - b.year;
      } else {
        return a.title.localeCompare(b.title);
      }
    });
  
    return orderedMovies;
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const alphabeticalTitles = Array.from(moviesArray)
      .map(movie => movie.title)
      .sort((titleA, titleB) => titleA.localeCompare(titleB));
  
    if (alphabeticalTitles.length <= 20) {
      return alphabeticalTitles;
    } else {
      return alphabeticalTitles.slice(0, 20);
    }
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
