// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

const getAllDirectors = (arr) => {
    const directorsNames = arr.map(function(dir){
        return dir.director
    })
    return directorsNames
    };

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const dramaSS = movies.filter(function(spielbergDramas){
    return (spielbergDramas.director = "Steven Spielberg") && (spielbergDramas.genre ='Drama')})

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (arr) => {
    if (arr.length > 0){
        const average = arr.reduce(function(acc,value){
      return acc + value.rate/arr.length
    },0)
        return Math.round(average * 100) / 100
    } else {
        return 0
    }
}
// Iteration 4: Drama movies - Get the average of Drama Movies
//create function to get newArr of movies based on genre.

const dramaMoviesRate = (arr) => {
    const newArr = arr.filter(movies=>movies.genre.includes('Drama'));
        if (newArr.length > 0){
            const average = newArr.reduce(function(acc,value){
                return acc + value.rate/newArr.length
    },0)
                return Math.round(average * 100) / 100
        } else {
                return 0
        }
};


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
