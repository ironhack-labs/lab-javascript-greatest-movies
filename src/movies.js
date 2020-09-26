// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = (movies) => {
    const arrayDirector = movies.map((e) => {
        return e.director
    })
    return arrayDirector
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = (movies) => {
    const arraySteven = movies.filter((e) => {
        return e.director === "Steven Spielberg";
    })

const dramaMoviesFromSteven = arraySteven.filter((e) => {
    return e.genre.includes("Drama")
    })

    return dramaMoviesFromSteven.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = function(movies){
    const sumAverage = movies.reduce((sum,elem) => {
        return sum + elem.rate;
    },0);
    console.log(sumAverage);
    const average = sumAverage/movies.length;
    console.log(average);
    return average.toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
