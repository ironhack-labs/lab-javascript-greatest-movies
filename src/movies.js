// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(array) {
    return array.map( (element) => {
        return element.director;
    })
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array) {
    return array.filter( (element) => {
        return (element.director === 'Steven Spielberg' &&
                element.genre.join('').includes('Drama'));
    }).length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
    return array.reduce((acc, element, index, array)=> {
        if (index === array.length - 1) {
            return Math.round((acc+ (element.rate ? element.rate: 0))/array.length*100)/100;
        }
        return acc + (element.rate ? element.rate: 0);
    }, 0);
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
    return ratesAverage(array.filter((element) => {
        return element.genre.join('').includes('Drama');
    }));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
    const myArray = [...array];
    return myArray.sort((a,b) => {
        if (a.year === b.year) {
            return (a.title < b.title) ? -1: 1;
        }  
        return a.year - b.year;
    } );
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
    return array
        .map((element) => {
            return element.title;
        })
        .sort((a,b) => {
            return (a < b) ? -1: 1;
        })
        .filter((element, index) => {
            return index < 20;
        });
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
