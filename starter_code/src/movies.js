/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
    const newArray = array.slice().sort(function(a, b) {
        if (a.year !== b.year){
            return a.year - b.year;
        } else {
            return a.title.localeCompare(b.title);
        }   
    });
    return newArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(array) {
    const newArray = array.filter(function(movie){
        return (movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))
    });
    return newArray.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array){
    const newArray = array.map(function(movie) {
        return movie.title;
    });

    newArray.sort(function(a, b) {
        return a.localeCompare(b);
    });

    if (newArray.length > 20) return newArray.slice(0, 20);

    return newArray;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
    if (array.length === 0){
        return 0;
    } else {
        return Number((array.reduce(function(acc, movie) {
            if(typeof movie.rate === "number"){
                return acc + movie.rate;
            } else {
                return acc + 0;
            }
        }, 0) / array.length).toFixed(2));
    }
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
    const newArray = array.filter(function(movie){
        return (movie.genre.includes("Drama"))
    });
  
    if (newArray.length === 0) {
      return 0;
    } else {
      return Number((newArray.reduce(function(acc, movie) {
            return acc + movie.rate;
      }, 0) / newArray.length).toFixed(2));
    }
  }

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array) {

    const newArray = array.slice().map(function(element){
      const newElement = {...element};
      if (newElement.duration.indexOf('min') >= 0 && newElement.duration.indexOf('h') >= 0) {
        newElement.duration = Number((newElement.duration.split('h')[0] * 60)) + Number((newElement.duration.split(' ')[1].split('min')[0]));
      } else if (newElement.duration.indexOf('h') >= 0 && newElement.duration.indexOf('min') < 0){
        newElement.duration = Number((newElement.duration.split('h')[0] * 60));
      } else {
        newElement.duration = Number((newElement.duration.split('min')[0]));
      }
      return newElement
    });

    return newArray;
}


// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(array) {

    if (array.length === 0) {
        return null;
    }

    const newObj = {};

    for(let i = 0; i < array.length; i++){
        if(newObj[array[i].year] === undefined){
            newObj[array[i].year] = {
                count : 1,
                rateSum : parseFloat(array[i].rate),
                average : parseFloat(array[i].rate)
            }
            } else {
                newObj[array[i].year].count += 1;
                newObj[array[i].year].rateSum += parseFloat(array[i].rate);
                newObj[array[i].year].average = parseFloat((newObj[array[i].year].rateSum / newObj[array[i].year].count).toFixed(2));
            }
        }
    
    newArrayObj = Object.entries(newObj);

    newArrayObj.sort(function(a, b) {
      return b[1].average - a[1].average;
    })

        return `The best year was ${newArrayObj[0][0]} with an average rate of ${newArrayObj[0][1].average}`;
};