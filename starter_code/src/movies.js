/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 


// function ratesAverage(arr){
//     let sum = (acc, currVal) => Number(acc) + Number(currVal.rate);
//     return arr.reduce(sum,0)/arr.length;
// }

function ratesAverage(arr){
    let sum = (accumulator,currentValue) => Number(accumulator) + Number(currentValue.rate);  
    return Number((arr.reduce(sum,0)/arr.length).toFixed(2));
}

  

// Iteration 2: Drama movies - Get the average of Drama Movies


function dramaMoviesRate (arr){
    const dram = arr.filter((movie) => movie.genre.includes('Drama') === true);
    if (dram.length === 0){
        return 0;
    }
    return ratesAverage(dram);
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)



// function orderByDuration(arr){
//     return arr.sort((a,b) => {
//       if (a.duration < b.duration) {
//         return -1;
//       }
//       else if (b.duration < a.duration) {
//         return 1;
//       }
//       else {
//       return 0;
//       }
//       });
//   }

// }

function orderByDuration(arr){
    return arr.sort((a,b) => {
     if (a.duration < b.duration) return -1;
     if (b.duration < a.duration) return 1;
     if (a.title < b.title) return -1;
     if (b.title < a.title) return 1;
     return 0;
    });
}

// pour le souvenir
//     return arr.sort((a,b) => {
  
//       if (a.duration == b.duration){
//         return arr.sort((a,b) => {
//           if (a.title < b.title){
//             return -1;
//             }
//           else if (b.title < a.title){
//             return 1;
//             }
//           else {
//             return 0;
//             }
//         });
//       }
//       else if (a.duration < b.duration) {
//         return -1;
//       }
//       else {
//         return 1;
//       }
//     });
//   }
  



// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(arr){
    const dramSh = arr.filter((arr) => arr.genre.includes('Drama') === true).filter((arr) => arr.director === 'Steven Spielberg');
    return dramSh.length;    
  }

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
