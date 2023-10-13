// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    const NewDirectorMatriz = moviesArray.map((movie) => {
        return movie.director

    })


    return NewDirectorMatriz;

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const newManyMovies = moviesArray.filter((movie) => {
        return movie.director === "Steven Spielberg" && movie.genre.includes('Drama');
    })

    return newManyMovies.length;

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let finalResult = 0;
    const newScore = moviesArray.filter((movie) => {

        return movie.score
    })

    const allScores = newScore.map((movie) => {
        return movie.score;
    })

    const sumsArr = allScores.reduce((acc, elem) => {
        return acc + elem;
    }, 0)
    if (newScore.length == 0) {
        finalResult = 0;
    } else {
        finalResult = (sumsArr / moviesArray.length).toFixed(2);
    }
    return parseFloat(finalResult);

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    let dramaMovies = 0;
    const newDramaMovies = moviesArray.filter((movie) => {

        return movie.genre.includes('Drama') && movie.genre.length == 1
    })

    const allDramas = newDramaMovies.map((movie) => {
        return movie.score
    })

    const sumsArr = allDramas.reduce((acc, elem) => {
        return acc + elem;
    }, 0)
    if (newDramaMovies.length == 0) {
        dramaMovies = 0;
    } else {
        dramaMovies = (sumsArr / newDramaMovies.length).toFixed(2);
    }
    return parseFloat(dramaMovies);





}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const movArray = [...moviesArray];
    movArray.sort((movie1, movie2) => {
        if (movie1.year != movie2.year) {
            return movie1.year - movie2.year
        }  else {
            return movie1.title.localeCompare(movie2.title);
        }

    });


    return movArray;


}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    return moviesArray.sort((movie1, movie2) => {
        return movie1.title.localeCompare(movie2.title);
    })
        .map((movie) => {
            return movie.title;
        })
        .slice(0, 20)


}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
// consigo hacer todo el ejercicio pero no entiendo porque jasmin me dice que estoy mutando la matriz original... 

    const clonMovies = [...moviesArray];
    
    const hoursToMins = clonMovies.map((movies)=> {
  
        let dur = movies.duration;
        let durationArray = dur.split("h ");
        if(durationArray.length > 1){
          let minsWthMins = durationArray[1].split("min");
          let durationInMins = parseInt(durationArray[0])*60+parseInt(minsWthMins[0]);
          movies.duration = durationInMins;
        }else {
          durationWthHArray = dur.replace("h","");
          let durationInMins = parseInt(durationWthHArray) * 60;
          movies.duration = durationInMins
         
          
        }
  
        return movies
      })
  
  
  
      return hoursToMins;



}



// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

    //Variables locales
    let sumRate = 0;
    let rateMax = 0;
    let filmMax = ''
    let lastFilm = '';
    let newFilm = '';
    let nRepFinal = 0;
    let rateFinal = 0;

    //Funcion AÑO
    const filmArray = [...moviesArray];
    filmArray.sort((movie1, movie2) => {
        if (movie1.year != movie2.year) {
            return movie1.year - movie2.year
        }  else {
            return movie1.title.localeCompare(movie2.title);
        }

    });
    if(filmArray.length == []){
        return null;
    }
  filmArray.forEach((film) => {
    newFilm = film.year;
    if(newFilm != lastFilm){
        sumRate = 0;
        sumRate = film.score;
        lastFilm = newFilm;
        nRep = 0;
    } else if(newFilm == lastFilm){
        sumRate += film.score;

    }


    nRep += 1;
    rateFinal = sumRate/nRep;
    if(rateFinal > rateMax){
        rateMax = sumRate;
        filmMax = newFilm;
        nRepFinal = nRep;
    }

    //console.log("Año "+ newFilm + " rate " +sumRate + " media " + sumRate/nRep + " max " + rateMax)


  });
  //console.log(rateMax/nRepFinal)
  let valorFinal = rateMax/nRepFinal

  return `El mejor año fue ${filmMax} con una puntuación media de ${Math.floor(valorFinal*100)/100}` ;



  /////////// 
}
