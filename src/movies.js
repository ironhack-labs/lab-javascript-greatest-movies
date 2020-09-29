// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = (movies) => {
    let directors = movies.map((e) => {
        return e.director;
    });
    let uniqueDirectors = directors.filter((e, index) => directors.indexOf(e) === index);
    return uniqueDirectors;
};

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (movies) => {
    let directorMovies = movies.filter((e) => {
        return e.director === "Steven Spielberg" && e.genre.includes("Drama") === true;
    });
    return directorMovies.length;
};
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (movies) => {
    let moviesWithRate = movies.filter((e) => {
        return "rate" in e === true && e.rate > 0;
    });
    let sumRates = moviesWithRate.reduce((sum, e) => {
        return sum + e.rate
    }, 0);

    if (movies.length === 0) {
        return 0;
    } else {
        return Math.round(sumRates / movies.length * 100) / 100;
    }
}
// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = (movies) => {
    let moviesWithRate = movies.filter((e) => {
        return "rate" in e === true && e.rate > 0 && e.genre.includes("Drama") === true;
    });
    let sumRates = moviesWithRate.reduce((sum, e) => {
        return sum + e.rate
    }, 0);

    if (moviesWithRate.length === 0) {
        return 0;
    } else {
        return Math.round(sumRates / moviesWithRate.length * 100) / 100;
    }
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (movies) => {
    let sortedByYear = movies.slice(0).sort((a, b) => {
        if (a.year < b.year) return -1;
        if (a.year > b.year) return 1;
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
    });
    return sortedByYear;
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (movies) => {
    let sortedByTitle = movies.slice(0).sort((a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
    });
    let titles = sortedByTitle.map((e) => {
        return e.title;
    })
    return titles.slice(0, 20);
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = (movies) => {
    let minutes = movies.map((e) => {
        let newObject = {};
        if (e.duration.includes('h') === true && e.duration.includes('min') === true) {
            someArray = e.duration.replace('h', '').replace('min', '').split(' ');
            newObject = Object.assign({}, e, {
                duration: Number(someArray[0]) * 60 + Number(someArray[1])
            });
            return newObject;
        } else if (e.duration.includes('h') === true) {
            someArray = e.duration.replace('h', '');
            newObject = Object.assign({}, e, {
                duration: Number(someArray) * 60
            });
            return newObject;
        } else {
            someArray = e.duration.replace('min', '');
            newObject = Object.assign({}, e, {
                duration: Number(someArray)
            });
            return newObject;
        }
    });
    return minutes;
}
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
const bestYearAvg = (movies) => {
    if (movies.length === 0) {
        return null;
    } else {
        let yearsArray = movies.map((e) => {
            return e.year;
        });
        let uniqueYears = yearsArray.filter((e, index) => yearsArray.indexOf(e) === index);
        let newArray = [];
        for (let i = 0; i < uniqueYears.length; i++) {
            let yearSumArray = movies.filter((e) => {
                return e.year === uniqueYears[i];
            });
            let sumProduct = yearSumArray.reduce((acum, ee) => {
                return acum + ee.rate
            }, 0);
            newArray.push({
                year: uniqueYears[i],
                yearCount: yearSumArray.length,
                sumRate: sumProduct,
                avg: sumProduct / yearSumArray.length
            });
        };
        let newArraySorted = newArray.slice(0).sort((a, b) => {
            if (a.year < b.year) return -1;
            if (a.year > b.year) return 1;
        });

        let max = 0;
        let bestYear = 0;
        let text = ``;
        for (let ii = 0; ii < newArray.length; ii++) {
            if (newArraySorted[ii].avg > max) {
                max = newArraySorted[ii].avg;
                bestYear = newArraySorted[ii].year;
                text = `The best year was ${bestYear} with an average rate of ${max}`
            };
        };
        return text;
    };
};