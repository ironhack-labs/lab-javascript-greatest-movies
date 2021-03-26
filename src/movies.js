// let trials = [
//     {
//       "title": "The Shawshank Redemption",
//       "year": 1994,
//       "director": "Frank Darabont",
//       "duration": "2h 22min",
//       "genre": [
//         "Crime",
//         "Drama"
//       ],
//       "rate": 9.3
//     },
//     {
//       "title": "The Godfather",
//       "year": 1972,
//       "director": "Francis Ford Coppola",
//       "duration": "2h 55min",
//       "genre": [
//         "Crime",
//       ],
//       "rate": 9.2
//     },
//     {
//       "title": "The Godfather: Part II",
//       "year": 1974,
//       "director": "Francis Ford Coppola",
//       "duration": "3h",
//       "genre": [
//         "Crime",
//         "Drama"
//       ],
//       "rate": 9
//     },  {
//         "title": "The Godfather: Part dsII",
//         "year": 1974,
//         "director": "Francis Ford Coppola",
//         "duration": "3h",
//         "genre": [
//           "Crime",
//           "Drama"
//         ],
//         "rate": 4
//       },
//     {
//       "title": "The Dark Knight",
//       "year": 2008,
//       "director": "Christopher Nolan",
//       "duration": "2h 32min",
//       "genre": [
//         "Action",
//         "Crime",
//         "Drama",
//         "Thriller"
//       ],
//       "rate": 9
//     }]
    
    // Iteration 1: All directors? - Get the array of all directors.
 

// console.log(getAllDirectors(trials));
function getAllDirectors(movies) {
    const unfilteredDirs = movies.map(function(movie) {
        return movie.director;
    });
    const filteredDirs = unfilteredDirs.filter(function (director, index) {
        if (unfilteredDirs.indexOf(director, index + 1) === -1) return true;
        else return false;
    });
    return filteredDirs;
};

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    return movies.filter(function (movie) {
        if (movie.director === 'Steven Spielberg' && movie.genre.includes("Drama")) return true;
    }).length;
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    if (movies.length === 0) return 0;
    const sum = movies.reduce(function (total, movie) {
        movie.rate = movie.rate || 0;
        return total + movie.rate;    
    }, 0);

    const avg = Number((sum / movies.length).toFixed(2));
    return avg;
}

// console.log(ratesAverage([{ rate: 6 }, { rate: '' }, {}]));


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    const dramaMovies = movies.filter(function(movie) {
        if (movie.genre.includes("Drama")) return true;
    });
    return ratesAverage(dramaMovies);
}

// console.log(dramaMoviesRate(trials));


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    return [...movies].sort(function (a,b) {
        return a.year - b.year || a.title.localeCompare(b.title);
    })
}

// console.log(orderByYear([
//     { title: 'abc', year: 2002 },
//     { title: 'bac', year: 1982 },
//     { title: 'aab', year: 1982 }
//   ]))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies){
    return [...movies].sort( function (a, b) {
        return a.title.localeCompare(b.title);
    }).splice(0,20).map(function (movie) {
        return movie.title;
    })
}

// console.log(orderAlphabetically(trials));
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
    const newArray = movies.map(function (movie) {
        let hours = 0;
        let hoursMins = 0;
        if (movie.duration.includes('h') && movie.duration.includes('min')) {
            const timeSplit = movie.duration.split('h ')
            hours = Number(timeSplit[0]);
            console.log(`This contains hours: ${hours}`);
            hoursMins = Number(timeSplit[1].slice(0, -3));
            console.log(hoursMins);
        } else if (movie.duration.includes('h')) {
            const timeSplit = movie.duration.split('h')
            hours = Number(timeSplit[0]);
        } else {
            hoursMins = Number(movie.duration.slice(0, -3));
        }

        const mins = (hours * 60) + hoursMins;
        
        return {
            "title": movie.title,
            "year": movie.year,
            "director": movie.director,
            "duration": mins,
            "genre": movie.genre,
            "rate": movie.rate,
        }
    });  
    return newArray    

}


// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies) {
    if (movies.length === 0) return null;
    const years = movies.map(function (movie) {
        return movie.year;
    })
    const minYear = Math.min(...years);
    const maxYear = Math.max(...years);
    let best = {
        'year': '',
        'avg': 0,
    }
    for (let year = minYear; year <= maxYear; year++) {
        const thatYearsFilms = movies.filter(function (movie) {
             if (movie.year === year) return true;
        })
        let yearsAvg = ratesAverage(thatYearsFilms);
        console.log(yearsAvg)
        if (yearsAvg > best.avg) {
            best.year = year;
            best.avg = yearsAvg;
        }
    }
    return `The best year was ${best.year} with an average rate of ${best.avg}`;
    
}

