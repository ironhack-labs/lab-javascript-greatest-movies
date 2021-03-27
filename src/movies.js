// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(array){
    const allDirectors = array.map(function(name){
        return name.director;
    });
    return allDirectors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function removeDuplicates(array){
    return array.filter((value,index) => 
        array.indexOf(value) === index);
    }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array){
    let movieCount = 0;
    const movies = array.filter(function(name){
        if(name.director.includes('Steven Spielberg') && name.genre.includes('Drama')){
            movieCount++;
        }
    });
    return movieCount;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array){
    if (!array.length) {
        return 0;
    } 
    const sum = array.reduce(function(acc,val) {
        if (!val.rate ) {
            return acc;
        }
        return acc + val.rate;
    },0);
    let average = sum / array.length;
    return parseFloat(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array){
    if (!array.length) {
        return 0;
    } 

    const sum = array.reduce(function(acc,val) {
        if(!val.genre.includes('Drama')){
            return acc;
        }
            return acc + val.rate;
    },0);

    let dramaMovies = 0;
    for(let movie of array){
        if(movie.genre.includes('Drama')){
            dramaMovies++;
        }
    }
    if(dramaMovies === 0){
        return 0;
    }
    let average = sum / dramaMovies;
    return parseFloat(average.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array){
    if (!array.length) {
        return 0;
    } 

    const mappedArray = array.map(function(obj){
        return obj;
    })

    const sortByYear = mappedArray.sort(function(a,b) {

        if (b.year < a.year){
            return 1;
        }
        if(a.year < b.year){
            return -1;
        }
        if(b.year === a.year){
            if(b.title < a.title){
                return 1;
            }    
            if(a.title < b.title){
                return -1;
            }
            if(b.title === a.title){
                return 0;
            }
        }
    });
    return sortByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array){
  
    const newArray = array.map(function(obj){
      return obj.title;
    }).sort().slice(0,20);
   return newArray;
  }  


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array){
    let newArray = array.map(function(obj){
        return obj.duration;
    });
        return newArray;
}


// let hour = el.duration.charAt(0);
// let min1 = el.duration.charAt(3);
// let min2 = el.duration.charAt(4);

// if(el.duration.charAt(4)=== NaN){
//  min2 = 0;
// }
// hour = parseInt(hour);
// let min = min1 + min2;
// min = parseInt(min);

// let conversion = hour*60 + min;




// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

