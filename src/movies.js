// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = arr => arr.map(obj => obj.director).filter((item, index, mappedArr) => mappedArr.indexOf(item) === index);
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
// the filtering is included within constant (getAllDirectors) line 2 ^_^;
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = arr => arr.filter(obj => obj.director === 'Steven Spielberg' && obj.genre.includes('Drama')).length;
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = arr => Number(arr.length === 0 ? 0 : (arr.map(obj => obj.rate || 0).reduce((a, b) => a + b) / arr.length).toFixed(2))
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
    let filtered = arr.length === 0 ? 0 : arr.filter(obj => obj.genre.includes('Drama')).map(obj => obj.rate || 0);
    if (filtered.length === 0) return 0;
    return (parseFloat((filtered.reduce((a, b) => a + b) / filtered.length).toFixed(2)))
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
    let mappedArr=arr.map(obj=>obj).sort(function(a,b){
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
          }
          return a.year - b.year;
    });
    return mappedArr;
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = arr => arr.map(obj => obj.title).sort().slice(0, 20)
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
    let mapped = arr.map(function (obj) {
        let dur = obj.duration.split(' ')
            .map(function (str) {
                if ((str.includes('h'))) {
                    return parseInt(str) * 60
                } else if (str.includes('min')) {
                    return parseInt(str)
                }
            }).reduce((a, b) => (a + b))
        return {
            ...obj,
            duration: dur
        }
    })
    return mapped;
}
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(arr){
    if(arr.length===0)return null;
}