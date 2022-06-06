// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directors = movies.map(movie => {
    return movie.director;
  });
  
  // BONUS
  const cleanDirectors = [];
  directors.forEach(director =>{
    if(!cleanDirectors.includes(director)){
      cleanDirectors.push(director);
    }
  });
  return cleanDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const spielbergMovies = movies.filter(movie =>{
    return (movie.director === 'Steven Spielberg')
  });

  const spielbergDramaMovies = spielbergMovies.reduce((acc,movie)=>{
    if (movie.genre.includes("Drama")) {
      acc ++;
    }
    return acc;
  },0);

  return spielbergDramaMovies;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if(movies.length === 0){
    return 0;
  }
  const totalMovies = movies.length;

  const sumOfScores = movies.reduce((acc,movie)=>{
    if(movie.score){
      acc += movie.score;
    }
    return acc;
  },0);

  const averageScore = sumOfScores / totalMovies;

  return parseFloat(averageScore.toFixed(2));
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter(movie => movie.genre.includes("Drama"));

  if (dramaMovies.length === 0) {
    return 0;
  }

  const totalDramaMovies = dramaMovies.length;

  const sumOfScores = dramaMovies.reduce((acc,movie)=>{
    if(movie.score){
      acc += movie.score;
    }
    return acc;
  },0);

  const averageScore = sumOfScores/totalDramaMovies;

  return parseFloat(averageScore.toFixed(2));

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  sortedMovies = [...movies];

  sortedMovies.sort((a,b)=>{
    if(a.year === b.year){

      if(a.title < b.title){
        return -1;
      }else if(a.title > b.title){
        return 1;
      }else{
        return 0;
      }
    }else{
      return a.year - b.year;
    }
  });

  return sortedMovies;
}
//orderByYear(movies)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  sortedMovies = [...movies];
  
  sortedMovies.sort((a,b)=>{
    if (a.title < b.title) {
      return -1;
    } else if (a.title > b.title) {
      return 1;
    } else {
      return 0;
    }
    });

  const sortedMovies20 = sortedMovies.slice(0,20);

  return sortedMovies20.map(movie => movie.title);

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  minuteMovies = [...movies];

  const minuteMoviesFinal = minuteMovies.map(movie => {
    formatedMovie = {...movie};
    
    const time = formatedMovie.duration;

    if(time.toLowerCase().includes("h") && time.toLowerCase().includes("min")){
      const spliteTime = time.split(" ");
      //remove the h from hour
      const hours = parseFloat(spliteTime[0].replace(/\D/g, ''));
      //remove the min from the minute
      const minutes = parseFloat(spliteTime[1].replace(/\D/g, ''));
            
      formatedMovie.duration = hours * 60 + minutes;


    }else if(time.toLowerCase().includes("h")){
      const hours = parseFloat(time.replace(/\D/g, ''));

      formatedMovie.duration = hours * 60;

    }else if(time.toLowerCase().includes("min")){
      const minutes = parseFloat(time.replace(/\D/g, ''));

      formatedMovie.duration = minutes;
    }

    return formatedMovie;
  });

  return minuteMoviesFinal;

}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  if(movies.length === 0) return null;

  /*
  Score by year structure = [
    {
      year : xxxxx,
      totalSum: xx,
      quantity: xx,
    },
    {
      ...
    }...
  ]
  */
  scoresByYear  = movies.reduce((yearList,movie) => {
    //if this movie year is alredy on the list
    let indexOfYear = 0;
    let founded = false;
    yearList.forEach((element, i) => {
      if(element.year === movie.year){
        indexOfYear = i;
        founded = true;
        //cant use a break in a for each :c
      }
    });

    if(founded){
      const currentYear = yearList[indexOfYear];
      currentYear.totalSum += movie.score;
      currentYear.quantity++;
    }else{
      yearList.push({
        "year": movie.year,
        "totalSum": movie.score,
        "quantity" : 1,
      })

    }

    return yearList;
  },[]);

  //calculate the averages of the years
  scoresByYearAverage = scoresByYear.map(year=>{
    const yearWithAverage = {
      ...year,
      "average": (year.totalSum / year.quantity).toFixed(1),
    };
    return yearWithAverage;
  });
  
  //get the best year
  const bestYear = scoresByYearAverage.reduce((bestScoreSoFar,year)=>{
    if(bestScoreSoFar.average < year.average){
      return year;
    }else if(bestScoreSoFar.average === year.average){
      if(bestScoreSoFar.year > year.year){
        return year;
      }else{
        return bestScoreSoFar;
      }
    }else{
      return bestScoreSoFar;
    }
  });
  //check for decimals
  let average = bestYear.average;
  //if the number has no decimals remove the .0
  if(!( bestYear.average % 1)){
    average = parseInt(average);
  }
  const message = `The best year was ${bestYear.year} with an average score of ${average}`;

  return message;
}
//bestYearAvg(movies)
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

