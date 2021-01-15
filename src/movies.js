// Iteration 1: All directors? - Get the array of all directors.
console.log("Iteration 1 ----------------");

function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(film => {
        return film.director;
    });
    return directors;
};

console.log(getAllDirectors(movies));

//_Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array
// of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

console.log("Iteration 1 - Bonus ----------------");

function getAllSingleDirectors(moviesArray) {
    const directors = getAllDirectors(moviesArray);
    let singleDirectors = directors.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
    return singleDirectors;
};

console.log(getAllSingleDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

console.log("Iteration 2 ----------------");

function howManyMovies(moviesArray) {
    let steven = moviesArray.filter(value => {
        return (value.director === "Steven Spielberg" && value.genre.includes("Drama"));
    });
    return steven.length;
};

console.log(howManyMovies(movies));

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

console.log("Iteration 3 ----------------");

function ratesAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const rates = moviesArray.map(film => {
        return film.rate;
    });

    let totalRate = rates.reduce(function (accumulator, currentValue) {
        if (currentValue) {
            return accumulator + currentValue;
        } else {
            return accumulator;
        }
    }, 0);
    let avg = totalRate / rates.length;
    return Math.round(avg * 100) / 100;
}

console.log(ratesAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies

console.log("Iteration 4 ----------------");

function dramaMoviesRate(moviesArray) {
    let dramaMovies = moviesArray.filter(function (film) {
        return film.genre.includes("Drama");
    });

    if (dramaMovies.length === 0) {
        return 0;
    }

    const rateDrama = dramaMovies.map(film => {
        return film.rate;
    });

    let totalRateDrama = rateDrama.reduce(function (acc, el) {
        if (el) {
            return acc + el;
        } else {
            return acc;
        }
    }, 0);

    return Math.round((totalRateDrama / rateDrama.length) * 100) / 100;
}

console.log(dramaMoviesRate(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

console.log("Iteration 5 ----------------");

function orderByYear(moviesArray) {
    const moviesArrayCopy = moviesArray.slice(); // [...moviesArray]
    let orderedArray = moviesArrayCopy.sort(function compare(a, b) {
        if (a.year < b.year) {
            return -1;
        }
        if (a.year > b.year) {
            return 1;
        }
        if (a.year === b.year) {
            if (a.title < b.title) {
                return -1;
            }
            if (a.title > b.title) {
                return 1;
            }
            return 0;
        }

    })
    return orderedArray;
}
console.log(orderByYear(movies));


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

console.log("Iteration 6 ----------------");

function orderAlphabetically(moviesArray) {
    let orderedArray = moviesArray.slice().sort(function compare(a, b) {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    })

    const titlesOrderedArray = orderedArray.map(film => {
        return film.title;
    });

    return titlesOrderedArray.splice(0, 20);
}

console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

console.log("Iteration 7 ----------------");

function turnHoursToMinutes(moviesArray) {

    const modifiedMoviesArray = moviesArray.map((film) => {

        const filmCopy = { ...film };
        filmCopy.duration = convertDuration(film.duration)

        return filmCopy;
    })


    return modifiedMoviesArray
}

function convertDuration(durationStr) {

    const timeArr = durationStr.split(" "); //"2h 22min" -> ["2h", "22min"]
    const minutes = timeArr.reduce((totalMinutes, el) => {
        if (el.includes('h')) {
            const hourArr = el.split(""); //"2h" -> ["2", "h"]
            const hour = Number(hourArr[0]);

            const convertedMinutes = hour * 60;

            return totalMinutes + convertedMinutes;
        } else {
            const minArr = el.split("min"); // "22min" -> ["22"]
            const convertedMinutes = Number(minArr[0]);

            return totalMinutes + convertedMinutes;
        }
    }, 0)

    return minutes;
}

console.log(turnHoursToMinutes(movies));

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
// Create a dictionary - create an object and assaign and create it's properties using object bracket notation

console.log("Iteration 8 ----------------");

function getAllSingleYears(moviesArray) {
    const years = moviesArray.slice().map(film => {
        return film.year;
    });
    let singleYears = years.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
    return singleYears;
};

function bestYearAvg(moviesArray) {
    if(moviesArray.length === 0){
        return null
    };

    const yearsArray = getAllSingleYears(moviesArray);

    let orderedYearsArray = yearsArray.sort(function compare(a, b) {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    })

    let bestYear = 0;
    let bestAvg = 0;

    orderedYearsArray.forEach((year) => {
        const moviesOfYear = moviesArray.slice().filter(film => {
            return film.year === year
        })

        const rateOfYear = moviesOfYear.map((film) => {
            return film.rate;
        });

        let totalRateYear = rateOfYear.reduce(function (acc, el) {
            if (el) {
                return acc + el;
            } else {
                return acc;
            }
        }, 0);
    
        const avgByYear = Math.round((totalRateYear / rateOfYear.length) * 100) / 100;

        if(avgByYear > bestAvg){
            bestYear = year;
            bestAvg = avgByYear;
        }        
    })

    return `The best year was ${bestYear} with an average rate of ${bestAvg}`;
}

console.log(bestYearAvg(movies));