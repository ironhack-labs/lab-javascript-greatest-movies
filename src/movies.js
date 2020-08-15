// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arrayOfMovies){
    const allDirectors = arrayOfMovies.map(function(movie){
        return movie.director;
    })
    return allDirectors
}
getAllDirectors(movies)
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies){
    const spielbergMovies= movies.filter(function(movie){
        if (movie.director === "Steven Spielberg" && movie.genre.includes('Drama')){
            return true
        } 
        }).length; 
    return spielbergMovies;
    }

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(moviesData){
    if (moviesData.length===0){
        return 0
    }
    let total = 0
    const ratings= moviesData.map(function(movie){
        if (!movie.rate){
            return movie.rate =0;
        } else {
            return movie.rate
        }
    });
     const ratesSum= ratings.reduce(function(sum,val){
        return sum + val
    },0)
    total = (ratesSum / array.length).toFixed(2)
return parseInt(total);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){
    let dramaMovies= movies.filter(function(movie){
        if (movie.genre.includes('Drama')){
            return true
        }
    })
    //console.log(dramaMovies);
    if(dramaMovies.length===0){
        return 0
    }
    let dramaRating= dramaMovies.reduce(function(sum,val){
        // console.log('this is',sum)
        // console.log('this is',val)
        return sum + val.rate;
    },0)
    return parseFloat((dramaRating/dramaMovies.length).toFixed(2)); 
}

    

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(years){
    let orderedArray= [...years];
    return orderedArray.sort(function(a,b){
        if(a.year - b.year ===0){
            return a.title.localeCompare(b.title)
        }
        return a.year - b.year;
    })
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies){
    let arrayMovies =[];
    const first20= movies.map(function(movie){
        arrayMovies.push(movie.title)
    })
    if(arrayMovies.length < 20){

    }
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
