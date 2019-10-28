/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
    let sArr = [...arr];
    return sArr.sort((movie1, movie2) => movie1.year > movie2.year ? 1 : -1);
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(arr) {
    return arr.filter(movie => movie.director === `Steven Spielberg` && movie.genre.indexOf(`Drama`) !== -1).length;
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
    let arrCpy = [...arr];
    return arrCpy.sort((movie1, movie2) => movie1.title.localeCompare(movie2.title) === 1 ? 1 : -1).map((movie, idx) => idx < 20 ? movie.title : null).filter(movie => movie !== null);

}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
    if (arr.length > 0) {
        return Math.round(arr.reduce((acc, movie) => {
            let rate = typeof movie.rate === `number` ? movie.rate : 0;
            return acc + rate;
        }, 0) / arr.length * 100) / 100;
    } else {
        return 0;
    }
}
// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
    let drama = arr.filter(movie => movie.genre.indexOf(`Drama`) !== -1);
    return ratesAverage(drama);
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr) {
    let arrCpy = JSON.parse(JSON.stringify(arr));

    return arrCpy.map(elem => {
        let pair = elem.duration.split(" ");
        if (pair.length === 1) {
            if (pair[0].includes(`min`)) {
                elem.duration = +pair[0].replace(`min`, ``);
            } else {
                elem.duration = +pair[0].replace(`h`, ``) * 60;
            }
        } else {
            elem.duration = (+pair[0].replace(`h`, ``) * 60) + (+pair[1].replace(`min`, ``));

        }
        return elem;
    });


}
// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(arr) {
    let arrCpy = JSON.parse(JSON.stringify(arr));
    if (arrCpy.length > 0) {
        if (arrCpy.length === 1) {
            return `The best year was ${arrCpy[0].year} with an average rate of ${arrCpy[0].rate}`;
        } else {

            arrCpy.sort((movie1, movie2) => movie1.year < movie2.year ? -1 : 1);
            let firstYear = arrCpy[0].year;
            let yearsArray = Array(arrCpy[arrCpy.length - 1].year - firstYear).fill().map(() => firstYear++);

            let moviesByYear = yearsArray.map(year => {
                let cinemaYear = arrCpy.filter(movie => movie.year === year);
                let yearAverage = ratesAverage(cinemaYear);
                return {
                    year: year,
                    average: yearAverage
                };
            }).filter(year => year.average > 0);

            moviesByYear.sort((year1, year2) => year1.average < year2.average ? 1 : -1);
            return `The best year was ${moviesByYear[0].year} with an average rate of ${moviesByYear[0].average}`;
        }
    } else {
        return null;
    }

}