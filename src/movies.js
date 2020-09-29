// Iteration 1: All directors? - Get the array of all directors.



getAllDirectors = (movies) => {
    const allDirectors = movies.map( (movie) => {
       return movie.director
    });
    return allDirectors;
};

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?



howManyMovies = (movies) => {
    const allMovies = movies.filter( (movie) => {
      return movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    });
    return allMovies.length
};

// Iteration 3: All rates average - Get the average of all rates with 2 decimals


ratesAverage = (movies) => {
    if (movies.length === 0) {
        return 0;
    }
    const average = movies.reduce( (acc, rating) => {
    if (typeof rating.rate === "number") {
        return acc + rating.rate;
    
    } else {
        return acc + 0;
        }
    }, 0); 

    let avgRate = average/movies.length;

    return Math.round(avgRate * 100) / 100
};


// let ratesAverage = (movies) => {
//     if (movies.length === 0) {
//         return 0;
//     }
//     const average = movies.reduce( (acc, rating) => {
//         return acc + rating.rate
//     })
//     return Math.round(average)
// };


// let ratesAverage = movies.reduce( (acc, value) => {
//     const average = (acc + value.rate) 
//     return Math.round(average)

// }, 0)/ movies.length


// Iteration 4: Drama movies - Get the average of Drama Movies

// let dramaMoviesRate = (movies) => {
//     const dramaMovies = movies.filter( (movie) => {
//         return movie.genre.includes("Drama");
//     })
//     return dramaMovies;
// }


dramaMoviesRate = (movies) => {
    const dramaMovies = movies.filter( (movie) => {
        return movie.genre.includes("Drama");
    })
    return ratesAverage(dramaMovies);
}

// const dramaMoviesRate = movies.filter( (movie) => movie.genre.includes("Drama"));


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

orderByYear = (movies) => {
    const yearAscending = movies.sort( (a, b) => {
        if (a.year === b.year) {
            return movies.sort( (a, b) => {
                a.title - b.title;
            })
        }
        return a.year - b.year;
    });
    return yearAscending;
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

orderAlphabetically = (movies) => {
    const titleAscending = movies.sort( (a, b) => {
        return a.title - b.title; 
    });
    if (titleAscending.length <= 20) {
        return titleAscending;
    }
    return titleAscending;
};

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
