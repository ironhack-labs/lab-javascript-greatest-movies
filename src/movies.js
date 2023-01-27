// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const director = moviesArray.map(moviesArray => moviesArray.director);
  return director; 
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const moviesSpielberg =  moviesArray.filter(movies => movies.director == 'Steven Spielberg' &&  movies.genre.includes( 'Drama'))
  return moviesSpielberg.length;

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) return 0;
  const onlyScore = moviesArray.map(moviesArray => moviesArray.score || moviesArray.score === null );
  const sumeScore = onlyScore.reduce((acum, current) => {return acum + current;}, 0);
  let avg = sumeScore/onlyScore.length
  let n = Math.round(avg * 100) / 100;
  return n;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (!moviesArray.length) return 0;
  const moviesDrama =  moviesArray.filter(movies => movies.genre.includes( 'Drama') );
  if(!moviesDrama.length) return 0; 
  const onlyDramaScore = moviesDrama.map(moviesDrama => moviesDrama.score);
  const sumeDrama = onlyDramaScore.reduce((acum, current) => {return acum + current;}, 0);
  let avg = sumeDrama/onlyDramaScore.length
  let n = Math.round(avg * 100) / 100;
  console.log(n);
  return n;


}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
//const arrayYear = moviesArray.sort((a,b) => a.year - b.year);
const arrayYear = moviesArray.map((element)=> element).sort((keyA,keyB) => {

if (keyA.year < keyB.year) {
  return -1;
} else if (keyA.year > keyB.year) {
  return 1;
} else { // keyA == keyB
  if (keyA.title < keyB.title) {
      return -1;
  } else if (keyA.title > keyB.title) {
      return 1;
  } else {
      return 0;
  }
}})

return arrayYear;

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const orderArray = [...moviesArray];

	orderArray.sort(function (a, b) {
		if (a.title < b.title) return -1;
		if (a.title === b.title) return 0;
		if (a.title > b.title) return 1;
	});
	const titles = orderArray.map((order) => order.title).slice(0, 20);
	return titles;

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

const convertToMinutes = (timeStr) => {
  const [ , hours, mins ] = timeStr.match(/(?:(\d)h )?(\d+)min/)
    .map(v => parseInt(v, 10));
  return hours * 60 + mins;
}

const filmsWithNewDurations = moviesArray.map(film => ({
  ...film,
  duration: convertToMinutes(moviesArray.duration)
}));



}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
