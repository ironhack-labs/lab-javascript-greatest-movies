// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directorsArray = [];
    directorsArray = moviesArray.map((movie)=>{
        return (movie.director);
    })

    return directorsArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let spielbergMovies = moviesArray.filter((movie)=> {
        return (movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));
    })
    return spielbergMovies.length;


}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    
    let sum = moviesArray.reduce((accumulator, movie)=> {
        if(movie.score) {
        return accumulator + movie.score;
        }
        else {
            return accumulator + 0;
        }
    }, 0);

     return Math.round((sum/moviesArray.length)*100)/100;
    /*const total = moviesArray.reduce((accumulator, movie)=> {
        if(movie.score){
            return accumulator + movie.score;
        }
        else{
            return accumulator + 0;
        }
    }, 0);
    let averageOfMovies = ((total/moviesArray.length)*100)/100;
    
    return Number(averageOfMovies);*/
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    // use the filter

    const dramaMovies = moviesArray.filter((mov)=>{
            return mov.genre.includes("Drama");
    }, 0);

    return scoresAverage(dramaMovies);

    /*let dramaCounter = 0;
    
    let sum = moviesArray.reduce((accumulator, movie)=> {
        if(movie.genre.includes("Drama")) {
        dramaCounter += 1;
        return accumulator + movie.score;
        }
        else {
            return accumulator + 0;
        }
    }, 0);

     return Math.round((sum/dramaCounter)*100)/100;*/


}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let orderArray = [...moviesArray];
    orderArray.sort(function(a,b) {
        if (a.year < b.year) {
            return -1;
        }
        else if (a.year > b.year){
            return 1;
        }
        else if (a.year === b.year){
            if (a.title < b.title) {
                return -1;
            }
            else if (a.title > b.title){
                return 1;
            }
            else if (a.title === b.title){
                return 0;
            }
        }
    })
    return orderArray;
}
    
    /*const orderedArray = [...moviesArray];

    orderedArray.sort(function(a,b) {
        if(a.year < b.year) {
            return -1;
        }
        else if (a.year > b.year) {
            return 1;
        }
        else if(a.year === b.year) {
            if(a.title < b-title) {
                return -1;
            }
            else if(a.title > b.title) {
                return 1;
            }
            else if (a.tile === b.title) {
                return 0;
            }
        }
    })
    return orderedArray;*/


    
    /*let newArray = moviesArray.
    }, 0);
    if(newArray.year(a) === moviesArray.year(b)) {
        newArray.title.sort();
    }

    return newArray;
}*/
    
    /*let newArray = moviesArray.filter();
    if (newArray.year.sort() === moviesArray.year.sort()) {
        newArray.title.sort();
        return newArray.year.sort();
    }
    else {
        newArray.year.sort();
    }
    return newArray;
}*/

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    let orderedTitle = [...moviesArray];
    orderedTitle = moviesArray.map((movie)=> {
        return(movie.title);
    })
    orderedTitle.sort();
    
    return orderedTitle.splice(0, 20);

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

}
