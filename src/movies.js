// Iteration 1: All directors? - Get the dataay of all directors.

const getAllDirectors =(data)=>{
    const listOfDirectors = data.map((movie) => movie.director)
    return listOfDirectors;
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (data) =>{
    const dramaMoviesOfSpielberg = data.filter((movie)=>{
    return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
})
return dramaMoviesOfSpielberg.length
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (data)=>{
    if(data.length === 0) {
        return 0.00
    }
const totalAverage = data.reduce((counter,movie)=>{

    if(Number(movie.rate)){
        return counter+movie.rate
    } else {
        return counter
    }
}, 0)
return Number((totalAverage / data.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = (data) => {
    const dramaMovies = data.filter((movie) => movie.genre.includes("Drama"))
    return ratesAverage(dramaMovies)

}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(data) {
    return orderTitlesAlphabetically(data).sort((a,b) => a.year - b.year);
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderTitlesAlphabetically(data) {
    return data
    .slice(0, data.length)
    .sort((a, b) => {
        if (a.title < b.title) {
            return - 1;
        } else if (a.title > b.title) {
            return 1;
        } return 0;
    });
};

function orderAlphabetically(data) {
    return orderTitlesAlphabetically(data).slice(0, 20).map(movie => movie.title);
};

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(data) {
    return data
        .map(movie => {
          const updatedMovie = {...movie};
            if (movie.duration.includes('h')) {
                updatedMovie.duration = parseInt(movie.duration.slice(0,2)) * 60 + parseInt(movie.duration.slice(3, 5) || 0);
            }   else {
                updatedMovie.duration = Number(movie.duration.slice(0,2));
            }   return updatedMovie;
        });
};

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function orderByYearInverse(data) {
    return data.sort((a, b) => b.year - a.year);
};

function bestYearAvg(data) {
    if (data.length < 1) { // Esto lo pide que se haga así o estoy "trampeandolo" y realmente no me da null con empty data por error en mi codigo?
        return null;
    };
    let result = [];
    let newdata = orderByYearInverse(data);
    let year = newdata[0].year;
    for (year; year >= newdata[newdata.length -1].year; year--) {
        const yeardata = newdata.filter(movie => movie.year === year);
        result.push(
            {
                'year': year,
                'rate': parseFloat(yeardata.reduce((acc, sum) => acc + sum.rate/yeardata.length, 0))
            }
        )};
    let solucion = result.reduce((prev, curr) => (prev.rate > curr.rate) ? prev : curr, 0);
    return `The best year was ${solucion.year} with an average rate of ${solucion.rate}`
};