/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes (movieList) {
	var newArray = movieList.map (function (movie) {
		var title = movie.title;
		var year = movie.year;
		var director = movie.director;
		var durationHourString = movie.duration;
		var genre = movie.genre;
		var rate = movie.rate;

		var durationHour = durationHourString.split(" ");
		var durationHourNumber = [];
		var durationMinutes;

		if (durationHour.length === 2) {
			durationHourNumber[0] = durationHour[0].replace("h", "");
			durationHourNumber[1] = durationHour[1].replace("min", "");

			durationMinutes = Number(durationHourNumber[0]) * 60 + Number(durationHourNumber[1]);
		}

		else if (durationHour.length === 1 && durationHour[0][1] === "h") {
			durationHourNumber[0] = durationHour[0].replace("h", "");
			durationMinutes = Number(durationHourNumber[0]) * 60
		}

		else if (durationHour.length === 1 && durationHour[0][2] === "m") {
			durationHourNumber[0] = durationHour[0].replace("min", "");
			durationMinutes = Number(durationHourNumber[0]);
		};

		return {
			title: title,
			year: year,
			director: director,
			duration: durationMinutes,
			genre: genre,
			rate: rate};

	});
	return newArray;
};

// Get the average of all rates with 2 decimals 

function ratesAverage (movieList) {
	var sum = movieList.reduce(function (accumulator, current) {

		return accumulator + Number(current.rate);

	}, 0);

	var averageAll = Math.round((sum / movieList.length) * 100) / 100;
	return averageAll;
};

// Get the average of Drama Movies

function dramaMoviesRate (movieList) {
	var filtered = movieList.filter (function (movie) {
		return movie.genre.includes("Drama");
	});

	if (filtered.length === 0) {
		return undefined;
	}
	else {
		var dramaAverage = ratesAverage(filtered);
		return dramaAverage;
	};
};


// Order by time duration, in growing order

function orderByDuration (movieList) {
	

	var orderedDuration = movieList.sort( function (a, b) {
		if(a.duration === b.duration){
			if(a.title > b.title){
				return 1
			};
		};
		return a.duration - b.duration;
	});

	return orderedDuration;
};

// How many movies did STEVEN SPIELBERG

function howManyMovies (movieList) {
	var spielbergDrama = movieList.filter( function (movie) {
		return movie.genre.includes("Drama") && movie.director.includes("Spielberg");
	});

	var description = "Steven Spielberg directed " + spielbergDrama.length + " drama movies!";

	if (movieList.length === 0) {
		return undefined;
	}

	else return description;
};

// Order by title and print the first 20 titles

function orderAlphabetically (movieList) {
	var titles = movieList.map(function (movie) {
		return movie.title;
	});

	titles.sort();

	var firstTwenty = titles.slice(0, 20);

	return firstTwenty;
};

// Best yearly rate average

function bestYearAvg (movieList) {

	if (movieList.length === 0) {
		return undefined;
	};

	// get all movie years
	var yearly = movieList.map(function (movie) {
		return movie.year;
	});

	//sort them in ascending order
	yearly.sort (function (a, b) {
		return a - b;
	});
	
	console.log(yearly);
	// years between 1921 & 2017
	

	//remove duplicates
	var yearlyNoDuplicates = [];

	for (var i = 0; i < yearly.length; i++) {
		if (yearly[i] !== yearly[i+1] ) {
			yearlyNoDuplicates.push(yearly[i]);
		};
	};

	console.log(yearlyNoDuplicates);

	//add years to new array composed of arrays
	var yearsArray = [[]];
	var bestAvg = 0
	var bestYear = 0

	yearlyNoDuplicates.forEach(function (year) {
		var index = yearlyNoDuplicates.indexOf(year);
		console.log(index);
		
		yearsArray[index].push(year);
		yearsArray.push([]);
		
			//add movies to array element
		
			var currentYearMovies = movieList.filter(function(movie) {
				return movie.year === year
			})

			yearsArray[index].splice(1, 0, currentYearMovies);
		
			//calculate avg rate of movies from each year
			var currentYearAvg = ratesAverage(yearsArray[index][1]);
			yearsArray[index].splice(2, 0, currentYearAvg);

			if (yearsArray[index][2] > bestAvg) {
				bestAvg = yearsArray[index][2];
				bestYear = yearsArray[index][0];
			};
	});
	
	console.log(yearsArray);
	console.log(bestAvg);
	console.log(bestYear);

	var description = String("The best year was " + bestYear + " with an average rate of " + bestAvg);
	return description;
};
	