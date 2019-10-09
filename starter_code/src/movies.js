/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(movies) {
    let averageRate = movies.reduce((accum, current) => accum + parseFloat(current.rate), 0) / movies.length
    return Math.round(averageRate * 100) / 100
}

// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){
    const drama = movies.filter(movie => movie.genre.includes('Drama') && movie.rate !== null)
    if(drama.length > 0){
        let averageRate = drama.reduce((accum, current) => accum + parseFloat(current.rate), 0) / drama.length
        return Math.round(averageRate*100)/100
    }else{
        return 0
    }
}

// Iteration 3: Ordering by year, ascending (in growing order)
function orderByYear(movies) {
    movies.sort((a, b) => {
        if (a.year - b.year) {
            return a.year - b.year;
        }
        if (a.title > b.title) {
            return 1;
        }
        if (a.title < b.title) {
            return -1;
        }
        // else{
        //     return 0;
        // }
    });
    return movies;
}
// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(movies){
    let director = "Steven Spielberg"
    let dramaByTheDirector = movies.filter((movie) => 
        movie.director === director && movie.genre.includes('Drama'))
    return dramaByTheDirector.length
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    movies.sort((a,b) => {
        if(a.title > b.title){
            return 1
        }
        if(a.title < b.title){
            return -1
        }
        else{
            return 0
        }
    });
    //Return only the title of each movie
    let titleArr = [];
    movies.map((movie) => {
        titleArr.push(movie.title);
    })
    return titleArr.slice(0, 20);
}


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(a){
    var out = a.map(function (e) {
        var newElement = Object.assign({}, e)

        if (e.duration.length < 3) {
            newElement.duration = parseInt(e.duration[0] * 60);
        } else if (e.duration.length < 6) {
            newElement.duration = parseInt(e.duration.split("min")[0]);
        } else {
            newElement.duration = e.duration[0] * 60 + parseInt(e.duration.split(" ")[1].split("min")[0]);
        }
        return newElement;
    });
    console.log(out)
    return out;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
// Go ahead and find which year have the best average rate
// for the movies that were released on that year! Create bestYearAvg()
// function that receives an array of movies and gives us an answer which year was the best year
// for cinema and what was its average rate.
function bestYearAvg(movies) {
    if(movies.length > 0){

        // order movies by year
        let moviesYear = {};
        movies.forEach(function (element) {
            if (moviesYear[element.year]) {
                moviesYear[element.year].push(element);
            } else {
                moviesYear[element.year] = [];
                moviesYear[element.year].push(element);
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
        let yearBestAvg = Object.keys(avgYear).reduce(function (a, b) {
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