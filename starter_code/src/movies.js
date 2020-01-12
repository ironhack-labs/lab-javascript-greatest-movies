/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

//bubbleSort.movies;


//OR


function orderByYear(arr) {

	var ordered = arr.sort(function(a, b) {
		return a.year - b.year;
	});

	return ordered;
}

orderByYear(movies);


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(array) = movies.filter(function(movie) {
    if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")) {
        return movie;
    }
});
return spielbergMovies;
};
howManyMovies(movies);



// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = movies
  .slice(20, movies.length)//which goes first slice or sort
  .sort(function(a, b) {
    if (a.title > b.title) {
      return 1;
    } else if (b.title > a.title) {
      return -1;
    } else {
      return 0;
    }
  });
  orderAlphabetically(movies);

const orderAlphabetically = arr.sort(function(a, b) {
			if (a.title > b.title) {
				return 1;
            }
            else if (b.title > a.title) {
                return -1;
              } else {
                return 0;
              }
		})
		.slice(0, 20);
}

orderAlphabetically(movies);

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

const ratesAvg = arr => movies.reduce((a,b) => a.rate + b.rate, 0) / movies.length;
return ratesAvg.round(2);

// Iteration 5: Drama movies - Get the average of Drama Movies//

let dramaMovies = movies.filter(function(movie) {
    const genre = movie.genre;
    if (genre.includes("Drama")) {
        return movie;
    }
  });

const dramaMoviesRate = arr => dramaMovies.reduce((a,b) => a.rate + b.rate, 0) / movies.length;
return ratesAvg.round(2);


/// movies.forEach(function(digit) {
    //if(console.log genre(i)==="Drama"){
   //     odds.push(digit);}
   //     else
   //   }
   // });
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

//let movieHours= split.duration("");
function turnHoursToMinutes(arr) {
	var newArr = arr.map(function(elem) {
		return elem;
	});

	newArr.forEach(function(movie) {
		var hours = Number(movie.duration[0]) * 60;
		var minFirstDig = movie.duration[movie.duration.length - 5];
		var minSecondDig = movie.duration[movie.duration.length - 4];
		var minsString = minFirstDig + minSecondDig; 
		var minsToNumbers = Number(minsString); 
		var minutes = hours + minsToNumbers; 
		movie.duration = minutes;
	});
	return newArr;
}

turnHoursToMinutes(movies);




// BONUS Iteration: Best yearly rate average - Best yearly rate average
