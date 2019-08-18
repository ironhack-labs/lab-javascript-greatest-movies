/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

const roundNumber = (number, digits) => Math.round(number * 10 ** digits) / 10 ** digits;
// console.log(roundNumber(10.323232, 2));
function ratesAverage(movies){
    let sum = 0;
    let avg = 0;
    for(let val of movies){
        if(val.rate){
            sum += parseFloat(val.rate);
        }
    }
    avg = sum / movies.length;
   return roundNumber(avg, 2);
   //return avg;
}

// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate (movies){
    const dramaMovies = movies
        .filter(function (items){
            return items.genre.includes('Drama');
        });
    const avgm = ratesAverage(dramaMovies);
        // .map(function (items){
        //     return sum += parseFloat(items.rate) / items.length;
        // });
        return dramaMovies.length ? avgm : 0;
    }


// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByDuration (movies) {
    const valuesOrdered = movies.sort(function (a, b) {      
        if (a.duration > b.duration){
            return 1;
       }else if (a.duration < b.duration) {
            return -1;
            }
        else { if (a.title > b.title){
                return 1;
             } else if (a.title < b.title) {
                return -1;
             }else return 0;
        }
    });
         return valuesOrdered;
      } 

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(movies){
    let count = 0;
    const countMovies = movies.filter(function (items){
       if(items.genre.includes('Drama') && items.director ==='Steven Spielberg'){
        count++;
     }
     return count;
   });
   return count;
 }


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies){
    const titleMovies = movies.map(function (items){
        return items.title;
    });
    titleMovies.sort().splice(20);
    return titleMovies;
 }

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies){
    let newArray = [];
    let mins = 0;
    const toMinutes = movies.filter(function (items){
        let splitedDuration = items.duration.toString().split(' ');
      if(splitedDuration.length === 1){
        if(splitedDuration[0].includes("h")){
            mins = parseFloat(splitedDuration[0]) * 60;
         }else {
            mins = parseFloat(splitedDuration[0]);
     } } else{
            mins = parseFloat(splitedDuration[0]) * 60 + parseFloat(splitedDuration[1]);
      }
      return items.duration = mins;
    });
    for(let i=0; i<toMinutes.length; i++){
        // if(toMinutes[i]=== movies.duration){
        //     toMinutes[i] = mins;
        // }
        newArray.push(toMinutes[i]);
    } 
return newArray;
}

/********************* NOT DONE ***************/

// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(movies){
    let avg= 0;
       const bestAvg = movies.map(function (items){
           if(items.year === items.year){
            avg = items.year + items.year;
           }
      return avg;
       });
      
   return movies.length ? bestAvg : null;
  }
  
