/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
//map 


function turnHoursToMinutes(arr) {
  
  let moviesInMinutes = arr.map((everyMovieObj) => {
    let hours = 0;
    let totalDuration = 0;
    let minutes = 0;
    let resultObj = {};
   
    resultObj.title = everyMovieObj.title;
    resultObj.year = everyMovieObj.year;
    resultObj.director = everyMovieObj.director;
    resultObj.genre = everyMovieObj.genre;
    resultObj.rate = everyMovieObj.rate;
    
    let arrayOfDuration = everyMovieObj.duration.split(' ');
    if(arrayOfDuration[0].length < 4) 
    {
      //means our first element is amount of hours
      //also parseInt can take "22min" and will return number 22
      //without any extra steps
      hours = Number(arrayOfDuration[0].slice(0, -1));
    } else {
      //means our first element is amount of minutes
      minutes = Number(arrayOfDuration[0].slice(0, -3))
    }
    if(arrayOfDuration[1]) {
      minutes = Number(arrayOfDuration[1].slice(0, -3))
    }
    totalDuration = hours * 60 + minutes;
    resultObj.duration = totalDuration;
    return resultObj
  })
  return moviesInMinutes //arr on movies with duration in minutes
}

// Get the average of all rates with 2 decimals 
//reduce
//should return a number
function ratesAverage (arr) {
  let combinedRatingOfAllMovies = arr.reduce((accumulator, currentValue) => {
    return accumulator + Number(currentValue.rate)
  }, 0)
  //apparently toFixed turns number into a string, so we turn it 
  //back to number with Number()
  return Number((combinedRatingOfAllMovies / arr.length).toFixed(2))
}

  // let rateForYearX = yearArr.reduce((a, b) => {
    //   return Number(a) + Number(b.rate);
    // }, 0);

// Get the average of Drama Movies
//filter only the drama and then call ratesAverage with new array
function dramaMoviesRate(arr) {
  let dramaMoviesArray = arr.filter((eachMovie) => {
    return eachMovie.genre.includes('Drama')
  })
  if(dramaMoviesArray.length === 0) {
    return
  }
  return ratesAverage(dramaMoviesArray)
}


// Order by time duration, in growing order
//sort

function orderByDuration(arr) {
  let moviesOrderedByDuration = [];
  if(arr.length == 1) {return arr}
  if(typeof arr[0].duration === 'string') {
    moviesOrderedByDuration = turnHoursToMinutes(arr);
  }
  moviesOrderedByDuration = arr
  .sort((a,b) => {
    if (a.duration > b.duration) {return 1}
    if (a.duration < b.duration) {return -1}
    if (a.duration == b.duration) {
      if(a.title > b.title) {return 1}
      if(a.title < b.title) {return -1}
      return 0
    }
  });

  console.log(moviesOrderedByDuration);
  return moviesOrderedByDuration
}

// How many movies did STEVEN SPIELBERG
//filter
function howManyMovies(arr) {
  if(arr.length == 0) {return}
let spilbergMovies = arr.filter((eachMovie) => {
  return eachMovie.director === 'Steven Spielberg' && eachMovie.genre.includes('Drama')
})
let numberOfMovies = spilbergMovies.length;
if(numberOfMovies == 0) {return `Steven Spielberg directed 0 drama movies!`}
return `Steven Spielberg directed ${numberOfMovies} drama movies!`

}

// Order by title and print the first 20 titles
//
function orderAlphabetically(arr) {
  let orderedTitlesArray = arr
  //sorting arr titles 
    .sort((a,b) => {
    if (a.title < b.title) {return -1}
    if (a.title == b.title) {return 1} 
    return 0
    }) 
  //new arr with only titles
    .map(eachSortedMovie => {
      return eachSortedMovie.title
    })

  let orderedTitlesArrayTrimmed = [];
  //.slice(0, 20) would be a better option to use here
  for(i=0; i<=orderedTitlesArray.length-1; i++) {
    if(i < 20) {
      orderedTitlesArrayTrimmed.push(orderedTitlesArray[i])
    } else {
      break;
    }
  }
  
  console.log(orderedTitlesArrayTrimmed);
  return orderedTitlesArrayTrimmed
}

function bestYearAvgAnotherApproach (arrayOfMovies) {
  if (arrayOfMovies.length === 0) {
    return
  }
  let newObj = {};
  arrayOfMovies.forEach(eachMovieObject => {
    if(!newObj[eachMovieObject.year]) {
      newObj[eachMovieObject.year] = {num: 1, totalRate: Number(eachMovieObject.rate)};
    } else {
      newObj[eachMovieObject.year].num += 1;
      newObj[eachMovieObject.year].totalRate += Number(eachMovieObject.rate);
    }
  });

  let greatest = { year: '', num: 0};

  for( let eachKey in newObj) {
    if(newObj[eachKey].totalRate / newObj[eachKey].num > greatest.num) {
      greatest.num = newObj[eachKey].totalRate / newObj[eachKey].num;
      greatest.year = eachKey;
    }
    console.log(eachKey, newObj[eachKey]);
  }

  return `The best year was ${greatest.year} with an average rate of ${greatest.num}`
} 



// Best yearly rate average
//loop through them all, do average for all the years and then figure out the best
function bestYearAvg(arr) {
  let bestRate = 0;
  let bestYear = "";
  if (arr.length === 0) {
    return
  }
  arr.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    }
    if (a.year < b.year) {
      return -1;
    }
    return 0;
  });

  let start = arr[0].year;
  let last = arr[arr.length - 1].year;
  //for i= 1921 to i = 2017
  for (let i = start; i <= last; i++) {
    let yearArr = arr.filter(eachMovie => {
      //new array with the movies only of a certain year
      //typoof year = string
      return eachMovie.year === `${i}`;
    });

    let currAverageRate = ratesAverage(yearArr);
    if (bestRate < currAverageRate) {
      bestRate = currAverageRate;
      bestYear = i;
    }
  }
  return `The best year was ${bestYear} with an average rate of ${bestRate}`;
}

 