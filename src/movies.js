// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

let getAllDirectors = arrayMovies => arrayMovies.map (element => element.director).filter((item,index,array) => array.indexOf(item) === index);


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

let howManyMovies = arrayMovies => arrayMovies.filter(item => item.genre.filter(element => element === "Drama").length === 1 && item.director === "Steven Spielberg").length;

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

let ratesAverage = arrayMovies => (Math.round(arrayMovies.reduce((acc,element) => acc + (element.rate || 0),0)/arrayMovies.length*100)/100 || 0);
// Iteration 4: Drama movies - Get the average of Drama Movies

let dramaMoviesRate = arrayMovies => ratesAverage(arrayMovies.filter(item => item.genre.includes("Drama")));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

let orderByYear = arrayMovies => arrayMovies.map(e => e).sort((a,b) => {
    if (a.year === b.year){
        return a.title > b.title ? 1 : -1; 
    };
    return a.year - b.year;
});

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

let orderAlphabetically = arrayMovies => {
    let newArray = arrayMovies.map(element => element.title).sort((a,b) => a>b ? 1 : -1);
    if (arrayMovies.length >= 20) {return newArray.slice(0,20)};
    return newArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
