// Iteration 1: All directors? Get the array of all directors.

function getAllDirectors(arr){
    const director = arr.map(function(movie){
        return movie.director
    })
    return director;
}
// console.log(getAllDirectors(movies));

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr){
    if (arr.length === 0) return 0;
    const spielberg = arr.filter(function(movie){
        if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')) 
            return true;
    })
    return (spielberg.length);
}
// console.log(howManyMovies(movies))


// // Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies){
    if (movies.length === 0) return 0;
    let rateSum = movies.reduce(function(acc,movie){
        return (acc + movie.rate)  ;
    },0) / movies.length ;
    return Number(rateSum.toFixed(2));
}
// console.log(ratesAverage);


// if (response.bills!==null){
//     var totalSum = "";

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){
    const dramas = movies.filter(function(movie){
        if (movie.genre.includes('Drama')) 
            return true;
    }).map(function(movie){
        return movie.rate
    })
    let rateAvg = dramas.reduce(function(sum,number){
        return (Number(sum + number)) ;
    }) / dramas.length ;
    if (dramas.length === 0) return 0 ;
    return Number(rateAvg.toFixed(2))  ;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// function orderByYear (movie) {
//     const sortedYear = movie.sort(function(a,b){
//         return a.year-b.year;
//     }).map(function(movie){
//         return movie;
//     }).sort(function(alphaA,alphaB){
//         if (alphaA.title > alphaB.title) return -1 ;
//         if (alphaA.title < alphaB.title) return 1 ;
//     }).map(function(movie){
//         return movie;
//     });
//     return sortedYear;
// }

// console.log(orderByYear(movies));

function orderByYear (movie) {
    const sortedYear = movie.sort(function(a,b){
        if (a.year < b.year) return -1;
        if (a.year > b.year) return 1;
        if (a.title < b.title) return -1 ;
        if (a.title > b.title) return 1 ;
    }).map(function(movie){
        return movie;
    });
    return sortedYear;
}

// console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movie){
    const sortedAlpha20 = movie.sort(function(a,b){
        if (a.title < b.title) return -1 ;
        if (a.title > b.title) return 1 ; 
    }).map(function(movie){
        return movie.title;
    });
    return sortedAlpha20.slice(0,20);
}

// console.log(orderAlphabetically(movies));
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(){
    
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
