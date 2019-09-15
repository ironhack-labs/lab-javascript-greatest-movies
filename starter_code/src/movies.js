/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(filmArray){
    if(filmArray.length === 0){
        return 0;
    }

    const reviewCount = filmArray.reduce((acumulator,film) => {
        if(!film.rate ){
            return acumulator;
        }
        return acumulator += parseFloat(film.rate);
    },0);
    
    return parseFloat((reviewCount/ filmArray.length).toFixed(2));

}
 
// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(filmArray){
    const dramas = filmArray.filter(film => {
      return film.genre.find( g => g === "Drama")
    });

  return ratesAverage(dramas);
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByDuration(filmArray){
    return filmArray.sort((f1,f2)=> {
        if(f1.duration < f2.duration) {
            return -1;
        }
        if(f1.duration === f2.duration && f1.title < f2.title ){
            return -1;
        }
        return 1;
    })
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(filmArray){
    return filmArray.filter(film => (film.director === "Steven Spielberg" && film.genre.find( g => g === "Drama"))).length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(filmArray){
    let films = filmArray.map(film => film.title).sort();
    if (films.lenth < 20){
        return films;
    }
    return films.slice(0,20);
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(filmArray){
    let result = [];
    filmArray.forEach(film => {
        let duration = film.duration.split(' ');
        let hour = 0;
        let min = 0
        if(duration.length >=2){
            hour = parseInt(duration[0].replace("h",""));
            min = parseInt(duration[1].replace("min",""));
        }else if(duration[0].includes("h")){
            hour = parseInt(duration[0].replace("min",""));
        }else{
            min = parseInt(duration[0].replace("min","")); 
        }
        let f=  Object.assign({}, film);
        f.duration = hour*60 + min;
        result.push(f);
    });

    return result;
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(filmArray){
    if (filmArray.length === 0) return null;
    const years = filmArray.map(film => film.year);
    let best = 0;
    let result= 0;
    
    years.forEach(element => {
        const avg = ratesAverage(filmArray.filter(e=>e.year == element));
        if(avg >= best){
            best = avg;
            result = element;
        }
    });

    return "The best year was " + result + " with an average rate of " + best;
}