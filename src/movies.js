// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(function(movie){
        return movie.director
    })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(function(movie){
         return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')    
    }).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {  
    if  (moviesArray.length === 0) {
        return 0;
    } 
        const scoreSum = moviesArray.reduce(function(sum, movie){
            if (!movie.score) {
                return sum 
            }
            return sum + movie.score
        },0) 
        return parseFloat((scoreSum / moviesArray.length).toFixed(2))

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if  (moviesArray.length !== 0) {
        
        return scoresAverage(moviesArray.filter(function(movie){
            return movie.genre.includes('Drama')
        }))
    }
    return 0

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(scoresAverage) {
    const yearOrder = scoresAverage.slice(0) 
    return yearOrder.sort(function(movie1, movie2){

        if (movie1.year !== movie2.year) {
        return movie1.year - movie2.year       
    } 
    return movie1.title.localeCompare(movie2.title)           
   })
    
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const orderedAlphabetically = JSON.parse(JSON.stringify(moviesArray))    
    const list20 =  orderedAlphabetically.sort(function(movie1, movie2){
        return movie1.title.localeCompare(movie2.title)
    })
    
    return list20.map(function(movie){
        return movie.title
    }).slice(0, 20) 

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const newMovieList = JSON.parse(JSON.stringify(moviesArray))
    return newMovieList.map(function(movie){
        if (movie.duration.includes('h') && movie.duration.includes('min')) {
            return {
                title: movie.title,
                year: movie.year,
                director: movie.director,
                duration: parseFloat(movie.duration.substr(0, movie.duration.indexOf('h'))*60) + parseFloat(movie.duration.substr(movie.duration.indexOf(' ') + 1, movie.duration.indexOf('m'))),
                genre: movie.genre,
                score: movie.score,
            }  
        } else if (!movie.duration.includes('h') && movie.duration.includes('min')) {
            return {
                title: movie.title,
                year: movie.year,
                director: movie.director,
                duration: parseFloat(movie.duration.substr(movie.duration.indexOf(' ') + 1, movie.duration.indexOf('m'))),
                genre: movie.genre,
                score: movie.score,
            }        
        }
        return {
            title: movie.title,
            year: movie.year,
            director: movie.director,
            duration: parseFloat(movie.duration.substr(0, movie.duration.indexOf('h'))*60),
            genre: movie.genre,
            score: movie.score,
        }        
    })
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (!moviesArray.length) return null;    
    const newMovieList = JSON.parse(JSON.stringify(moviesArray))

    const moviesByYearObject = newMovieList.reduce(function (result, movie) {
        result[movie.year] = result[movie.year] || [];
        result[movie.year].push(movie);
        return result;
    }, {}) // object with keys as the years and values -> array with 
  
    const moviesByYearArray = Object.entries(moviesByYearObject) // returns an Array 
 
  const  YearAverageArray = moviesByYearArray.map(function(yearlymovies){
    const average = scoresAverage(yearlymovies[1])
    return {year: yearlymovies[0] , average: average}
  }).sort(function(a,b){
    return b.average - a.average 
  })

 return `The best year was ${YearAverageArray[0].year} with an average score of ${YearAverageArray[0].average}`
}



