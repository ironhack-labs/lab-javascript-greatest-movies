// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(movies) {
    const averageRate = movies.reduce((sum, object) => 
        sum + parseFloat(object.rate), 0) / movies.length

    return Math.round(averageRate * 100) / 100
}

// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    const drama = movies.filter(movie => movie.genre.includes('Drama') && ('rate' in movie))
    if (drama.length > 0) {
        return ratesAverage(drama)
    } else {
        return 0
    }
}

// Iteration 3: Ordering by year, ascending (in growing order)
function orderByYear(movies) {
    movies.sort((a, b) => {
        if (a.year - b.year) {
            return a.year -b.year
        }
        if (a.title > b.title) {
            return 1;
        }
        else if (a.title < b.title) {
            return -1;
        }
    })
    return movies
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(movies){
    const theDirector = "Steven Spielberg"
    const dramaByTheDirector = movies.filter(movie =>
        movie.director === theDirector && movie.genre.includes('Drama'))
    return dramaByTheDirector.length
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    movies.sort((a, b) => {
        if (a.title > b.title) {
            return 1
        } else if (a.title < b.title) {
            return -1
        } else {
            return 0
        }
    })

    //Return only the title of each movie
    const titles = movies.map(movie => movie.title)
    return titles.slice(0, 20);
}


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
    const newArr = movies.map(movie => {
        // clone each movie object to newObject
        const newObject = Object.assign({}, movie)

        // turn 'Xhr' to min
        if (movie.duration.length < 3) {
            newObject.duration = parseInt(movie.duration[0] * 60);
        // turn 'X min' to min
        } else if (movie.duration.length < 7) {
            newObject.duration = parseInt(movie.duration.split('min')[0]);
        // turn 'Xhr Xmin' to min
        } else {
            newObject.duration = movie.duration[0] * 60 + parseInt(movie.duration.split(' ')[1].split('min')[0]);
        }
        return newObject;
    });
    return newArr;
}
turnHoursToMinutes(movies)

// BONUS Iteration: Best yearly rate average - Best yearly rate average
// Go ahead and find which year have the best average rate
// for the movies that were released on that year! Create bestYearAvg()
// function that receives an array of movies and gives us an answer which year was the best year
// for cinema and what was its average rate.

function bestYearAvg(movies) {
    if(movies.length > 0){
        
        // order movies by year
        let moviesYear = {};
        movies.forEach(eachMovie => {
            if (moviesYear[eachMovie.year]) {
                moviesYear[eachMovie.year].push(eachMovie);
            } else {
                moviesYear[eachMovie.year] = [];
                moviesYear[eachMovie.year].push(eachMovie);
            }
        });
    
        // get average rate by year
        let avgYear = {};
        let years = Object.keys(moviesYear);
    
        for (let i = 0; i < years.length; i++) {
            let totalMovies = 0;
            let totalRate = 0;
    
            let yearMovies = moviesYear[years[i]];
    
            for (let j = 0; j < yearMovies.length; j++) {
                totalMovies++;
                totalRate += parseFloat(yearMovies[j].rate);
            }
    
            let avg = parseFloat((totalRate / totalMovies).toFixed(2));
            avgYear[years[i]] = avg;
        }
    
        // get best average
        let yearBestAvg = Object.keys(avgYear).reduce((a, b)=>{
            if (avgYear[a] === avgYear[b]) {
                if (b < a) {
                    return b;
                } else {
                    return a;
                }
            } else if (avgYear[a] > avgYear[b]) {
                return a;
            } else {
                return b;
            }
        });
        return "The best year was " + yearBestAvg + " with an average rate of " + avgYear[yearBestAvg];
    }
    else{
        return null
    }
}