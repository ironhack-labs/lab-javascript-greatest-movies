/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

// function turnHoursToMinutes (array){
//     return array.map(function(i){
//         var newArrayItem = {};
//         if(i.duration.includes("m") && i.duration.includes("h")){
//           console.log("1st condition");
//           newArrayItem.duration = parseInt(i.duration,10)*60+parseInt(i.duration.slice(3,6),10);
//         } else if (i.duration.includes("h")) {
//           console.log("2nd condition",typeof newArrayItem.duration)
//           newArrayItem.duration = parseInt(i.duration,10)*60
//         } else {
//           console.log("3rd condition");
//            newArrayItem.duration = parseInt(i.duration,10)
//         }
//         console.log(typeof newArrayItem.duration)
//         return newArrayItem;
//       });
// }

function turnHoursToMinutes (array){
    return array.map(function(i){
        var newArrayItem = Object.assign({}, i); 
        if(i.duration.includes("m") && i.duration.includes("h")){
          newArrayItem.duration = parseInt(i.duration,10)*60+parseInt(i.duration.slice(3,6),10);
        } else if (i.duration.includes("h")) {
          newArrayItem.duration = parseInt(i.duration,10)*60
        } else {
           newArrayItem.duration = parseInt(i.duration,10)
        }
        return newArrayItem;
      });
}

    
// Get the average of all rates with 2 decimals 
function createAvg(array) {
    // console.log("==============")
    // console.log("from the createAVG function:", array);
    if(!!array === false){
      return undefined;
    }
    return array.map(function(a) {
        return Number(a.rate);});
      
  };

function ratesAverage(array) {
    if(array[0] === undefined){
        return undefined;
    }
    var dramaRates = parseFloat((array.reduce(function(acc, n){
        // console.log("=====================================")
        // // console.log("from the ratesAverage function:", array);
        // console.log("acc:", acc);
        // console.log("n.rate:", n.rate);
        if (n.rate === undefined) 
            return acc + n;
        else if (typeof n.rate === "string") {
            return acc + Number(n.rate)
        } else
            return acc + n.rate;
    }, 0)/array.length).toFixed(2));
    return dramaRates;
};

// Get the average of Drama Movies
function dramaMoviesRate(array) {
    let dramaArr = array.filter(function(movie) {
      return movie.genre.includes("Drama");
    });
    if (dramaArr.length > 0) {
      return ratesAverage(dramaArr);
    }
  };
  
  dramaMoviesRate(movies);

// Order by time duration, in growing order
function orderByDuration(array){
    return array.sort(function(a, b){
        if (a.duration === b.duration){
            var titleA = a.title.toLowerCase(), titleB = b.title.toLowerCase();
            if (titleA < titleB)
                return -1 
            if (titleA > titleB)
                return 1
        }
        return a.duration-b.duration;
    });
  };

// How many movies did STEVEN SPIELBERG
function spielbergFilter(array){
    return array.filter(function(item) {
      return (item.genre.includes('Drama') && (item.director === 'Steven Spielberg')
      )})
  }
  
  function howManyMovies(array) {
      if(array.length === 0){
          return undefined;
      }
    var spielberg = spielbergFilter(array);
    return "Steven Spielberg directed " + spielberg.length + " drama movies!";
  };
  

// Order by title and print the first 20 titles
function onlyTitles(array){
    return array.map(function(item){
        return item.title;
    });
};

function orderAlphabetically(array){
    var titleArray = onlyTitles(array);
    titleArray.sort(function(a, b){
        var titleA = a.toLowerCase(), titleB = b.toLowerCase();
        if (titleA < titleB)
            return -1
        if (titleA > titleB)
            return 1
    });
    return titleArray.slice(0,20);
}


// Best yearly rate average

//Get an array containing only the years of each item - including duplicates
function arrayOfAllYears(array){
    return array.map(function(item){
        return item.year;
    });
};

//Sort the array of years from oldest to newest and remove duplicates
function moviesByYear(array) {
    var array = arrayOfAllYears(array);
    return array.sort().filter(function(item, pos, arr) {
        return !pos || item != arr[pos - 1];
    })
};

// Get an array of all items from a single year by filtering each movie according to it's year
function allItemsInASingleYear(moviesArray){
    var yearArray = moviesByYear(moviesArray);
    return yearArray.map(function(i){
        return moviesArray.filter(function(item){
            return item.year === i;
        });
    });
}

// Create a new array(of years) of arrays(with rates and year) that contains only the year and rate of each movie, sorted by year
function getOnlyRatesByYear(array){
    var array = allItemsInASingleYear(array);
    return array.map(function(item){
        return {
                year: item[0].year,
                rate: item.map(function(insideItem){
                return insideItem.rate;
            })
        }
    })
}


//Create an array where each item has the year itself and each year's average rate 
function yearlyRatesAverage(array){
    var array = getOnlyRatesByYear(array);
    return array.map(function(item){
        if (item.rate.length === 1) {
            return {
                year: item.year,
                rate: Number(item.rate)
            }
        } else if(item.rate.length > 1) {
            return {
                year: item.year,
                rate: parseFloat((item.rate.reduce(function(acc, n){
                    return (acc + Number(n));
                }, 0)/item.rate.length).toFixed(2))
            }
            
        } else
        console.log("something is wrong in the yearlyRatesAverage function");
    })
}
// console.log(yearlyRatesAverage(movies));

// return the final result - a string that sayd which year was best and what was it's rate
function bestYearAvg(array){
    var array = yearlyRatesAverage(array);
    if(array[0] === undefined){
        return undefined;
    }
    else {
        var sortedByRate = array.sort(function(a,b){
            return b.rate - a.rate;
        })
        var bestYear = sortedByRate[0];
        return "The best year was " + bestYear.year + " with an average rate of "+ bestYear.rate;
    }
     
};
console.log(bestYearAvg(movies));

