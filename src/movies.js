// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    let directors = moviesArray.map(element => {
        return element.director;
    });
    return directors;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    const manyMovies = moviesArray.filter(many => {

        return many.director === "Steven Spielberg" && many.genre.includes("Drama");
    });

    return manyMovies.length;


}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length === 0) return 0;
    const score1 = moviesArray.filter(num => {

        if (typeof num.score != "number") return num;
    });

    const average = moviesArray.reduce(function (accumulator, index) {
        return accumulator + index.score;

    }, 0);


    const total = average / moviesArray.length;
    //if (moviesArray.score === "") return average;
    return Math.round(total * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    //if (!moviesArray.genre.includes("Drama")) return 0;
    const dramaMovies = moviesArray.map(element => {
        return element;
    })
    /*const dramaMovies = moviesArray.filter(drama => {
    return drama.genre === "Drama";
    ***He intentado filtrar pero no he podido hacerlo de esta manera.
})*/


    const averageAllDrama = dramaMovies.reduce(function (accumulator1, index1) {

        return accumulator1 + index1.score;

    }, 0);
    if (dramaMovies.length === 0) return 0;

    let total1 = averageAllDrama / dramaMovies.length;
    return Math.round(total1 * 100) / 100;

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    let arrayByYear = [...moviesArray];
    arrayByYear.sort(function (a, b) { return a.year - b.year });


    return arrayByYear;
}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    let arrayTitle = [...moviesArray];
    arrayTitle.sort((a, b) => a.title.localeCompare(b.title));
    let arrayNewTitle = arrayTitle.map(title => title.title);
    if (arrayNewTitle > 20) return arrayNewTitle.slice(0, 19);

    let arrayTop = [...arrayNewTitle];
    arrayTop.sort(function (a, b) { return a.score - b.score });
    let arrayTopOrder = arrayTop.sort(function (a, b) { return a.score - b.score });

    return arrayTopOrder;




}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let arrayTrMinutes = [...moviesArray];


}
// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

}
