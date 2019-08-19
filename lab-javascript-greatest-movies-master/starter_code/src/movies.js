/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

const roundNumber = (number, digits) => Math.round(number * 10 ** digits) / 10 ** digits;

const ratesAverage = movieRate => {
    let rateSum = 0;
    for (const movie of movieRate) rateSum = rateSum + (!isNaN(parseFloat(movie.rate)) ? parseFloat(movie.rate) : 0);
    return roundNumber(rateSum/movieRate.length, 2);
};

// Iteration 2: Drama movies - Get the average of Drama Movies

const dramaMoviesRateAux = drama => ratesAverage(drama.filter(movie => movie.genre.includes("Drama")));
const dramaMoviesRate = whatIf => !isNaN(dramaMoviesRateAux(whatIf)) ? dramaMoviesRateAux(whatIf) : 0;

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

const orderByDuration = order => {
    order.sort((a,b) => a.duration > b.duration ? 1 : a.duration < b.duration ? -1 : 0);
    order.sort((a,b) => a.duration === b.duration && a.title > b.title ? 1 : a.duration === b.duration && a.title < b.title ? -1 : 0);
    return order;
};
   
// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

const howManyMovies = steven => steven.filter(movie => movie.director.includes("Steven Spielberg") && movie.genre.includes("Drama")).length;

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = order => {
    order.sort((a,b) => a.title > b.title ? 1 : a.title < b.title ? -1 : 0);
    order.splice(20, Infinity);
    let only20 = order.map(function (item) {
        return item.title;
    });
    return only20;
};

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes= time => {
    const auxArray = [];
    const timeClone = JSON.parse(JSON.stringify(time));
    for (const item of time) auxArray.push(item.duration.split(' '));
    for (let i = 0; i < auxArray.length; i++) 
        auxArray[i].length === 2 ? auxArray[i] = parseInt(auxArray[i][0])*60 + parseInt(auxArray[i][1]) :
        auxArray[i][0].includes("h") ? auxArray[i] = parseInt(auxArray[i])*60 :
        auxArray[i] = parseInt(auxArray[i]);
    for (let i = 0; i < auxArray.length; i++) timeClone[i].duration = auxArray[i];
    return timeClone;
};

// BONUS Iteration: Best yearly rate average - Best yearly rate average

const orderByYear = order => {
    for (const item of order) order.sort((a,b) => a.year > b.year ? 1 : a.year < b.year ? -1 : 0);
    return order;
};

const bestYearAvg = year => {
    const yearsAverage = [];
    const aux = orderByYear(year);
    if (year[0] === undefined) return null;
    for (let i = aux[0].year; i<= aux[aux.length-1].year; i++) {
        let temp = 0;
        temp = ratesAverage(year.filter(movie => movie.year.includes(i)));
        if (!isNaN(temp)) yearsAverage.push([temp, i]);
    }
    yearsAverage.sort((a,b) => a[0] < b[0] ? 1 : a[0] > b[0] ? -1 : 0);
    yearsAverage.sort((a,b) => a[0] === b[0] && a[1] > b[1] ? 1 : a[0] === b[0] && a[1] < b[1] ? -1 : 0);
    return "The best year was " + yearsAverage[0][1] + " with an average rate of " + yearsAverage[0][0];
};

console.log(bestYearAvg(movies));