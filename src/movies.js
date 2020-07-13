/// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies){
    let directorsarray = movies.map(function(movie){
          return movie.director
    })
  return directorsarray
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies){
    let SpielbergOnes = movies.filter(function(movie){
        return movie.director == 'Steven Spielberg' && movie.genre.includes('Drama') == true;
    })
    return SpielbergOnes.length
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies){
    if(movies.length === 0){
        return 0
    }
 let addAllScores = movies.reduce(function(acc,movie){
       return acc + (movie.rate || 0)
    },0)
    return  Number((addAllScores/movies.length).toFixed(2))
} 


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){
    let dramaMovies = movies.filter(function(movie){
        return movie.genre.includes('Drama')
    });
    return ratesAverage(dramaMovies)
}    

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies){
    let cloned =JSON.parse(JSON.stringify(movies))
    cloned.sort(function(a,b){
        if(a.year  > b.year){
            return 1
        }
        if (a.year < b.year){
            return -1
        }
        else {
            if(a.title > b.title){
                return 1
            }
            if (a.title < b.title){
                return -1
            }
            else {
                return 0
            }
        }
    })

    return cloned
}
    


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies){
    let cloned = JSON.parse(JSON.stringify(movies))

    cloned.sort(function(a,b){ 
        if(a.title > b.title){
        return 1
    }
    else{
        return -1
    }
})
let movieTitle = cloned.map(function(movie){
    return movie.title
})
return movieTitle.splice(0,20)
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average