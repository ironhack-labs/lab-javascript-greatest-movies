// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors (movies) {
    const newArr = movies.map(function (movie){

    const allDirectors = movie.director;
        return allDirectors;
     });
     return newArr;

}

// getAllDirectors(movies);







// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
//how many drama for STEVEN


// function howManyMovies (movies) {
//     if (movies.length === 0) {
//         return 0;
//     } else {
//         const stevenDrama = movies. filter(function (movie){
//             (movie.director == "Steven Spielberg" && movie.genre.includes("Drama"));

//         }); return stevenDrama;
//     }
// }





function howManyMovies (arr) {
    if (arr.length === 0) {
        return 0;
    } else {
       const dirSteven = arr.filter(function (movie){
           const isDir = (movie.director === "Steven Spielberg") && movie.genre.includes(drama);
           return isDir;
       }) 
       return dirSteven;
    }
}


howManyMovies(movies);


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    if (movies.length === 0) {
        return 0
    }
    const average = movies.reduce( function (total, currentValue) {
        if (currentValue.rate) {
            return total + currentValue.rate;
        } else {
            return total;
        }

    } ,0 ); 
    return Number((average/movies.length).toFixed(2));
}


// Iteration 4: Drama movies - Get the average of Drama Movies

/* first declare the function 
2 filter drama movies
reduce for the rate avarege */

function dramaMoviesRate(movies) {
    const dramaMovies = movies.filter(function(movie){
        const isDrama = (movies.genre.includes('Drama'));
        return isDrama;
    }) 
    return ratesAverage(dramaMovies);
} 

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    movies.sort(function(a, b){
if (a.movie.year > b.movie.year) {
    return -1;
} else if (a.movie.year < b.movie.year) {
    return 1
} else {
    return 0;
}
return movies;
    });
}





// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    movies.sort( function (a, b) {
            if (a.movies.title > b.movies.title) {
                return -1;
            } else if (a.movies.title < b.movies.title) {
                return 1;
            } else {
                return 0;
            }
            for(i = 0; i < 20; i++) {
                return ;
            }
    })
}







// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
