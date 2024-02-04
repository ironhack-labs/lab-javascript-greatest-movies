// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
	const directorArray = movies.map((eachElem) => eachElem.director);
	return directorArray;
	// or alternative
	// const directors = movies.map(function (eachElem) {
	// 	return eachElem.director;
	// });
	// return directors;
}

const allDirectors = getAllDirectors(movies);
console.log(allDirectors);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
	// filter Spielberg movies
	const SpielbergMovies = movies.filter(
		(eachElem) => eachElem.director === "Steven Spielberg"
	);
	// filter Dramas from Spielberg movies
	const SpielbergDramaMovies = SpielbergMovies.filter((eachElem) =>
		eachElem.genre.includes("Drama")
	);

	const numberOfmovies = SpielbergDramaMovies.length;
	return numberOfmovies;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
	if (movies.length == 0) {
		return 0;
	}

	// **************************** way 1
	// const totalScore = movies.reduce(function (sum, movie) {
	// // OR (||) operator checks if movie.score is truthy
	// // if its falsy value 0 is assigned
	// 	movie.score = movie.score || 0;
	// 	return sum + movie.score;
	// }, 0); // initialValue to 0

	const totalScore = movies.reduce((sum, movie) => {
		movie.score = movie.score || 0; // check of undefirned score to set 0
		return sum + movie.score;
	}, 0); // initialValue to 0
	const averageScore = totalScore / movies.length;
	return Math.round(averageScore * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
	const dramaMovies = movies.filter((eachElem) =>
		eachElem.genre.includes("Drama")
	);

	if (dramaMovies.length == 0) {
		return 0;
	}

	const dramasTotalScore = dramaMovies.reduce((sum, movie) => {
		movie.score = movie.score || 0; // if undefined, treat it as 0
		return sum + movie.score;
	}, 0); // initialValue to 0

	const dramasScoreAverage = dramasTotalScore / dramaMovies.length;
	return Math.round(dramasScoreAverage * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
//If two movies have the same year, order them in alphabetical order by their title! ✔️
function orderByYear(movies) {
	//copy an array
	const sortedArray = movies.slice();

	sortedArray.sort((a, b) => {
		// Compare movies year
		if (a.year === b.year) {
			// If years are the same, sort by movie title
			return a.title.localeCompare(b.title);
		}
		// Sort by release year in ascending order
		return a.year - b.year;
	});

	return sortedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
	const sortedByTitle = movies.slice();

	// Sort by title
	sortedByTitle.sort((a, b) => a.title.localeCompare(b.title));

	// Extract only titles into a new array
	const sortedTitlesOnlyArray = sortedByTitle.map((movie) => movie.title);

	// Return the first 20 titles
	return sortedTitlesOnlyArray.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
// Create a new array to store the modified movie objects
const moviesWithMinutes = movies.map(movie => {

    // Create a shallow copy of the original movie object, not array for each movie
    const modifiedMovie = { ...movie };

    // Extract hours and minutes from the duration string
    const timeParts = movie.duration.split(' ');

    // Convert hours and minutes to minutes and update the 'duration' property
    modifiedMovie.duration = timeParts.reduce((total, time) => {
      const timeValue = parseInt(time);
      total += timeValue * (time.includes('h') ? 60 : 1);
      return total;
    }, 0);
    // Return the modified movie object
    return modifiedMovie;
  });
  // Return the array of modified movie objects
  return moviesWithMinutes;
}
// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {}
//return a string with the following structure:
//The best year was <YEAR> with an average score of <RATE>
