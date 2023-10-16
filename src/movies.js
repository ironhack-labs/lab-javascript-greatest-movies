// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArray) {
const directors = moviesArray.map(movie => movie.director);
return directors;
}


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

//primero hay que hacer vaina de filter
//segundo algo de length

function howManyMovies(moviesArray) {
    const dramaSpielbergMovies = moviesArray.filter((movie) => {
        return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');
    });
    return dramaSpielbergMovies.length;
    
};


const numberOfSpielbergDramaMovies = howManyMovies(movies);
console.log(numberOfSpielbergDramaMovies);




// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0.00;
    }
    const totalScores = moviesArray.reduce((sum, movie) => {
    return sum + (movie.score || 0);
}, 0.00)

let scoresAvg = totalScores / moviesArray.length;

return Math.round(scoresAvg*100) / 100;
}





// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie =>
        movie.genre.includes('Drama'));
        const totalScore = dramaMovies.reduce((sum, movie) =>
        sum +(movie.score || 0), 0);
        if(dramaMovies.length === 0) {
            return 0;
        }
        const averageScore = totalScore / dramaMovies.length;
        return Math.round(averageScore * 100) / 100;
}

const avgDramaScore = dramaMoviesScore(moviesArray);
console.log(avgDramaScore)



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let newSortedArray = [...moviesArray];
    newSortedArray.sort(function (a,b){
        if (a.year < b.year) {
            return -1
        }
        else if (a.year > b.year) {
            return 1
        }
        else if (a.year === b.year) {
            if (a.title < b.title) {
                return -1
            }
            else if (a.title > b.title) {
                return 1
            }; 
        }
    })


return newSortedArray;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sortedMovies = [...movies];
    sortedMovies.sort((a,b) =>
    a.title.localeCompare(b.title));

    const titles = sortedMovies.map(movie => movie.title);
    return titles.slice(0,20);

}

const sortedTitles = orderAlphabetically(moviesArray);
console.log(sortedTitles);























// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
