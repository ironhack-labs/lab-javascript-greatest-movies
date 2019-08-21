/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

const roundNumber = (number, digits)=>  Math.round(number * 10 ** digits) / 10 ** digits;

const ratesAverage = movies.reduce(function (accumulator, item) {
    let rate = item.rate;
    return accumulator + parseFloat(rate);
  }, 0);
  console.log(roundNumber((ratesAverage / movies.length), 2));

// Correction
// function ratesAverage(movies){
//    let sum = 0;
//    let avg = 0;
//    for (let val of movies) {
//      if (val.rate) {
//        sum += parseFloat(val.rate);
//      }
//    }
//    avg = sum / movies.length;
//    return roundNumber(avg, 2);
// }


// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    movies.filter(function (){
      let sum = 0;
      let avg = 0;
      for (let val of movies) {
        if (genre.includes("Drama"))
        return sum += parseFloat(val.rate)
      }
    avg = sum / val.length
    return roundNumber(avg, 2);
    })
  }
//Correction
// function dramaMoviesRate (movies) {
//     const dramaMovies = movies.filter(movie => {
//       if (movie.genre.includes('Drama')) {
//         return true;
//       } else {
//         return false;
//       }
//     });
//     if (dramaMovies.length === 0) return 0;
//     // if (!dramaMovies.length) return 0;
//     const averageDramaMovieRating = ratesAverage(dramaMovies);
//     return averageDramaMovieRating;
//   }


// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)


// const orderByDuration = movies => movies.sort((first, second) => {
//     if (first.duration > second.duration) {
//       return 1;
//     } else if (first.duration < second.duration) {
//       return -1;
//     } else if (first.title > second.title) {
//       return 1;
//     } else if (first.title < second.title) {
//       return -1;
//     } else {
//       return 0;
//     }
//   })


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies (movies) {
    movies.filter(function (item){
    return item.genre.includes("Drama") &&
    item.director === "Steven Spielberg";
 }).length   
}

// const howManyMovies = movies => movies.filter(item => {
//     return item.genre.includes('Drama') && item.director === 'Steven Spielberg';
//   }).length;


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// const orderAlphabetically = movies => movies.sort((first, second) => {
//     if (first.title > second.title) {
//       return 1;
//     } else if (first.title < second.title) {
//       return -1;
//     } else {
//       return 0;
//     }
//   })
//   .slice(0, 20)
//   .map(item => item.title);

// .reduce((accumulator, item) => {
//   if (accumulator.length >= 20) {
//     return accumulator;
//   } else {
//     return accumulator.concat([ item ]);
//   }
// }, [])
// .filter((value, index, array) => {
//   if (index >= 20) return false;
//   return true;
// });  



// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// const parseDuration = duration => {
//     const parsed = duration.split(' ').reduce((accumulator, value) => {
//       let isHours = value.includes('h');
//       let parsedValue = parseInt(value.split('h').join('').split('min').join(''));
//       return accumulator + parsedValue * (isHours ? 60 : 1);
//     }, 0);
//     return parsed;
//   };
  
//   const turnHoursToMinutes = movies => movies.map(item => {
//     const duration = parseDuration(item.duration);
//     // return Object.assign({}, item, { duration: duration });
//     // This way we're not mutating the object, we are returning a new one
//     return { ...item, duration: duration };
//   });

// BONUS Iteration: Best yearly rate average - Best yearly rate average

const bestYearAvg = movies => {
    if (!movies.length) return null;
    const ratings = movies.reduce((accumulator, item) => {
      let year = item.year;
      let rate = parseFloat(item.rate);
      return {
        ...accumulator,
        [ year ]: [ ...accumulator[ year ] || [], rate ]
      };
    }, {});
    let averages = {};
    for (let year in ratings) {
      averages[year] = ratings[year].reduce((acc, val) => acc + val, 0) / ratings[year].length;
    }
    const bestYear = Object.entries(averages).reduce((accumulator, value) => {
      if (!accumulator || value[1] > accumulator[1]) return value;
      return accumulator;
    }, null);
    return `The best year was ${ bestYear[0] } with an average rate of ${ bestYear[1] }`
  };









// Object destructoring
// Rest spread operator
// let person = { name: 'jose', age: 26 };
// let otherPerson = { ...person, city: 'Lisbon' };


/*
GUI's Solution

const bestYearAvg = (arr) => {
   var finalYear = 0;
   var finalSum = 1;
   var finalCount = 1;
 if(arr.length === 0){return null}
 for (let movie of arr){
   var tempSum = 0;
   var tempCount = 0;
   arr.filter((specificMovie) => {
       if(specificMovie.year === movie.year){
           tempSum += parseFloat(specificMovie.rate)
           tempCount += 1
           return true
       }
   })
   if(tempSum/tempCount > finalSum/finalCount){
       finalSum = tempSum;
       finalCount = tempCount;
       finalYear = movie.year;
   }
   else if(tempSum/tempCount === finalSum/finalCount && parseInt(finalYear) > parseInt(movie.year)){
       finalSum = tempSum;
       finalCount = tempCount;
       finalYear = movie.year;
   }
 }
 return The best year was ${finalYear} with an average rate of ${Math.round(finalSum/finalCount * 100) / 100}
 }

 */
