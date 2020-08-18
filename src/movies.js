// Iteration 1: All directors? - Get the array of all directors.
//1. map out the directors. Can create a new variable or leave it out, up to you
//map is going to do something to each of the movies so we need to have a name for that thing which would be a singular version so movie 
function getAllDirectors(moviesArray) {
  
    const Directors = moviesArray.map (function(movie) {
     return movie.director

    })
return Directors
}




//or write cleaner code and no need to declare directors as a variable so:

// function getAllDirectors(moviesArray) {
//     return moviesArray.map (function(movie) {
//      return movie.director
//     })
//     return Directors 
// }    
// getAllDirectors(testArr);


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    return movies.filter (function (movie) {
        return movie.directior === 'Steven Spielberg' &&
        movie.genre.includes('Drama')
    }
    return filtered
}

// const g = [
//     "Adventure",
//     "Drama",
//     "Fantasy"
//     ]
// //g.includes ('Drama')
// g.indexOf('Drama') > -1

//index of has to be greater than -1 to return a genre value within the array



// Iteration 3: All rates average - Get the average of all rates with 2 decimals




// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    //filter out the drama movies 
    const drama = movies.filter(function (movie) {
        return movie.genre.indexOf('Drama') !== -1
    })
    return ratesAverage(dramas);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function OrderbyYear(movies) {
    const sorted = movies.slice().sort(function (a,b) {
        if (a.year !== b.year) {
            // if the thing i am doing mutates the original, then i would want to make a copy first 
         //comparing strings alphabetically   
         return a.year - b.year
        } else {
            return a.title.localCompare(b.title);
        }
    });
    return sorted
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    const ordered = movies.map(function (movie) {
        return movie.title
    }).sort(function (a,b) {
        return a.localeCompare(b)
    }).slice(0,20);
    return ordered
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
