// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
    return movies.map(movie => movie.director )
    
}
    
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies){
    return movies.filter(movie => movie.genre.includes('Drama') && movie.director === "Steven Spielberg").length;  
};

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    if ( movies.length === 0) {
        return 0
    }
    const totalRates = movies.reduce((acc,curr) => {
        return acc + (curr.rate || 0)
    },0)
    return Math.round((totalRates / movies.length) * 100) / 100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    const totalDramaArray = movies.filter(dramaMovies => dramaMovies.genre.includes("Drama"))
    return ratesAverage(totalDramaArray)  
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    let newArray = movies.sort((a, b) => {
        return a.year > b.year ? 1 : -1;
    })
    return [...newArray]
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
	const titleArray = []
	for (const movie of movies) {
		titleArray.push(movie.title);
	}
	titleArray.sort()
    return titleArray.slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg () {}


