/* eslint no-restricted-globals: 'off' */
function test() {
  console.log(movies);
};
// Turn duration of the movies from hours to minutes 

const turnHoursToMinutes = (movieList) => {
  return movieList.map(movie => {
    if(movie.duration.indexOf('m') == -1){
      let hours = movie.duration.substring(0, movie.duration.indexOf('h'));
      return {
      title: movie.title,
      year: movie.year,
      director: movie.director,
      duration: (parseInt(hours) * 60),
      genre: movie.genre,
      rate: movie.rate
      }
    } else if(movie.duration.indexOf('h') == -1){
      let minutes = movie.duration.substring(0, movie.duration.indexOf('m'));
      return {
      title: movie.title,
      year: movie.year,
      director: movie.director,
      duration: parseInt(minutes),
      genre: movie.genre,
      rate: movie.rate
      } 
    }
    let hours = movie.duration.substring(0, movie.duration.indexOf('h'));
    let minutes = movie.duration.substring(movie.duration.indexOf('h') + 2, movie.duration.indexOf('m'));
    //let totalMinutes = (parseInt(hours) * 60) + parseInt(minutes);
    return {
      title: movie.title,
      year: movie.year,
      director: movie.director,
      duration: (parseInt(hours) * 60) + parseInt(minutes),
      genre: movie.genre,
      rate: movie.rate
    }
  })
}

const newMovies = turnHoursToMinutes(movies);

// Get the average of all rates with 2 decimals 
const ratesAverage = (arr) => {
  let totalAverage = arr.reduce((acc, movie) => {
    if(movie.rate == '') return acc;
    return acc + parseFloat(movie.rate);
  }
  ,0);
  totalAverage = Math.round((totalAverage/arr.length) * 100) / 100;
  return totalAverage;
};
// Get the average of Drama Movies
const dramaMoviesRate = (arr) => {
  let dramas = arr.filter(movie => movie.genre.includes('Drama'));
  if(dramas.length == 0) return undefined;
  return ratesAverage(dramas);
};
 

// Order by time duration, in growing order, then by alphabetical order if two movies have the same length
const orderByDuration = (arr) => {
  let durationArray = arr.sort((a,b) => (a.duration > b.duration) ? 1 : ((b.duration > a.duration) ? -1 : ((a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))));
  return durationArray;
};

// How many movies did STEVEN SPIELBERG
const howManyMovies = (arr) => {
  if(arr.length == 0) return undefined;
  let dramas = arr.filter(movie => movie.genre.includes('Drama'));
  let spielbergMovies = dramas.filter(movie => movie.director === 'Steven Spielberg');
  return (`Steven Spielberg directed ${spielbergMovies.length} drama movies!`);
};

// Order by title and print the first 20 titles
const orderAlphabetically = (arr) => {
  //Sort by unicode values
  let sortedArray = arr.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
  //Take the top 20 only
  sortedArray = sortedArray.slice(0, 20);
  //Map the titles to their indexes
  return sortedArray.map(movie => {
    return movie.title;
  });
};


const bestYearAvg = (movieArray) => {

  if(movieArray.length == 0) return undefined;
  if(movieArray.length == 1) return `The best year was ${movieArray[0].year} with an average rate of ${movieArray[0].rate}`;

  //Pull all unique years
  let uniqueYears = [...new Set(movieArray.map(movie => movie.year))];

  //Sort all years
  uniqueYears.sort((a,b) => {
    return a-b
  });

  //Create year map storage
  let yearMap = {};

  //Create keys for yearMap for each unique year
  uniqueYears.forEach(element => {
    yearMap[element] = [];
  });
  

  //Make a copy of the keys of yearMap to be used for mapping average ratings to years
  let yearRatings = Object.assign({}, yearMap);

  
  //Map each movie to the year key in which it was released
  movieArray.forEach(element => {
    yearMap[element.year].push(element);
  });

  //Iterate through the yearMap and generate an average rating for each year. Send this average to the correct year key in yearRatings
  for (var y in yearMap){
      yearRatings[y] = ratesAverage(yearMap[y]);
  }

  let highestYear, highestYearRating = 0;

  for(year in yearRatings){
    if(yearRatings[year] > highestYearRating){
      highestYearRating = yearRatings[year];
      highestYear = year;
    }
    else if(yearRatings[year] == highestYearRating){
      if(highestYear > year) highestYear = year;
    }
    console.log(year, highestYearRating, highestYear)
  }

  return `The best year was ${highestYear} with an average rate of ${highestYearRating}`;



//   // var result = Object.keys(yearRatings).map(function(key) {
//   //   return [yearRatings[key], Number(key)];
//   // });
//   // console.log(result);
//   // console.log(result.length);
//   // console.log(result[result.length -1]);
//   //Sort the years by rating in ascending order
//   let bestYearsSorted = result.sort();
  
//   //If more than one year has the same best rating, pull all of the tied ratings out, sort by oldest year, and return the oldest year with the best rating
//   // console.log(bestYearsSorted);
//   // console.log(bestYearsSorted[bestYearsSorted.length -2]);
//   // console.log(bestYearsSorted[bestYearsSorted.length - 1]);
//   if(bestYearsSorted.indexOf(bestYearsSorted[bestYearsSorted.length - 1]) != bestYearsSorted.length -1){
//     let tiedYears = bestYearsSorted.slice(bestYearsSorted.indexOf(bestYearsSorted[bestYearsSorted.length - 1]), bestYearsSorted.length - 1);
//     tiedYears.sort((a,b) => {
//       return a[1] - b[1];
//     });
//     // console.log(tiedYears);
//     return `The best year was ${tiedYears[0][1]} with an average rate of ${tiedYears[0][0]}`
//   }
//   let bestYear = bestYearsSorted.splice((result.length - 1), 1);
//   return `The best year was ${bestYear[0][1]} with an average rate of ${bestYear[0][0]}`;
// 
} 