// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
/*    
    title: 'The Shawshank Redemption',
    year: 1994,
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    score: 9.3
*/

function getAllDirectors(moviesArray) {
    let directorArr = [];
    moviesArray.map(element=> directorArr.push(element.director));
    return directorArr;
    
}

//console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let result=[];
    const stevenMovie = moviesArray.filter(movie=>
        movie.director === "Steven Spielberg")
        
        stevenMovie.forEach(drama => {
            if (drama.genre.includes("Drama")){
                result.push(drama);
            }
        })
        
    return result.length;
    
}
//console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0){
        return 0;
    }
    //normal code, but just apply for truthy value
    /*const totalScore = moviesArray.reduce(
        (acc, curr) => acc + curr.score, 0);*/

    const totalScore = moviesArray.reduce(function(acc, curr){
        //if there's no score in the object
        if (!curr.score) {
            return acc + 0;
        } else {
            return acc + curr.score;
        }
    }, 0);

    const result =  totalScore / moviesArray.length;
    return Number(result.toFixed(2));
}
//console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaArr = [];
    moviesArray.forEach(drama => {
        if (drama.genre.includes("Drama")){
            dramaArr.push(drama);
        }
    })
    const totalScore = dramaArr.reduce(
        (acc, curr) => acc + curr.score
        , 0);
    if (dramaArr.length === 0) {
        return 0;
    }
    const averageScore = Number((totalScore / dramaArr.length).toFixed(2));
    return averageScore;
}

console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
