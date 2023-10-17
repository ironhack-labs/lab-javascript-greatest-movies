// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
 
    const directorsArr = moviesArray.map((movie) => movie.director);
  return directorsArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    
    const dramaSpielMovies = moviesArray.filter((movie)=>{
        return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');
    })

    return dramaSpielMovies.length
}
    


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if(moviesArray.length === 0){
        return 0.00
    }
    
    const totalScores = moviesArray.reduce((sum,movie)=>{
    
        return sum + (movie.score || 0);
    }, 0.00)

    
    let scoresAvg = totalScores/moviesArray.length;

    return Math.round(scoresAvg*100)/100;

   }


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const dramaMovies = moviesArray.filter((movie)=>{
        return movie.genre.includes('Drama');
    })

    if (dramaMovies.length === 0){
        return 0
    }

    const totalDramaScores = dramaMovies.reduce((sum,drama)=>{
    
        return sum + (drama.score);
    }, 0)

    let avgDrama = totalDramaScores/dramaMovies.length

    return scoresAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    let orderedArray = [... moviesArray]

    orderedArray.sort(function (a,b){

        if (a.year < b.year){
            return -1
        }
        else if (a.year > b.year){
            return 1
        }
        else if(a.year === b.year){
            if (a.title < b.title){
                return -1
            }

            else if (a.title > b.title){
                return 1
            }
        }
    });
    return orderedArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {

const sortArr = [ ... moviesArray];

sortArr.sort((a,b)=> a.title.localeCompare(b.title));

return sortArr.slice(0, 20).map(moviesArray => moviesArray.title);

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
