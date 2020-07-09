// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
    let answer = movies.map(function(movie) {
        return movie.director   
    });
    return answer
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    
    let result = movies.filter(function(movie) {
        // Condition: Only drama movies & from Steven Spielberg
        if (movies.director == "Steven Spielberg" && movies.genre.includes("Drama")) {
            return movie
        }
    });   
return result   
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
    let answer = movies.reduce(function(acc, elem) {
        return acc + elem.rate
    }, 0)
return answer / movies.length
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    let drama = movies.genre.includes("Drama");
    if (drama) {
        let answer = movies.reduce(function(acc, elem) {
            return acc + elem.rate
        }, 0)
        return answer / drama
    }
} 


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    let newSortedArray = JSON.parse(JSON.stringify(movies))
   
    newSortedArray.sort(function(a, b) {
        if (a.year > b.year) {
            return 1;
        } else if (a.year < b.year) {
            return -1;
        } else if (a.year = b.year) {
            return newSortedArray.sort(function(a, b) {
                if (a.title > b.title) {
                    return 1;
                } else if (a.title < b.title) {
                    return -1;
                } else {
                    return 0;
                }
            })
        }
    })

return newSortedArray;

         
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    let sortedAlphabetically = JSON.parse(JSON.stringify(movies))
    
    sortedAlphabetically.sort(function(a, b) {
        if(a.title > b.title) {
            return 1
        } else if (a.title < b.title) {
            return -1
        } else {
            return 0
        }

    })

    let top20 = sortedAlphabetically.slice(0, 20);
    console.log(top20)
    
 return sortedAlphabetically;
 
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
    let hoursToMinutes = JSON.parse(JSON.stringify(movies))

    
}



// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(movies) {
    if (movies === 0) {
        return null;
    }

}

