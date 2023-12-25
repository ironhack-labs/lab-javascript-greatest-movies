// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

/*
{
  title: 'The Shawshank Redemption',
  year: 1994,
  director: 'Frank Darabont',
  duration: '2h 22min',
  genre: ['Crime', 'Drama'],
  score: 9.3
},
*/
function getAllDirectors(moviesArray) {
  return moviesArray.map(el => el.director);

  /*****  returning the array filtered. ******
  return moviesArray
    .map(el => el.director)
    .filter((director, index, self) => self.indexOf(director) === index);
  */
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(el => el.director === 'Steven Spielberg' && el.genre.includes('Drama')).length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let len = moviesArray.length;

  if (len === 0) {
    return 0;
  }

  const number = moviesArray.reduce((acc, el) => {
    if (!el.score) {
      return acc + 0;
    } else {
      return acc + el.score;
    }
  }, 0);

  return +(number/len).toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(el => el.genre.includes('Drama'));

  if (dramaMovies.length === 0) {
    return 0;
  }

  const score = dramaMovies.reduce((acc, elem) => {
    return acc + elem.score;
  }, 0);

  return parseFloat((score / dramaMovies.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const moviesYear = [...moviesArray].sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  return moviesYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const moviesTitle = [...moviesArray].sort((a, b) => a.title.localeCompare(b.title));
  return moviesTitle.map(el => el.title).slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const newMoviesArray = [...moviesArray];
  const numbers = newMoviesArray
    .filter(time => time.duration)
    .reduce((acc, elem) => {
      let hour = 0
      let minutes = '';
      for (let i = 0; i < elem.duration.length; i++) {
        if (i === 0) {
          hour = elem.duration[i] * 60
        } else if (+(elem.duration[i])) {
          minutes += `${elem.duration[i]}`
        }
      }
      
      acc = hour + +(minutes);
      return acc;
    }, 0);

  for (let i = 0; i < newMoviesArray.length; i++) {
    newMoviesArray[i].duration = numbers;
  }

  return newMoviesArray;
}

/****************************************************************

                      TESTEANDO SOLUCIÓN DE CHATGPT CON REGEX


function turnHoursToMinutes2(moviesArray) {
  // Usar map para crear un nuevo array en lugar de modificar el existente
  return moviesArray.map(movie => {
    // Utilizar expresiones regulares para extraer horas y minutos
    const match = movie.duration.match(/(\d+)h?\s*(\d*)min?/);
    console.log(match)

    // Extraer horas y minutos y convertirlos a números
    const hours = match[1] ? parseInt(match[1], 10) : 0;
    const minutes = match[2] ? parseInt(match[2], 10) : 0;

    // Calcular la duración total en minutos
    const totalMinutes = hours * 60 + minutes;

    // Devolver un nuevo objeto con la duración actualizada
    return {
      ...movie,
      duration: totalMinutes
    };
  });
}

const s = [{
  title: 'The Shawshank Redemption',
  year: 1994,
  director: 'Frank Darabont',
  duration: '2h 22min',
  genre: ['Crime', 'Drama'],
  score: 9.3
}]

console.log(turnHoursToMinutes2(s));

********************************************************************************/

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if(!moviesArray.length) {
    return null;
  }

  const years = moviesArray.filter((elem, index, self) => 
    index === self.findIndex((otherElem) => otherElem.year === elem.year)
  );
  
  let score = 0;
  let finalYear = 0;

  for (let i = 0; i < years.length; i++) {
    const year = years[i].year;
    let len = 0;
    let count = 0;

    for (let j = 0; j < moviesArray.length; j++) {
      const yearToCompare = moviesArray[j].year;
      
      if (year === yearToCompare) {
        count += moviesArray[j].score;
        len++;
      }
    }

    if (len) {
      if(score < (count / len)) {
        score = count / len;
        finalYear = year;
      }

      if (score === (count / len)) {
        finalYear = year;
      }

    }
  }

  return `The best year was ${finalYear} with an average score of ${score}`;
}
