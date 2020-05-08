// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
    let list = movies.map(function (elem) {
        return elem.director;
    })
    let directors = list.reduce(function (acc, i) {
        if (acc.indexOf(i) === -1) {
            acc.push(i);
        }
        return acc
    }, []) 
    return directors
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
// list.forEach(function(name)) {
// 	if (directors.indexOf(name) === -1) {
// 		// add name to directors
// 	}
// }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    let arrayOfMovies = movies.filter((elem) =>
        (elem.genre.includes("Drama") && elem.director === "Steven Spielberg")
    )
    return arrayOfMovies.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
    if (movies.length === 0) return 0;
    let averageNumber = movies.reduce(function (sum, elem) {
        return sum + (elem.rate || 0);
    }, 0) / movies.length;
    return Number(averageNumber.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    let dramaMovies = movies.filter(function (elem) {
        return elem.genre.includes("Drama") === true;
    });
    if (dramaMovies.length === 0) return 0;
    let dramaAverage = dramaMovies.reduce(function (sum, drama) {
        return sum + drama.rate;
    }, 0) / dramaMovies.length;
    return Number(dramaAverage.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    let list = movies.slice().sort(function (movie1, movie2) {
        if (movie1.year === movie2.year) {
            if (movie1.title < movie2.title) {
                return -1;
            } else if (movie1.title > movie2.title) {
                return 1;
            }
            return 0;
        }
        return movie1.year - movie2.year
    })
    return list
}

// function orderByYear(movies) {
//     let list = movies.slice().sort(function (movie1, movie2) {
//         if (movie1.year < movie2.year) {
//             return -1
//         } else if (movie1.year > movie2.year) {
//             return 1
//         }
//         if (movie1.title < movie2.title) {
//             return -1
//         } else if (movie1.title > movie2.title) {
//             return 1
//         }
//         return 0;
//         })
//     return list
// }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    let titles = movies.map(function (elem) {
        return elem.title
    })
    titles.sort(function (title1, title2) {
        if (title1 < title2) {
            return -1
        } else if (title1 > title2) {
            return 1
        }
        return 0;
    })
    return titles.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
    let newList = JSON.parse(JSON.stringify(movies))
    newList.map(function (elem) {
        let time = elem.duration.split(" ");
        if (elem.duration.includes('h') && elem.duration.includes('min')) {
            let hours = Number((time[0].split('h'))[0])
            let minutes = Number((time[1].split('min'))[0])
            let totalNumber = (hours * 60) + minutes
            elem.duration = totalNumber;
        } else if (elem.duration.includes('min')) {
            elem.duration = Number((time[0].split('min'))[0]);
        } else if (elem.duration.includes('h')) {
            elem.duration = Number((time[0].split('h'))[0]) * 60
        } 
        return elem
        
    })
    return newList
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(movies) {
    if (movies.length === 0) return null;
    let listOfYears = {};
    movies.map(function (elem) {
        let movieYear = elem.year;
        if (!listOfYears.hasOwnProperty(movieYear)) {
            listOfYears[movieYear] = [];
        }
        listOfYears[movieYear].push(elem.rate);
    })
    for (let year in listOfYears) {
        const currentYear = [...listOfYears[`${year}`]];
        listOfYears[year] = currentYear.reduce(function (acc, elem) {
            return acc + elem;
        }, 0) / currentYear.length;
    }
    let greatestAverage = 0;
    let greatestAverageYear = 0;
    for (let year in listOfYears) {
        if (listOfYears[year] > greatestAverage) {
            greatestAverage = listOfYears[year];
            greatestAverageYear = year;
        }
    }
    return `The best year was ${greatestAverageYear} with an average rate of ${greatestAverage}`
}