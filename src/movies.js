// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(array){
    return array.map(element => element.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array){
    return array.filter(element =>element.director==="Steven Spielberg" && element.genre.includes("Drama")).length;
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array){
    if (array.length===0){
        return 0;
    }
    let rateSum = array.reduce((acc, val)=> {
        if (!val.rate){
            return acc;
        }
        return acc + val.rate}, 0)
    return Number((rateSum/array.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array){
    let onlyDrama = array.filter(element => element.genre.includes("Drama"));
    if (onlyDrama.length===0){
        return 0;
    }
    let rateSum = onlyDrama.reduce((acc, val)=> acc+val.rate, 0)
    return Number((rateSum/onlyDrama.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array){
    let orderedByYear = array.map(el => el).sort(function(movie1, movie2){
      if (movie1.year < movie2.year){
        return -1;
      }
      if (movie1.year === movie2.year){
        if (movie1.title.toLowerCase() < movie2.title.toLowerCase()){
          return -1;
        }
      }
      return +1;
      
    });
    return orderedByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array){
    let titles = array.map(movie => movie.title)
    return titles.sort().slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array){
    function stringToMinutes(duration){
        let hoursString = duration.split(" ")[0];
        let minutesString = duration.split(" ")[1];
        if (duration.indexOf("h")===-1){
            let minutes = Number(duration.split("m")[0]);
            return minutes;
        }
        if (minutesString && hoursString){
            let minutes = (Number(minutesString.slice(0, duration.split(" ")[1].indexOf("m"))));
            let hours = (Number(hoursString.slice(0, duration.split(" ")[0].indexOf("h"))))*60;
            return hours + minutes;
        }
        if (hoursString && !minutesString){
            let hours = (Number(hoursString.slice(0, duration.split(" ")[0].indexOf("h"))))*60;
            return hours;
        }
        
    }
    const moviesInMinutes = array.map(el => el);
    return moviesInMinutes.map(movie => {
        let newMovie = {...movie}
        newMovie.duration = stringToMinutes(movie.duration);
        return newMovie;
    });
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function yearlyMoviesRate(array, specificYear){
    let onlyCurrentYear = array.filter(element => element.year === specificYear);
    if (onlyCurrentYear.length===0){
        return 0;
    }
    let rateSum = onlyCurrentYear.reduce((acc, val)=> acc+val.rate, 0)
    return Number((rateSum/onlyCurrentYear.length).toFixed(1));
}

function bestYearAvg(array){
    if (array.length === 0){
        return null;
    }
    let listOfYears = [];
    let listOfAverages = [];
    for(let movie of array){
        listOfYears.push(movie.year);
    }
    const earliestYear = listOfYears.reduce((acc, year) => {
        if (acc < year){
            return acc;
        }
        return year;
    })
    const latestYear = listOfYears.reduce((acc, year)=> {
        if(acc>year){
            return acc;
        }
        return year;
    })
    for (let currentYear = earliestYear; currentYear <= latestYear; currentYear++){
        function yearlyMoviesRate(array, currentYear){
            let onlyCurrentYear = array.filter(element => element.year === currentYear);
            if (onlyCurrentYear.length===0){
                return 0;
            }
            let rateSum = onlyCurrentYear.reduce((acc, val)=> acc+val.rate, 0)
            return Number((rateSum/onlyCurrentYear.length).toFixed(1));
        }
    }
    for (let currentYear = earliestYear; currentYear <= latestYear; currentYear++){
        listOfAverages.push({Year: currentYear, Average: yearlyMoviesRate(array, currentYear)});
    }
    let sortedListOfAverages = listOfAverages.sort((yearObject1, yearObject2) => {
        if (yearObject1.Average > yearObject2.Average){
            return -1;
        };
    })
    return `The best year was ${sortedListOfAverages[0].Year} with an average rate of ${sortedListOfAverages[0].Average}`

}

console.log(bestYearAvg(movies));