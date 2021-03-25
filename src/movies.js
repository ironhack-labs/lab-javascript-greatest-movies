// Iteration 1: All directors? - Get the array of all directors.
let getAllDirectors = (arr) => arr.map((e) => e.director);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
//How could you "clean" a bit this array and make it unified (without duplicates)?
let directors = [];
getAllDirectors(movies).forEach(director => {
    if(!directors.includes(director)){
        directors.push(director);
    }
});
//console.log(directors);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
let howManyMovies = (arr) =>
	arr.filter((e) => e.director === "Steven Spielberg" && e.genre.includes("Drama")).length;

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
let ratesAverage = (arr) => {
	let filteredArray = arr.filter((movie) => "rate" in movie);
	let average = filteredArray.reduce((acc, movie) => acc + movie.rate / arr.length, 0);
	return Number(average.toFixed(2));
};

// Iteration 4: Drama movies - Get the average of Drama Movies
let dramaMoviesRate = (arr) => {
	let filteredDramaArray = arr.filter((movie) => movie.genre.includes("Drama"));
	let average = filteredDramaArray.reduce((acc, movie) => acc + movie.rate / filteredDramaArray.length, 0);
	return Number(average.toFixed(2));
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
let orderByYear = (arr) => {
	let sortedByYear = arr.sort((a, b) => a.year - b.year);

	let sortedByName = sortedByYear.sort((a, b) => {
		if (a.year === b.year) {
			if (a.title === b.title) {
				return 0;
			} else if (a.title < b.title) {
				return -1;
			} else {
				return 1;
			}
		}
	});
	return [...sortedByName];
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
let orderAlphabetically = (arr) => {
	let mySort = [...arr].sort((a, b) => a.title.localeCompare(b.title));
	let myTitles = mySort.map((el) => el.title);
	return myTitles.slice(0, 20);
};

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
let turnHoursToMinutres = (arr) => {
    const REGEX = /\d+/g;
    arr.map(e => {
        let timeArr = e.duration.match(REGEX);
        let minutes = 0;
        timeArr.forEach((time,i) => {
            if(i === 0){
                minutes += time * 60;
            } else {
                minutes += time;
            }
        });
    });
    return {}
}

turnHoursToMinutres(movies);

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
