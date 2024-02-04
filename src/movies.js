// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    
    // Hacemos un array de los directores
    const directorsArr = moviesArray.map(movie => movie.director);

    // Ordenar alfabéticamente
    // const directorsOrderedArr = directorsArr.sort()

    // Eliminar duplicados
    const uniqueDirectorsArr = directorsArr.filter((director, index, self) => {
        return self.indexOf(director) === index;
    });

    return directorsArr

}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const dramaSpielberg = moviesArray.filter(movie => {
        return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama') 
    })

    // console.log(dramaSpielberg)
    return dramaSpielberg.length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    // Calculamos el average y vemos si tiene score, si no tiene suma 0
    const averageValue = moviesArray.reduce((acc, curr) => {
        return acc + (curr.score ? curr.score : 0)
    }, 0)

    // Podríamos alcular el número total de películas que tienen puntuación
    // const moviesWithScoreCount = moviesArray.reduce((acc, curr) => {
    //     return acc + (curr.score ? 1 : 0);
    // }, 0);

    const totalAverage = moviesArray.length > 0 ? parseFloat((averageValue/moviesArray.length).toFixed(2)) : 0;
    return totalAverage;
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    // Nuevo array solo con las pelis de Drama
    const dramaMovies = moviesArray.filter(movie => {
        return movie.genre.includes('Drama') 
    })

    // Calculamos la suma de todas las notas de las pelis de Drama
    const dramaMoviesAverage = dramaMovies.reduce((acc, curr) => {
        return acc + (curr.score ? curr.score : 0)
    }, 0)

    // Devolvemos 0 si la longitud es 0 y si no hacemos la media de la suma de las notas por la cantidad de pelis de drama
    const totalDramaAverage = dramaMovies.length > 0 ? parseFloat((dramaMoviesAverage/dramaMovies.length).toFixed(2)) : 0;
    return totalDramaAverage;
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedYear = [...moviesArray].sort((a, b) => {
        if (a.year < b.year) return -1;
        if (a.year > b.year) return 1;
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
    });
    
    // console.log(sortedYear)
    return sortedYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    // En una misma constante primero creamos un nuevo array con el spread y lo ordenamos alfabéticamente por título, después mapeamos solo los títulos y finalmente cogemos los 20 primeros resultados
    const twentyAlpha = [...moviesArray].sort((a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
    }).map(movie => movie.title).slice(0, 20);
    console.log(twentyAlpha)
    return twentyAlpha
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    // creamos un nuevo array con map, duplicado moviesArray y para cada objeto duplicamos el original y le cambiamos la duracion
    const timeFormatArr = moviesArray.map(movie => {
        return {
            ...movie,
            duration: timeToMin(movie.duration)
        };
    })
    
    console.log(timeFormatArr)
    return timeFormatArr
}

function timeToMin(data) {
    const parts = data.split(' ')
    let totalMinutes = 0
    parts.forEach(part => {
        if(part.includes('h')) {
            totalMinutes += parseInt(part) * 60
        } else if (part.includes('min')) {
            totalMinutes += parseInt(part)
        }
    })
    return totalMinutes
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
      return null;
    }
  
    const averageScoresByYear = {};
    const numberOfMoviesByYear = {};
  
    moviesArray.forEach(movie => {
      const releaseYear = movie.year;
      if (!averageScoresByYear[releaseYear]) {
        averageScoresByYear[releaseYear] = movie.score;
        numberOfMoviesByYear[releaseYear] = 1;
      } else {
        averageScoresByYear[releaseYear] += movie.score;
        numberOfMoviesByYear[releaseYear]++;
      }
    });
  
    for (const year in averageScoresByYear) {
      averageScoresByYear[year] /= numberOfMoviesByYear[year];
    }

    console.log(averageScoresByYear)
  
    let bestYear = null;
    let bestAvg = 0;
  
    for (const year in averageScoresByYear) {
      if (averageScoresByYear[year] > bestAvg || (averageScoresByYear[year] === bestAvg && year < bestYear)) {
        bestYear = year;
        bestAvg = averageScoresByYear[year];
      }
    }
  
    return `The best year was ${bestYear} with an average score of ${bestAvg}`;
  }
