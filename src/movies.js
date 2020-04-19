// Iteration 1: All directors? - Get the array of all directors.
//We need to get the array of all directors. Since this is a warm up, we will give you a hint: you have to _map_ through the array of movies and get all the directors into one array as a final result. Go ahead and create a function named `getAllDirectors()` that receives an array of movies as an argument and returns a new (_mapped_ array).

const getAllDirectors = (arrayOfMovies) => 
arrayOfMovies.map((directors) => directors['director']);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = (spielbergFilms) =>

    spielbergFilms.filter((dramaFilm) =>

    dramaFilm.director === 'Steven Spielberg' && dramaFilm.genre.includes('Drama')).length; //returns a number if conditions are matched and falsy value if not.


// Iteration 3: All rates average - Get the average of all rates with 2 decimals
/*


// Iteration 4: Drama movies - Get the average of Drama Movies
/* Drama is the genre that repeats the most on our `array`. Apparently, people love drama! :eyes:

Create a `dramaMoviesRate()` function that receives an array as a parameter to get the average rate of all drama movies! Let's see if it is better than the general average.
 */

function dramaMoviesRate(rates) {
    const dramaFilms = rates.filter((film) => film.genre.includes('Drama'));
       if (dramaFilms > 0) {
           const sumDramaFilms = dramaFilms.reduce((accumulator, dramaFilms) => { accumulator += dramaFilms.rate;
           return accumulator;
        }, 0);
    
        const average = sumDramaFilms / dramaFilms.length;
        return average.toFixed(2);
       };

// Iteration 5: Ordering by year - Order by year, ascending (in growing order) sort

function orderByYear(array) {
const newSortedArray = [...array];
newSortedArray.sort(function (a, b) {
if (a.year > b.year) {
    return 1;
} else {
    return -1;
}
});

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderByLetter(order) {
    const AlphabeticOrder = order.tittle.toLowerCase().replace(' ', '').replace(',', '');
    const result = AlphabeticOrder.sort((a, b) => (a.tittle > b.tittle) ? 1: -1);
    return result;
};


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average