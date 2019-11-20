/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
	return [ ...arr ].sort((a, b) => {
		return a.year === b.year ? a.title.localeCompare(b.title) : a.year - b.year;
	});
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(arr) {
	return arr.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')).length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
	return [ ...arr ]
		.sort((a, b) => {
			return a.title.localeCompare(b.title);
		})
		.slice(0, 20)
		.map(movie => movie.title);
}
console.log(orderAlphabetically(movies));
// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
