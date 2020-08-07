// Iteration 1: All directors? - Get the array of all directors.

/* const directores = movies.map(getAllDirectors)

function getAllDirectors(movies) {


    return movies.director;

}

console.log(directores) */

function getAllDirectors(movies) {
    let directores = movies.map((movie) => {
        return movie.director;
    })
    return directores;
}
/* const directores = movies.map((director, index) => getAllDirectors(director))

function getAllDirectors(movies, index) {


    return movies.director;

}

console.log(directores) */


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

/* const steven = movies.filter(director => movies.director === "Steven Spielberg")
/* movies.filter(movie => howManyMovies(movies)) */

/* function howManyMovies() {
    const drama= steven.filter(dram => steven.genre === "Drama")
    return  */




// function howManyMovies(movies, nombre) {
//     const total = 0;
//     movies.filter((director) => {
//         if (nombre === director && genre.included("drama")) {
//             total++;
//         }
//     })
//     return total;
// }

/* function howManyMovies(movies){
  let total=0;
  movies.filter((movie)=>{
    if(movie.director==="Steven Spielberg "&&movie.genre==="drama")
    total ++;
  })
  return total;
}



function HowManyMovies(arr){
    const steven = movies.filter(direct => direct.director == "Steven Spielberg");
  const dramGenre = steven.filter (dram => dram.genre.includes("Drama"))
    

    return dramGenre.length;
}


console.log(HowManyMovies(movies)) */


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

/* const sum= movies.reduce((acc, current, i)=>{
    return acc+current.rate
},0)

const averageRates = sum / movies.length

console.log(averageRates) */

// Iteration 4: Drama movies - Get the average of Drama Movies




// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    let steven = movies.filter((movie) => {
        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama");
    })
    return steven.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    if (movies.length == 0) {
        return 0;
    }
    let total = movies.reduce((acc, current, i) => {
        return acc + current.rate
    }, 0)
    const avg = total / movies.length
    let result = avg.toFixed(2);
    return Number(result);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    let dramas = movies.filter((movie) => {
        return movie.genre.includes("Drama");
    })

    let total = dramas.reduce((acc, current, i) => {
        return acc + current.rate
    }, 0)
    if (!dramas.genre.includes("Drama")) {
        return 0;
    }
    const avg = total / dramas.length
    return Number(avg.toFixed(2));
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
let pelis = [...movies];

function orderByYear(pelis) {
    let years = pelis.map((peli) => {
        return peli.year
    });
    return years.sort()
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    let titles = movies.map((movie) => {
        return movie.title;
    })

    let abc = titles.sort();
    for (let i = 0; i < abc.length && i < 20; i++) {
        console.log(abc[i]);
    }
    return abc;
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average