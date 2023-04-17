// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {

    const allDirectors = moviesArray.map((eachMovie) => {
        return eachMovie.director
    })
    return allDirectors
}




// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
    const drama = moviesArray.filter((eachMovie) => {
        return eachMovie.genre.includes('Drama');
    })
    const spielbergDrama = drama.filter((eachMovie) => {
        return eachMovie.director.includes('Steven Spielberg');
    })

    return spielbergDrama.length

}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {

    const sumScores = moviesArray.reduce((acc, eachMovie) => {
        if (!eachMovie.score) {
            eachMovie.score = 0;
        }
        return acc + eachMovie.score / moviesArray.length
    }, 0)
    //console.log(typeof sumScores.toFixed(2))
    return Number(sumScores.toFixed(2))


}


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray) {

    const dramaMovies = moviesArray.filter((eachMovie) => {

        return eachMovie.genre.includes('Drama');
    })

    const dramaScores = dramaMovies.reduce((acc, eachMovie) => {
        if (!eachMovie.score) {
            eachMovie.score = 0;
        }
        return acc + eachMovie.score / dramaMovies.length
    }, 0)
    return Number(dramaScores.toFixed(2))

}





// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {

    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray));

    const newSortedArray =
        moviesArrayCopy.sort((a, b) => {
            if (a.year < b.year) {
                return -1;
            } if (a.year > b.year) {
                return 1;

            } if (a.title < b.title) {
                return -1;

            } if (a.title > b.title) {
                return 1;
            }

        });

    return moviesArrayCopy
    // console.log(moviesArrayCopy)
}





// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {

    const orderAbcArrayCopy = JSON.parse(JSON.stringify(movies));

    const orderedAbc = orderAbcArrayCopy.sort((a, b) => {
        if (a.title < b.title) {
            return -1;
        } if (a.title > b.title) {
            return 1;
        }
    });

    const orderedAbcTweenty = [...eachMovie].map((orderedAbc) => {
        orderedAbc.title;
        if (orderedAbc.length < 20) {
            orderedAbc.slice(0, 20);
        } else {

        }
    })
    return abcTweentyfinal;

}

//const abcTweentyfinal = {
//  ...eachMovie,
//title: title



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
