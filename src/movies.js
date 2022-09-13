// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(moviesArray) {
  const directors = moviesArray.map(function (obj) {
    return obj.director;
  });

// Remove repetitive values (Bonus)
 /* for(let i = 0; i < directors.length; i++){
    let director = directors[i]; 
    if (directors.indexOf(director) !== lastIndexOf(director)){
        directors.splice(directors[i], 1);
    }
  } */
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const findDirectior = moviesArray.filter(function (moviesDetail) {
    return (
      moviesDetail.director === "Steven Spielberg" &&
      moviesDetail.genre.includes("Drama")
    );
  });
  return findDirectior.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const total = moviesArray.reduce(function (sum, movie) {
    if (!movie.score) {
      movie.score = 0;
    }
    return sum + movie.score;
  }, 0);
  const average = total / moviesArray.length;
  return Math.round(average * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const findDrama = moviesArray.filter(function (moviesDetail) {
    return moviesDetail.genre.includes("Drama");
  });
  if (findDrama.length === 0) {
    return 0;
  }
  const totalDrama = findDrama.reduce(function (sum, movie) {
    return sum + movie.score;
  }, 0);
  const averageOfDrama = totalDrama / findDrama.length;
  return Math.round(averageOfDrama * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let moviesCopy = moviesArray.slice();
  let moviesSort = moviesCopy.sort(function (a, b) {
    return a.year - b.year || a.title.localeCompare(b.title);
  });
  return moviesSort;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const moviesCopy = moviesArray.slice();
    let getTitle = moviesCopy.map(function (obj) {
      return obj.title;
    });
    let titlesSort = getTitle.sort();
    if (titlesSort.length < 20){
        return titlesSort;
    }else {
        return titlesSort.slice(0, 20)
    }
  }



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let movies =  JSON.parse(JSON.stringify(moviesArray));

    // let movies = moviesArray.slice();

    for (let i = 0; i < movies.length; i++){
        let time = movies[i].duration.match(/[a-zA-Z]+|[0-9]+/g);
        if (time[1] === "h" && time[3] === "min"){
            movies[i].duration = Number(time[0]) * 60 + Number(time[2]);
        }
        else if (time[1] === "h" && time[3] !== "min"){
            movies[i].duration = Number(time[0]) * 60;
        }
        else if (time[1] !== "h" && time[3] === "min"){
            movies[i].duration = Number(time[2]);
        }
        else{
            movies[i].duration = 0;
        }  
    }
    return movies;
}
    /*
    arrayCopy.forEach((element) => {
        let arrTime = element.duration.split(" ");
        element.duration = Number(arrTime[0].replace("h", "")) * 60 + Number(arrTime[1].replace("min", ""));
      });
    */



// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  
    
}

