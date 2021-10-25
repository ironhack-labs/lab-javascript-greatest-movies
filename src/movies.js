const movies = require('./data.js');

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {

	let directorsArray = [];
	
	directorsArray = movies.map(eachMovie => {
		
		return eachMovie.director;
	});

	let directorsUnified = directorsArray.reduce((acc, eachDirector)=>{
		if (!acc.includes(eachDirector)){
			acc.push(eachDirector);
		}
		return acc;
	}, [])

	return directorsUnified;
}	

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {

	let spielbergDramas = 0;

	movies.filter(eachMovie =>{
		if (eachMovie.director === "Steven Spielberg" && eachMovie.genre.includes("Drama")){
			spielbergDramas++;
		}
		return;
	})
	return spielbergDramas;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {

	let totalMovies = 0;

	if (movies.length === 0){
		return 0;
	}

	let totalScore = movies.reduce((acc, eachMovie)=>{
		if (eachMovie.score){
			acc += eachMovie.score;
		}
		totalMovies++;
		return acc;
	}, 0)

	return parseFloat((totalScore / totalMovies).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
	let totalMovies = 0;

	if (movies.length === 0) {
		return 0;
	}

	let dramaMovies = movies.filter(eachMovie =>{
		if (eachMovie.genre.includes("Drama")){
			totalMovies++;
			return eachMovie;
		}
	} );

	if (totalMovies === 0){
		return 0;
	}

	let totalScore = dramaMovies.reduce((acc, eachMovie) => {
		if (eachMovie.score) {
			acc += eachMovie.score;
		}
		return acc;
	}, 0)

	return parseFloat((totalScore / totalMovies).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

	let sortedMovies = JSON.parse(JSON.stringify(movies));

	sortedMovies.sort((a, b) =>{

		if (a.year === b.year){
			return a.title.localeCompare(b.title);
		}
		return a.year - b.year;
	}, 0);

	return sortedMovies;
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

	let sortedMovies = JSON.parse(JSON.stringify(movies));

	sortedMovies.sort((a, b) =>{
		return a.title.localeCompare(b.title);
	});
	
	
	let twentyMovies = []
	sortedMovies.forEach((element, index)=>{
		if (index < 20){
			twentyMovies.push(element.title);
		}
	});
	return twentyMovies;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function hourstoMinsAux(duration){
	
	let totalTime = duration.split("");
	let hours = parseInt(totalTime[0]) * 60;
	let minutes = 0

	if (!isNaN(totalTime[4])) {
		minutes = parseInt(totalTime[3]) * 10 + parseInt(totalTime[4]);
	}
	else if ((!isNaN(totalTime[3]))) {
		minutes = parseInt(totalTime[3]);
	}
	return hours + minutes;
}

function turnHoursToMinutes(movies) {

	let minuteMovies = JSON.parse(JSON.stringify(movies));

	minuteMovies = minuteMovies.map(eachMovie =>{

		eachMovie.duration = hourstoMinsAux(eachMovie.duration);
		return eachMovie;
	});

	return minuteMovies;
}



// BONUS - Iteration 8: Best yearly score average - Best yearly score average

function everyYearAux(movies){
	
	let allYears = [];

	allYears = movies.map(eachMovie => {

		return eachMovie.year;
	});

	let yearsUnified = allYears.reduce((acc, eachYear) => {
		if (!acc.includes(eachYear)) {
			acc.push(eachYear);
		}
		return acc;
	}, [])

	return yearsUnified.sort();
}

class YearObj{

	constructor(year){
		this.year = year;
		this.count = 0;
		this.score = 0;
		this.average = 0;
	}
}

function bestYearAvg(movies) {

	if (movies.length === 0){
		return null;
	}

	let moviesCopy = JSON.parse(JSON.stringify(movies));

	let everyYear = everyYearAux(moviesCopy);
	
	let yearsArray = [];

	for (const eachYear of everyYear) {
		
		yearsArray.push(new YearObj(eachYear));
	}

	yearsArray.forEach(yearObj =>{
		moviesCopy.forEach(eachMovie =>{
			if (yearObj.year === eachMovie.year){
				yearObj.count++;
				yearObj.score += eachMovie.score;
				yearObj.average = yearObj.score / yearObj.count;
			}
		})
	})

	let bestYear = yearsArray[0];

	for (const eachYear of yearsArray){
		
		if (eachYear.average > bestYear.average){
			bestYear = eachYear;
		}
	}

	return `The best year was ${bestYear.year} with an average score of ${bestYear.average}`
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
