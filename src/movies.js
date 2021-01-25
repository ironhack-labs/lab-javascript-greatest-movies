// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = moviesArray => {
    return moviesArray.map((movie) => {
        return movie.director
    })
}

const getUniqueDirectors = moviesArray => {
    return new Set(getAllDirectors(moviesArray));
}

// console.log(getAllDirectors(movies))

// console.log(getUniqueDirectors(movies))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = moviesArray => {
    let spielbergDramas = moviesArray.filter((movie) => {
        return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')         
    })

    return spielbergDramas.length;
}

// console.log(howManyMovies(movies));

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = moviesArray => {
    if (!moviesArray.length) return 0;

    let totalRate = moviesArray.reduce((acc, movie) => {
        if (!movie.rate) {
            return acc;
        }

        return acc += movie.rate;        
    }, 0)

    return Math.round(totalRate / moviesArray.length * 100) / 100;
}

// console.log(ratesAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = moviesArray => {
    const dramaMovies = moviesArray.filter((movie) => {       
        return movie.genre.includes('Drama')
    })    

    return ratesAverage(dramaMovies)
}

// console.log(dramaMoviesRate(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = moviesArray => {    
    const newMovieList = Object.assign([], moviesArray)
    return newMovieList.sort((firstMovie, secondMovie) => {      
        if (firstMovie.year === secondMovie.year) {
            return firstMovie.title < secondMovie.title ? -1 : 1
        } else {
            return firstMovie.year < secondMovie.year ? -1 : 1
        }
    })
}

// console.log(orderByYear(movies))


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = moviesArray => {
    let newMovieList = Object.assign([], moviesArray)
    
    newMovieList.sort((firstMovie, secondMovie) => {
        return firstMovie.title < secondMovie.title ? -1 : 1
    })

    if (newMovieList.length > 20) {
        newMovieList.splice(20, (newMovieList.length - 20))        
    } 
    
    return newMovieList.map((movie) => {
        return movie.title;
    })
}

// console.log(orderAlphabetically(movies))


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes = moviesArray => {
    let newMovieList = JSON.parse(JSON.stringify(moviesArray)) 

    newMovieList.forEach((movie) => {
        let duration, hours, minutes;

        if (movie.duration.includes('h')) {
            duration = movie.duration.split('h');

            hours = parseInt(duration[0]) * 60;
            minutes = duration[1] ? parseInt(duration[1]) : 0;           
        } else {
            hours = 0;
            minutes = parseInt(movie.duration);
        }

        movie.duration = hours + minutes;
    })

    return newMovieList;
}

// console.log(turnHoursToMinutes(movies))


// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

const groupByYear = moviesArray => {
    const allYears = new Set(orderByYear(moviesArray).map(movie => {
        return movie.year
    }));

    let yearGroups = [];

    allYears.forEach(year => {
        let yearGroup = [];
       
        moviesArray.forEach(movie => {
            if (movie.year === year) {
                yearGroup.push(movie)
            }
        })

        yearGroups.push(yearGroup)
    })

    return yearGroups;
}

const bestYearAvg = moviesArray => {
    if (!moviesArray.length) return null;
    
    const rateByYear = [];
    const yearGroups = groupByYear(moviesArray);

    yearGroups.forEach(group => {
        let averageRate = ratesAverage(group);
        rateByYear.push({'year': group[0].year, 'averageRate': averageRate})
    })
    
    let bestYear = rateByYear.reduce((acc, group) => {
        if (group.averageRate > acc.averageRate) {
            acc.year = group.year;
            acc.averageRate = group.averageRate;
        };

        return acc;

    }, {'year': 0, 'averageRate': 0})

    return `The best year was ${bestYear.year} with an average rate of ${bestYear.averageRate}`
}

// console.log(bestYearAvg(movies))

