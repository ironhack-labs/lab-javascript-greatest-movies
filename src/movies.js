// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directors = [];
    directors = moviesArray.map((element)=> { 
        return element.director;
    });
    return directors;
 }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let totalTimes = 0;
    if (moviesArray.length === 0) {
        return 0;
    }

    const spielbegDramaMovies = moviesArray.filter((element)=>{
        if(element.director === 'Steven Spielberg' && element.genre.includes('Drama')){
            totalTimes++;
        }
    })

    return totalTimes;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
      return 0;
    }
        
    const scores = moviesArray.filter(movie => typeof movie.score === 'number');
        
    if (scores.length === 0) {
       return 0;
    }
        
    const total = scores.reduce((sum, movie) => sum + movie.score, 0);
    const average = total / scores.length;
        
    return Math.round(average * 100) / 100;
  }
      


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const drama = moviesArray.filter(movie => movie.genre.includes('Drama'));  
        if (drama.length === 0) {
          return 0;
        }
      
        const totalScore = drama.reduce((sum, movie) => sum + movie.score, 0);
        const averageScore = totalScore / drama.length;
      
        return Math.round(averageScore * 100) / 100;
      }
          
      

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
        const ascending = moviesArray.map(movie => movie).sort((a, b) => {
          if (a.year !== b.year) {
            return a.year - b.year;
          } else {
            return a.title.localeCompare(b.title);
          }
        });
        return ascending;
      }
      
      

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sortedMovies = moviesArray.map(movie => movie.title).sort();
  if (sortedMovies.length <= 20) {
    return sortedMovies;
  } else {
    const top20 = [];
    for (let i = 0; i < 20; i++) {
      top20.push(sortedMovies[i]);
    }
    return top20;
  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map(function(movie) {
    var hours = 0;
    var minutes = 0;
    if (movie.duration.indexOf('h') !== -1) {
      hours = parseInt(movie.duration.substring(0, movie.duration.indexOf('h')));
    }
    if (movie.duration.indexOf('min') !== -1) {
      minutes = parseInt(movie.duration.substring(movie.duration.indexOf(' '), movie.duration.indexOf('min')));
    }
    var totalMinutes = (hours * 60) + minutes;
    return {
      title: movie.title,
      year: movie.year,
      director: movie.director,
      duration: totalMinutes,
      genre: movie.genre,
      score: movie.score
    };
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
