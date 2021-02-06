// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

const getAllDirectors = arr => { 
    const directors = arr.map(movie => movie.director);
    return [...new Set(directors)]
};


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = arr => {
    const howMany = arr.filter(movie => {
        if (movie.director === "Steven Spielberg" && movie.genre.includes('Drama')) 
        return movie
    })
    return howMany.length
};

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = arr => {
    const filteredArr = arr.filter(obj => {
        if (typeof obj.rate === "number" ) return obj;
        if(typeof obj.rate !== "number"){
            obj.rate = 0;
            return obj
        }
    }) 
    
    const avg = filteredArr.reduce((total, element) => {
        return (total += element.rate / filteredArr.length);
    }, 0)
    if (!Number.isInteger(avg)) return Number(avg.toFixed(2));
    else return Number(avg)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = arr => {
    const filteredArr = arr.filter(movie => {
        if (movie.genre[0] === 'Drama') return movie;
    });

    const avg = filteredArr.reduce((total, element) => {
        return (total += element.rate / filteredArr.length)
    }, 0)
    if (!Number.isInteger(avg)) return Number(avg.toFixed(2));
    else return Number(avg)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = arr => {
    arr.sort((year1, year2) => {
       if(year1.year === year2.year) {
         return year1.title.localeCompare(year2.title)
       } else {
         return year1.year - year2.year
       }
    })
    const newArr = [...arr];
    return newArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (arr) => {
    return arr.map(({title}) => title).sort().splice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = (arr) => {
    const movies = JSON.parse(JSON.stringify(arr))
    for(let movie of movies) {
        let minutes = 0;
        let hours = 0;
        let duration = movie.duration;
        for(let i = 0; i < duration.length - 1; i ++) {
            if(duration[i + 1] === "h") {
                hours += Number(duration[i]) * 60;
            }
            if(duration[i + 1] === "m") {
                minutes += Number(duration[i - 1] + duration[i]);
            }
        }
        movie.duration = hours + minutes;
    }
    return movies;
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
const bestYearAvg = (arr) => {
    //Create a new array with one year and their rates
    let newArr = [];
    arr.forEach(({year, rate}) => {
        let found = newArr.find(elem => elem.year === year);

        if (!found){
            found = {year:year, rates:[]};
            newArr.push(found);
        }

        found.rates.push(rate);
    })
    
    //Add average rate on each year
    newArr.forEach((moviesByYear) => {
        let sum = 0;
        moviesByYear.rates.forEach((rate) => sum += rate)
        moviesByYear.avg = sum / moviesByYear.rates.length;
    })

    //Sort by average rate + year
    newArr.sort((movie1, movie2) => {
        if (movie1.avg<movie2.avg) return 1;
        else if (movie1.avg>movie2.avg) return -1;
        else return movie1.year - movie2.year;
    })
    return newArr.length ? `The best year was ${newArr[0].year} with an average rate of ${newArr[0].avg}`:null
}

