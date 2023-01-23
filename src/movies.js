// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const arrayClone = structuredClone(moviesArray);
  return arrayClone.map((movie) => {
    return movie.director;
  });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  const arrayClone = structuredClone(moviesArray);

  const result = arrayClone.filter((movie) => {
    if (
      movie.director === "Steven Spielberg" &&
      movie.genre.includes("Drama")
    ) {
      return 1;
    } else {
      return 0;
    }
  });

  return result.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  const arrayClone = structuredClone(moviesArray);

  let totalScore = arrayClone.reduce((acc, elem) => {
    if (elem.score > 0) {
      return (acc += elem.score);
    } else {
      return acc;
    }
  }, 0);

  return +(totalScore / moviesArray.length).toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  const arrayClone = structuredClone(moviesArray);

  let totalDramas = arrayClone.filter((movie) => {
    if (movie.genre.includes("Drama")) {
      return 1;
    } else {
      return 0;
    }
  });

  if (totalDramas.length === 0) {
    return 0;
  }

  let totalDramaAverage = totalDramas.reduce((acc, elem) => {
    if (elem.score > 0) {
      return (acc += elem.score);
    } else {
      return acc;
    }
  }, 0);

  return Number((totalDramaAverage / totalDramas.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const arrayClone = structuredClone(moviesArray);
  const orderArray = arrayClone.sort((elem2, elem1) => {
    if (elem1.year < elem2.year) {
      return 1;
    } else if (elem1.year > elem2.year) {
      return -1;
    } else {
      if (elem1.title < elem2.title) {
        return 1;
      } else if (elem1.title < elem2.title) {
        return -1;
      } else {
        return 0;
      }
    }
  });

  return orderArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const arrayClone = structuredClone(moviesArray);

  const orderMovies = arrayClone.sort((movie1, movie2) => {
    if (movie1.title > movie2.title) {
      return 1;
    } else if (movie1.year < movie2.year) {
      return -1;
    } else {
      return 0;
    }
  });

  let titlesArray = [];

  for (let i = 0; i < orderMovies.length; i++) {
    titlesArray.push(orderMovies[i].title);
  }

  return titlesArray.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const arrayClone = structuredClone(moviesArray);

  const newArray = arrayClone.map((element) => {
    let timeArray = element.duration.split(" ");
    let horasToMinutes = +timeArray[0].replace("h", "") * 60;
    let minutes = 0;

    if (timeArray[1]) {
      minutes = +timeArray[1].replace("min", "");
    }

    element.duration = horasToMinutes + minutes;
    return element;
  });

  return newArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null;
  }
  const arrayClone = structuredClone(moviesArray);

  //sort para ordenar y luego pillar el mejor score con find.
  //Tengo que filtrar por año y generar el score medio de ese año y compararlo con el de los otros.

/* Funciona pero no estoy filtrando por año

let orderByRate = arrayClone.sort((elem1, elem2) => {
    if (elem1.score > elem2.score) {
        return 1
    } else if (elem1.score < elem2.score) {
        return -1
    } else {
        return 0;
    }
  });
  
  let lastElement = orderByRate.length;
  let bestYear = orderByRate[lastElement - 1].year;
  let bestRate = orderByRate[lastElement - 1].score; 
  */


  return `The best year was ${bestYear} with an average score of ${bestRate}`;
}
