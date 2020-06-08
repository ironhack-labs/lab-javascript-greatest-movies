// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = arrayOfMovies => arrayOfMovies.map(movie => movie.director);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

const directorsToFilter = getAllDirectors(movies);
const filteredDirectors = directorsToFilter.filter((movie, i) => i === directorsToFilter.indexOf(movie))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = arrayOfMovies => arrayOfMovies.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")).length

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = arrayOfMovies => !arrayOfMovies.length ? 0 :
    Number((arrayOfMovies.reduce((acc, val) => val.rate ? acc + val.rate : acc, 0) / arrayOfMovies.length).toFixed(2));

// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = arrayOfMovies => {
    const newArr = arrayOfMovies.filter(movie => movie.genre.includes("Drama"));
    return ratesAverage(newArr);
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = arrayOfMovies => [...arrayOfMovies.sort((a, b) => a.year - b.year !== 0 ? a.year - b.year : a.title.localeCompare(b.title))];

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = arrayOfMovies => [...arrayOfMovies].sort((a, b) => a.title.localeCompare(b.title))
    .map(elem => elem.title).splice(0, 20);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes = arrayOfMovies => arrayOfMovies.map(movie => {
    const newMov = {
        ...movie
    }
    newMov.duration = newMov.duration.split(" ")
    let number = 0;
    if (newMov.duration.length === 1) {
        number = newMov.duration[0].includes("h") ? parseInt(newMov.duration[0].replace("h", "")) * 60 : parseInt(newMov.duration[0].replace("min", ""))
    } else {
        number = parseInt(newMov.duration[0].replace("h", "")) * 60 + parseInt(newMov.duration[1].replace("min", ""))
    }
    return {
        ...newMov,
        duration: number
    }
})

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

const bestYearAvg = arrayOfMovies => {
    let AverageArr = []
    if (!arrayOfMovies.length) return null
    const ages = arrayOfMovies.map(movie => movie.year);
    const filteredYears = ages.filter((year, i) => i === ages.indexOf(year));
    filteredYears.forEach(num => {
        AverageArr.push({
            year: num,
            rate: ratesAverage(arrayOfMovies.filter(movie => movie.year === num))
        });
    });
    const finalYear = AverageArr.reduce((acc, val) => {
        if (acc.rate === val.rate) {
            return acc.year < val.year ? acc : val;
        } else {
            return acc.rate > val.rate ? acc : val;
        }
    });
    return `The best year was ${finalYear.year} with an average rate of ${finalYear.rate}`
}