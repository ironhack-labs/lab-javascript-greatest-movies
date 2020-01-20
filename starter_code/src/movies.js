/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies){

    let yearsArr = [...movies];
    
    yearsArr.sort((a,b)=>{

        if(a.year===b.year){
            return a.title.localeCompare(b.title);
        }
        return a.year-b.year;
    });

return yearsArr;

}

 

function howManyMovies(movies){
    let dramaMovies;
    dramaMovies=movies.filter(movie=> movie.director==="Steven Spielberg" && movie.genre.includes("Drama"));
    return dramaMovies.length;
}

howManyMovies(movies);


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies){
    let alphabetArr=[...movies];
    alphabetArr.sort((a,b)=>{
        return a.title.localeCompare(b.title);
    })
    let twentyArr=alphabetArr.splice(0,20);
    let orderTwenty=twentyArr.map(movie=>movie.title);
        return orderTwenty;
}


// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// function ratesAverage(movies){
//     let totalRates=movies.reduce((sum,movies)=>{
//         return {
//     sum.rate += movies.rate;},0);

//     let averageRates=totalRates/movies.rate.length;

//     console.log(averageRates)
// }

// parseFloat(Math.round(averageRates * 100) / 100).toFixed(2);


// // Iteration 5: Drama movies - Get the average of Drama Movies

// function dramaMoviesRate(movies){
//     let dramaFilms = movies.filter(function(movie){
//         return movie.genre==="Drama";
//     });
//     console.log(dramaFilms.rate);
//     let sumRates=dramaFilm.reduce((sum,dramaFilms)=>{
//         return sum += dramaFilms.rate;},0);

//     let averageRatesDrama=sumRates/dramaFilms.length;
//         return averageRatesDrama;
// }

// if(averageRatesDrama>averageRates){
//         console.log(`People prefers drama film.`);
// else if(averageRatesDrama<averageRates){
//         console.log(`Drama film is not very popular.`);
// else{
//         console.log(`Drama film is a popular genre.`)
//         }
// }
    

// parseFloat(Math.round(averageRatesDrama * 100) / 100).toFixed(2);



// // Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies){

    stringArr=movies.duration.split([""],[2]);
}

// // BONUS Iteration: Best yearly rate average - Best yearly rate average