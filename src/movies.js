// Iteration 1: All directors? - Get the array of all directors.

//    STRUCTURE OF THE DATA Objects.  movies[i].clave
//     title: 'The Shawshank Redemption',
//     year: 1994,
//     director: 'Frank Darabont',
//     duration: '2h 22min',
//     genre: ['Crime', 'Drama'],
//     score: 9.3
//

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const allDirectors = moviesArray.map((moviesArray) => moviesArray.director);
  return allDirectors;
}

console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  ).length;
}
lo;
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;
  const total = moviesArray.reduce((sum, movie) => sum + (movie.score || 0), 0); // si el valor no existe pilla cero
  const media = total / moviesArray.length;

  return parseFloat(media.toFixed(2));
}
console.log(movies);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramas = moviesArray.filter((elemento) =>
    elemento.genre.includes("Drama")
  );

  return scoresAverage(dramas);
}
console.log("iteration 5");

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const arraycopy = [...moviesArray];
  arraycopy.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });
  return arraycopy;
}
// super factorizada con ternarios
function orderByYear(moviesArray) {
  return [...moviesArray].sort((a, b) =>
    a.year !== b.year ? a.year - b.year : a.title.localeCompare(b.title)
  );
}

console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const arraycopy = [...moviesArray];
  const arrayOrdenao = arraycopy.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
  const arrayTitulos = arrayOrdenao.map((elemento) => elemento.title);

  return arrayTitulos.splice(0, 20);
}

// return moviesArray
// .map((e)=>(e.title))
// .sort((a,b) => a.localeCompare(b))
// .slice(0,20)

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes


function turnHoursToMinutes(moviesArray) {
  const arraycopy = [...moviesArray];
  return arraycopy.map((elemento) => {
    let duration = elemento.duration;
    let hours = 0;
    let minutes = 0;

    if (typeof duration === "string") {
      const hoursMatch = duration.match(/(\d+)h/);
      const minutesMatch = duration.match(/(\d+)min/);

      if (hoursMatch) hours = parseInt(hoursMatch[1]);
      if (minutesMatch) minutes = parseInt(minutesMatch[1]);
    }

    return {
      duration: hours * 60 + minutes,
    };
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) return null;
  const pelisAnual = {}; // paso 1 mete las pelis en un objeto por años
  moviesArray.forEach((peli) => {
    // recorre el array mertiendo con push cada peli en su año correspindiente
    if (!pelisAnual[peli.year]) {
      //si no hay año lo crea
      pelisAnual[peli.year] = [];
    }
    pelisAnual[peli.year].push(peli); //pushea la peli
  });
  // paso 2: calcula la media año. para cada año en el objeto calcula la media.
  let mejorMedia = null;
  let mejorAño = 0;

  for (const year in pelisAnual) {
    const media = scoresAverage(pelisAnual[year]);

    if (media > mejorMedia || (media === mejorMedia && year < mejorAño)) {
      mejorAño = year;
      mejorMedia = media;
    }
  }
  return `The best year was ${mejorAño} with an average score of ${mejorMedia}`;
}
