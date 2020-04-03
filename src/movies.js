/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(yearOfMovie) {

    let copiaMovies = [...yearOfMovie];
    function ordenar(a,b) {
        if (a.year !== b.year){
            return a.year - b.year;
        } else {
            if (a.title.toUpperCase() > b.title.toUpperCase()) {
                return 1;
            } else {
                return -1;
            }
        }
    }

    return copiaMovies.sort(ordenar);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(genreOfMovie) {
    let copiaMovies = Array.from(genreOfMovie);

    function filterMovies(dramaMovies){
        return dramaMovies.director === "Steven Spielberg" && dramaMovies.genre.includes("Drama");
    }
    copiaMovies = genreOfMovie.filter(filterMovies);

    return copiaMovies.length;
  }

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(alphabetOrderedArr) {
    let copiaMovies = Array.from(alphabetOrderedArr);

    function ordenarAZ(a,b) {
        return a.title.localeCompare(b.title);
    }

    copiaMovies.sort(ordenarAZ);

    copiaMovies = copiaMovies.map(movies => {

        return movies.title
    }).slice(0,20);

    return copiaMovies;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(allRates) {

    if (allRates.length === 0) {
        return 0;
    }

    meanRates = allRates.reduce( (acc, elem) => elem.rate ? acc + elem.rate : acc + 0, 0)/allRates.length;
  
    return Math.round(meanRates * 100) / 100;
  }

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(dramArray) {
    
    dramaMoviesReview = [...dramArray];
    dramaMoviesReview = dramaMoviesReview.filter(movieGenre => movieGenre.genre.includes("Drama"));

    return ratesAverage(dramaMoviesReview);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arrInHours) {
    let arrInMinutes = JSON.parse(JSON.stringify(arrInHours));
    arrInMinutes = arrInMinutes.map(fromHours => {
        if (fromHours.duration.length === 2) {
          return {duration: fromHours.duration[0]*60};
        } else if (fromHours.duration.length === 8) {
          return {duration: fromHours.duration[0]*60 + parseInt(fromHours.duration[3]+fromHours.duration[4])};
        } else if (fromHours.duration.length === 7){
          return {duration: fromHours.duration[0]*60 + parseInt(fromHours.duration[3])}
        } else if (fromHours.duration.length === 5) {
          return {duration: parseInt(fromHours.duration[0]+fromHours.duration[1])};
        } else {
          return {duration: parseInt(fromHours.duration[0])}
        }
    })

    return arrInMinutes;
}

/*
for (i in movies) {
  if (movies[i].duration.length === 2) {
    console.log(movies[i].duration[0]*60)
  } else if (movies[i].duration.length === 8) {
    console.log(movies[i].duration[0]*60 + parseInt(movies[i].duration[3]+movies[i].duration[4]))
  } else if (movies[i].duration.length === 7) {
    console.log(movies[i].duration[0]*60 + parseInt(movies[i].duration[3]))
  }
}
*/

// BONUS Iteration: Best yearly rate average - Best yearly rate average
