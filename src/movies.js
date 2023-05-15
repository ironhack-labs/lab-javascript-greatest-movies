// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

const getAllDirectorsArray = moviesArray.map((element) => {return element.director});


return getAllDirectorsArray;

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
/*Function "howManyMovies"
should be declared
should return a number
should return 0 if the array is empty
should return 0 if none of the movies in the array were directed by Steven Spielberg
should only count drama movies
should return 2 if there are only 2 Steven Spielberg movies
should return 4 when called with the array of movies exported from "data.js"*/
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    let count = 0;
    moviesArray.filter((element) => {
    
        if (element.director === "Steven Spielberg" && element.genre.includes("Drama")) {
            count++;
    }
})
        return count;
    
}






// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

	if (moviesArray.length === 0) {
		return 0;
	} else {
		let scoreTotal =
			moviesArray.reduce((accumalator, currentvalue) => {
                
				if (typeof currentvalue.score !== "number") {
					currentvalue.score = 0;
					return accumalator + currentvalue.score;
				} else {
					return accumalator + currentvalue.score;
				}
			}, 0) / moviesArray.length;
		return Math.round(scoreTotal * 100) / 100;
	}
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const dramaMovies = moviesArray.filter((movie) => {
        return movie.genre.includes("Drama") && movie.score;
    });

    if (dramaMovies.length === 0) {
		return 0;
	} else {
		let scoreTotal =
			dramaMovies.reduce((accumalator, currentvalue) => {
                
				if (typeof currentvalue.score !== "number") {
					currentvalue.score = 0;
					return accumalator + currentvalue.score;
				} else {
					return accumalator + currentvalue.score;
				}
			}, 0) / dramaMovies.length;
		return Math.round(scoreTotal * 100) / 100;
	}
}






// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const copiedMovies = [...moviesArray]
    const theYear = copiedMovies.sort((a, b) => {
        if (a.year === b.year){
           return a.title.localeCompare(b.title)
        } else {
        return a.year - b.year;
        }   
    })
return theYear;

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const copiedMovies = [...moviesArray]
    const theTitle = copiedMovies.sort((a, b) => {
        if (a.title === b.title){
           return a.title.localeCompare(b.title)
        } else {
        return a.title - b.title;
        }   
    })
return theTitle;

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
