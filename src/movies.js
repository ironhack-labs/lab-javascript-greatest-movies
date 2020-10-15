// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies){
    const allDirectors=movies.map(directors => directors.director)
return allDirectors
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(bestmovies){
 const theBestMovie =movies.filter(Steven => Steven.director === "Steven Spielberg" && Steven.genre.includes('Drama'))
    return theBestMovie.length;
    }

findSteven(movies)

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage (array){
    const average = array.reduce(((accumAct,valAct) => 
    accumAct+valAct.rate),0)
    return (average/array.length).toFixed(2);
    }

console.log(ratesAverage(movies))


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(dramaMovies){
    let theDramaMovies= dramaMovies.filter(drama =>  drama.genre=="Drama");
    return ratesAverage(theDramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(order){

    let orderedMovies = [...order.sort((a,b)=> b.year-a.year)];
    return orderedMovies;
}

orderByYear(movies)



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    let titlesOrdered = movies.map(function (titles){
    return titles.title }
    );

    let moviesSorted = titlesOrdered.sort();
    return moviesSorted.slice(0, 20);
    }
    console.log(orderAlphabetically(movies)); 


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
