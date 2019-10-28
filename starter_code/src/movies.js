/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear (array){
    let newArray = array.slice ();
    return newArray.sort((a,b)=> { 
        if (a.year > b.year) return 1;
        if (a.year == b.year){
            if (a.title > b.title)  return 1;
            if (a.title == b.title) return 0;
            if (a.title < b.title)  return -1;
        } 
        if (a.year < b.year) return -1;
    })

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(array){
    // select elements
    let newArray = array.filter(object => {
        return object.director === "Steven Spielberg" && object.genre.indexOf("Drama") !== -1;
    })
    // count elements
    return newArray.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array){
    let newArray = array.slice();
    newArray.sort((a,b) => {
        if(a.title > b.title) return 1;
        if(a.title == b.title) return 0;
        if(a.title < b.title) return -1;
    }) 
     newArray = newArray.map(object => object.title);
     return newArray.slice(0,20);
}


// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array){
    if (array.length === 0){
        return 0;
    }

    let suma = array.reduce((acumulador, object) => {
        if (object.rate == undefined){
            return acumulador + 0;
        } 
        return acumulador + Number(object.rate); // No me queda claro el porqué
    }, 0)                                        // de usar Number

    let averageRate = Math.round((suma / array.length) * 100) / 100;
    console.log(averageRate);

    return averageRate;
}

// Iteration 5: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = (movies) => {
    let dramaGenre = movies.filter((movie) => {
        return movie.genre.indexOf("Drama") !== -1;
    });

    return ratesAverage(dramaGenre);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = (movies)=>  {
    return movies.map(movie => {
        let timesArray = movie.duration.split(" ");
        let duration, hours, minutes;
        
        if (timesArray.length === 2){
            hours = Number(timesArray[0].slice(0,-1));
            minutes = Number(timesArray[1].slice(0,-3));
            duration = hours * 60 + minutes;
        } else if (timesArray.length === 1 && timesArray[0].includes("h")) {
            hours = Number(timesArray[0].slice(0,-1));
            duration = hours * 60;
        } else if (timesArray.length === 1 && timesArray[0].includes("min")) {
            minutes = Number(timesArray[0].slice(0,-3));
            duration = minutes;
        }
  
        return {
            title: movie.title,
            year: movie.year,
            director: movie.director,
            duration: duration,
            genre: movie.genre,
            rate: movie.rate
        }
    })
  }

// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg (arr) {
    if (arr.length === 0) return null
    if (arr.length === 1) return `The best year was ${arr[0].year} with an average rate of ${arr[0].rate}`
    let moviesYearAvg = []
    for (i = 0, l = arr.length; i < l; i++) {
      let moviesYear = arr.filter(movie => movie.year.includes(arr[i].year))
      moviesYearAvg.push([ratesAverage(moviesYear), arr[i].year])
    }
    moviesYearAvg.sort((a, b) => {
      if (a[0] === b[0]) {
        return a[1] > b[1] ? 1 : -1
      }
      return b[0] - a[0]
    })
    return `The best year was ${moviesYearAvg[0][1]} with an average rate of ${moviesYearAvg[0][0]}`
  } //prueba