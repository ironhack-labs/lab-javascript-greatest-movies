// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
const allDirectors = moviesArray.map ((movie)=>{
    return movie.director;
});
return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const keepingUpWithSteve = moviesArray.filter((dramaMovie) => {
        return (dramaMovie.director === 'Steven Spielberg' && dramaMovie.genre.includes ('Drama')) 
        } )
    return keepingUpWithSteve.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
    return 0;
    }

    const totalScores = moviesArray.reduce((sum, movieReview) => {
        if (typeof movieReview.score === 'number') {
            return sum + movieReview.score;
        } else {
        return sum;
        }
    }, 0);

    const averageScores = totalScores / moviesArray.length;
    return parseFloat (averageScores.toFixed(2));
}


// const totalMarks = wizards.reduce((sum, wizard) => sum + wizard.marks, 0);
// const averageMarks = totalMarks / wizards.length;
// console.log(`Average marks: ${averageMarks}`);




// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter (movie =>movie.genre.includes ('Drama'));
    if (dramaMovies.length === 0) {
        return 0;
    }

    
   const totalDramaScores = dramaMovies.reduce ((sumDrama, dramaReview) => {
    if (typeof dramaReview.score === 'number'){
        return sumDrama + dramaReview.score;
    }
    return sum;
   }, 0 );
   const averageDramaScores = totalDramaScores / dramaMovies.length;
   return parseFloat (averageDramaScores.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    
    const moviesSortedAsc = moviesArray.sort ((a , b) => {
        const aVal = a.year
        const bVal = b.year
    if (aVal > bVal ) {
        return 1;
    }
    else if (aVal < bVal ) {
        return -1;
    }
    else {
        return 0;
    }
})

const originalMovieArr = moviesSortedAsc.slice ();
const originalMovieSortedAsc = originalMovieArr.sort ((a,b) => {
if (a.title > b.title ) {
    return 1;
}
else if (a.title < b.title ) {
    return -1;
}
else {
    return 0;
}
})

return originalMovieSortedAsc; 
}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const copyArray = moviesArray.map (x => x);
    const copyArrayMovieTitles = copyArray.sort ((a, b) => {
    if (a.title > b.title ) {
        return 1;
    }
    else if (a.title < b.title ) {
        return -1;
    }
    else {
        return 0;
    }
    })
    const titlesArray20 = copyArrayMovieTitles.slice (0,20).map ((movie)=>{
        return movie.title;
    });
    return titlesArray20;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const newArray = moviesArray.map (() => {

    }
    const hours:
    const minutes:
    const totalMinutes = hours * 60 + minutes;
    )
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
