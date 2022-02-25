// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movieArray) {
  return movieArray.map((el) => el.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movieArray) {
  const filteredMovie = movieArray.filter(
    (el) => el.director === 'Steven Spielberg' && el.genre.includes('Drama')
  );
  return filteredMovie.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movieArray) {
  if (!movieArray.length) return 0;
  const sumRating = movieArray.reduce(
    (sum, el) => (el.score ? sum + el.score : sum),
    0
  );
  const avgRating = Number((sumRating / movieArray.length).toFixed(2));
  return avgRating;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movieArray) {
  const dramaMovie = movieArray.filter((el) => el.genre.includes('Drama'));
  const avgDrama = scoresAverage(dramaMovie);
  return avgDrama;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movieArray) {
  const newMovieListe = [...movieArray];
  newMovieListe.sort((a, b) => {
    if (a.year === b.year) {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    }
    return a.year - b.year;
  });
  return newMovieListe;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movieArray) {
  const newMovieListe = [...movieArray];
  newMovieListe.sort((a, b) => {
    if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
  });
  const shortMovieListe = newMovieListe.slice(0, 20);
  const shortMovieTitleListe = shortMovieListe.map((el) => el.title);
  return shortMovieTitleListe;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movieArray) {
    return movieArray.map((el) => {
      const timeArray = el.duration.split(' ');
        const hours = Number(timeArray[0].slice(0, -1))
        const minutes = timeArray[1]? Number(timeArray[1].slice(0, -3)):0
        const duration = minutes + hours * 60
        return {...el, duration}
    });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movieArray) {
  if (!movieArray.length) return null
	// if (!movieArray.length) return null
	const resultObject = {}
	movieArray.forEach((element) => {
		if (resultObject[element.year]) {
			resultObject[element.year].push(element.score)
		} else resultObject[element.year] = [element.score]
	})
	const converArray = Object.entries(resultObject).map(([year, scores]) => {
		const average = scores.reduce((total, el)=>total+el)/scores.length
		return { year, average }
	})
    const bestYear = converArray.reduce((prev, current) => (prev.average >= current.average) ? prev : current)
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
    bestYearAvg
  };
}