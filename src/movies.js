// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?



function getAllDirectors(moviesArray) {
    
    const arrayOfDirectors = moviesArray.map(function(movie) {
        return movie.director;
    });
    return arrayOfDirectors;
}


console.log(getAllDirectors(movies));



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergDramaMovies = moviesArray.filter( movie => 
        movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    )
    
    return spielbergDramaMovies.length;
        }

        
    
 
console.log(howManyMovies(movies))


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0;

    // Sumar los scores, ignorando las películas sin score
    const totalScore = moviesArray.reduce((sum, movie) => {
        return movie.score ? sum + movie.score : sum;
    }, 0);

    // Contar solo las películas que tienen score
    const moviesWithScore = moviesArray.filter(movie => movie.score).length;

    // Si ninguna película tiene score, retornamos 0
    if (moviesWithScore === 0) return 0;

    // Calcular el promedio
    const average = totalScore / moviesWithScore;

    // Redondear a 2 decimales y retornar
    return Number(average.toFixed(2));
}

console.log(scoresAverage(movies))


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
   
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
  
    // Si no hay películas de drama, devolver 0
    if (dramaMovies.length === 0) {
      return 0;
    }

  // Calcular la suma de los scores de las películas de drama
  const totalDramaScore = dramaMovies.reduce((sum, movie) => {
    // Si la película tiene un score, añadirlo al acumulador
    return movie.score ? sum + movie.score : sum;
  }, 0);

    // Calcular el promedio de los scores
    const averageDramaScore = totalDramaScore / dramaMovies.length;

    // Devolver el promedio redondeado a 2 decimales
    return parseFloat(averageDramaScore.toFixed(2));
  }





        console.log(dramaMoviesScore(movies))

// Iteration 4: general movies - Get the average of  Movies
function moviesScore(moviesArray) {
   

  // Calcular la suma de los scores de las películas de drama
  const totalScore = movies.reduce((sum, movie) => {
    // Si la película tiene un score, añadirlo al acumulador
    return movie.score ? sum + movie.score : sum;
  }, 0);

  const averageMovies = totalScore /  movies.length

    // Devolver el promedio redondeado a 2 decimales
    return parseFloat(averageMovies.toFixed(2));
  }





  console.log(moviesScore(movies))


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const moviesCopy = [...moviesArray];
   // Ordenamos las películas primero por año y luego por título
   moviesCopy.sort((a, b) => {
    // Primero comparamos por año
    if (a.year === b.year) {
        // Si el año es el mismo, ordenamos por título alfabéticamente
        return a.title.localeCompare(b.title);
    } else {
        // Si el año es diferente, ordenamos por año ascendente
        return a.year - b.year;
    }
    if (moviesCopy.length > 20) {
        moviesCopy.length = 20;
    }
});

// Devolvemos el array ordenado
return moviesCopy;
}




// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    
    const moviesCopy = [...moviesArray];
   // Ordenamos las películas primero por año y luego por título
   moviesCopy.sort((a, b) => {
    // Primero comparamos por año
    if (a.title === b.title) {
        // Si el año es el mismo, ordenamos por título alfabéticamente
        return a.title.localeCompare(`b.title`);
    } else {
        // Si el año es diferente, ordenamos por año ascendente
        return a.title - b.title;
    }
});

// Devolvemos el array ordenado
return moviesCopy;
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    // Usamos map para devolver un nuevo array sin mutar el original
    return moviesArray.map(movie => {
        // Función para convertir la duración en formato 'Xh Ymin' a minutos
        const convertDurationToMinutes = (duration) => {
            const hoursMatch = duration.match(/(\d+)h/); // Buscar horas
            const minutesMatch = duration.match(/(\d+)min/); // Buscar minutos
            
            const hours = hoursMatch ? parseInt(hoursMatch[1]) : 0; // Asignar horas
            const minutes = minutesMatch ? parseInt(minutesMatch[1]) : 0; // Asignar minutos
            
            return (hours * 60) + minutes; // Convertir todo a minutos
        };
        
        // Devolvemos una nueva película con la propiedad 'duration' convertida a minutos
        return {
            ...movie, // Conservar todas las demás propiedades
            duration: convertDurationToMinutes(movie.duration) // Actualizar la duración
        };
    });
}


console.log(turnHoursToMinutes(movies))


// Función que calcula el puntaje promedio por año y devuelve el año con el mejor promedio
function bestYearlyScoreAverage(moviesArray) {
    // Ordenamos las películas por año
    const orderedMovies = orderByYear(moviesArray);

    // Creamos un objeto para almacenar la suma de los puntajes y el conteo de películas por cada año
    const yearlyScores = {};

    // Iteramos sobre las películas ordenadas por año
    orderedMovies.forEach(movie => {
        if (!yearlyScores[movie.year]) {
            yearlyScores[movie.year] = { totalScore: 0, count: 0 };
        }
        // Sumamos el puntaje de la película y aumentamos el contador
        yearlyScores[movie.year].totalScore += movie.score || 0;
        yearlyScores[movie.year].count += 1;
    });

    // Ahora calculamos el puntaje promedio para cada año
    const yearlyAverageScores = Object.entries(yearlyScores).map(([year, { totalScore, count }]) => {
        const averageScore = totalScore / count;
        return { year: Number(year), averageScore: parseFloat(averageScore.toFixed(2)) };
    });

    // Buscamos el año con el puntaje promedio más alto
    const bestYear = yearlyAverageScores.reduce((best, current) => {
        return current.averageScore > best.averageScore ? current : best;
    });

    // Devolvemos el año con el mejor puntaje promedio y su promedio
    return bestYear;
}
console.log(bestYearlyScoreAverage(movies)); 