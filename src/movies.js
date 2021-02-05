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

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
