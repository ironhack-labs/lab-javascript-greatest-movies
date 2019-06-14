/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(data) {
    const newData = data.map( movie => {
        let newDuration = 0;

        if (movie.duration.includes("min")  && movie.duration.includes("h")) {
            const duration = movie.duration.split(' ');

            const hours = duration[0].split('h')[0];
            const minutes = parseInt(duration[1].split("min")[0]);

            newDuration = transformToMinutes(hours, minutes)
    
            return {
                ...movie,
                duration: newDuration
            }

        } else if (movie.duration.includes("h")){
            const hours = movie.duration.split('h')[0];

            newDuration = transformToMinutes(hours, 0);

            return {
                ...movie,
                duration: newDuration
            }

        } else if (movie.duration.includes("min")) {
            const minutes = parseInt(movie.duration.split("min")[0]);

            return {
                ...movie,
                duration: minutes
            }
        }   
    }) 

    function transformToMinutes(hours, minutes) {
      return (hours * 60) + minutes
    }
    
    return newData;
}

// Get the average of all rates with 2 decimals 
function ratesAverage(data) {
    const sum = data.reduce( (accumulator, currentValue) => {
        return accumulator + parseFloat(currentValue.rate)
    }, 0)

    return parseFloat((sum / data.length).toFixed(2));
}

// Get the average of Drama Movies
function dramaMoviesRate(data) {
    let sum = 0;
    let dramaCounter = 0;

    data.forEach( movie => {
        if (movie.genre.includes('Drama')) {
            dramaCounter ++
            if(movie.rate) {
                sum+= parseFloat(movie.rate)
            }
        }
    });

    if(dramaCounter === 0) return undefined;

    return parseFloat((sum / dramaCounter).toFixed(2))
}

// Order by time duration, in growing order
function orderByDuration(data) {
    data.sort( (a, b) => {
      if (a.duration === b.duration) {
        return a.title.localeCompare(b.title);
      }

      if (a.duration > b.duration) {
        return 1
      }

      if (a.duration < b.duration) {
        return -1
      }
    })

    return data;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(data) {
    if (data.length === 0) return undefined;

    const stevenDramaMovies = data.filter( movie => {
        return movie.genre.includes('Drama') && movie.director === 'Steven Spielberg';
    })

    return `Steven Spielberg directed ${stevenDramaMovies.length} drama movies!`
}

// Order by title and print the first 20 titles
function orderAlphabetically(data) {
    let titles = data.map((movie) => {
        return movie.title;
    });
    titles.sort();
    return titles.splice(0, 20);
}

// Best yearly rate average
function bestYearAvg(data) {
    if(data.length === 0) return undefined;

    let yearsAndAverage = {};

    data.forEach( movie => {
        if(yearsAndAverage[movie.year]) {
            yearsAndAverage[movie.year].rate += parseFloat(movie.rate);
            yearsAndAverage[movie.year].numOfMovies ++

        } else {
            yearsAndAverage[movie.year] = {
              rate: parseFloat(movie.rate),
              numOfMovies: 1
            }
        }
    })

    let bestAverage = {
      year: null,
      average: 0
    };
    
    for(let key in yearsAndAverage) {
      const average = yearsAndAverage[key].rate / yearsAndAverage[key].numOfMovies;

      if(average > bestAverage.average) {
        bestAverage.year = key;
        bestAverage.average = average
      } 
    }

    return `The best year was ${bestAverage.year} with an average rate of ${bestAverage.average}`
}
