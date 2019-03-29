/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(arr){
  let newArr = arr.map(function(original){
    let val = {...original}
   if(val.duration.length > 3) {

     let hrArr = val.duration.split('');
     let hr = parseInt(hrArr[0]) * 60;
     let minArr = hrArr.join('').split(' ');
     let min = parseInt(minArr[1]);
     let sum = hr + min;
     val.duration = sum;
     console.log(val)
     return val;

   } else {
       return val
   }
  });

  return newArr
 }

// Get the average of all rates with 2 decimals 

const ratesAverage = (arr) => {
  let arrRate = arr.map((val) => {
    return val.rate
  })
  let promedio = arrRate.reduce((acc, val) => {
    return acc + Number(val)
  }, 0)
  return promedio / arr.length
}

// Get the average of Drama Movies

const dramaMoviesRate = (arr) => {
  let dramaMovies = arr.filter(movie => (movie.genre.includes('Drama')))
  let averageDramaMovies = dramaMovies.map(movie => movie.rate)
  let reduceDramaMovies = averageDramaMovies.reduce((acc, rate) => {
    return acc + Number(rate)
  }, 0)
  return reduceDramaMovies / dramaMovies.length
}

// Order by time duration, in growing order

const orderByDuration = (arr) => {
  let newArr = turnHoursToMinutes(arr)
  let arrSort = newArr.sort((a, b) => (a.duration > b.duration) ? 1 : ((b.duration > a.duration) ? -1 : 0))
  return arrSort
}

// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average

// var movies = [
//   {
//     title: 'The Shawshank Redemption',
//     year: '1994',
//     director: 'Frank Darabont',
//     duration: '2h 22min',
//     genre: ['Crime', 'Drama'],
//     rate: '9.3'
//   },
