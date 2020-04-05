/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesParam){

    let copiaMovies = Array.from(moviesParam);
    
    let ordenar = (a,b) => {
        if (a.year == b.year){
            if (a.title > b.title) {
                return 1;
            }else if (a.title < b.title){
                return-1;
            }
            return 0;
        }
        return a.year - b.year;

    };
    return copiaMovies.sort (ordenar);
}
console.log(orderByYear(moviesParam));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(array) {
    let Spielberg = array.filter(function(movie) {
      return (
        movie.director === "Steven Spielberg" &&
        movie.genre.indexOf("Drama") !== -1
      );
    });
  
    return Spielberg.length;
  }



// Iteration 4: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (arr) => {
	const sum = arr.reduce((a, b) => {
		return a + b.rate;
	}, 0);
	const avg = sum / arr.length;
	return avg.toFixed(2);
};

 console.log(ratesAverage(movies));


// Iteration 5: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = (arr) => {
	const drama = arr.filter(e => {
		return e.genre.includes('Drama');
	});
	return ratesAverage(drama);
};




// Iteration 6: Time Format - Turn duration of the movies from hours to minutes



// BONUS Iteration: Best yearly rate average - Best yearly rate average
