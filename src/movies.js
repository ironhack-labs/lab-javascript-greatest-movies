// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

const allDirectors = moviesArray.map(name =>{
        return name.director;
    })
    return allDirectors;
}

//  Bonus 1

function clearAllDirector(arr){
    let arrClearDirector = [];

    arr.forEach(function(value){
        if(!arrClearDirector.includes(value)){
            arrClearDirector.push(value);
        }
    })
    return arrClearDirector ;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    
    let counter = 0;

    const spielbergMovie = moviesArray.filter(function(movie){    
        if(movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')){
            counter++;
        }
    });
    return counter;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0){
        return 0;
    }
   
    const totalScore = moviesArray.reduce(function(sum, movie){
        if(!movie.score){
            movie.score = 0;
        }
        return sum + movie.score;
    }, 0);

    let avgScore = totalScore / moviesArray.length;
    return Math.round(avgScore * 100) / 100;
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if(moviesArray.length === 0){
        return 0;
    } else if(!moviesArray.some(movie => movie.genre.includes('Drama'))){
        return 0
    }

    const dramaMovie = moviesArray.filter(function(movie){
        return movie.genre.includes('Drama');
    }); 

    const scoreDramaMovie = dramaMovie.reduce(function(sum, movie){
        if(!movie.score){
            movie.score = 0;
        }
        return sum + movie.score;
    }, 0);

    let avgScoreDramaMovie = scoreDramaMovie / dramaMovie.length;
    return Math.round(avgScoreDramaMovie * 100) / 100 ;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const copyMovies = [...moviesArray]

    copyMovies.sort((a, b) => (a.year > b.year ? 1 : -1))

    return copyMovies
}
    
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const copyMovies = [...moviesArray];
    const twentyFirstMovie =[];
 
    copyMovies.sort((a, b) => (a.title > b.title ? 1 : -1))
    copyMovies.length = 20

    copyMovies.map((value) => {
        twentyFirstMovie.push(value.title);
    });
    return twentyFirstMovie
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
