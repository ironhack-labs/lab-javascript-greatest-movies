// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const movieDirectors = moviesArray.map((director)=>{
        return director.director;
    })
    let uniqueDirectors = [];
    movieDirectors.filter(director=>{
        if (!uniqueDirectors.includes(director)) {
            uniqueDirectors.push(director);
        }
    })
    return uniqueDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
        const dramaSpielberg = moviesArray.filter(movie => {
          return movie.director === "Steven Spielberg" && movie.genre.includes("Drama");
        });

        return dramaSpielberg.length;
      
      
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    
    const totalScore = moviesArray.reduce((sum,score)=>{
        if (!score.score) {
            return sum }
        else {
        return sum + score.score;}
    },0)

    let avgScore = totalScore / moviesArray.length

    return Math.round(avgScore *100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie =>{
        return movie.genre.includes("Drama");
    })

    if (dramaMovies.length === 0) {
        return 0
    }

    const dramaTotalScore = dramaMovies.reduce((sum,score)=>{
        if (!score.score) {
            return sum;
        } else {
            return sum + score.score
        }
    }, 0)

    let avgDramaScore = dramaTotalScore / dramaMovies.length

    return Math.round(avgDramaScore * 100) / 100
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesCopy = [...moviesArray];

    const moviesOrdered = moviesCopy.sort((a,b)=>{
        if (a.year !== b.year) {
            return a.year - b.year
        } else {
            return a.title.localeCompare(b.title);
        }
    })

    return moviesOrdered
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesCopy = [...moviesArray];

    moviesCopy.sort((a,b)=>{
        return a.title.localeCompare(b.title)
    });

    const firstTwenty = moviesCopy.slice(0,20).map(movie => movie.title);

    return firstTwenty;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
