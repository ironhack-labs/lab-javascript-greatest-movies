// Iteration 1: All directors? - Get the array of all directors.

let getAllDirectors = movies.map(function(actores){
    return actores.director
})

console.log(getAllDirectors)

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

let getAllDirectors1 = getAllDirectors.filter((el, index) => getAllDirectors.indexOf(el) === index)

console.log(getAllDirectors1)

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

let howManyMovies = movies.filter(function(peliculas){
    return peliculas.director == "Steven Spielberg" && peliculas.genre.includes("Drama")
}).length;

console.log(howManyMovies)


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

let ratesAverage = (movies.reduce(function(sum, ratio){
    return sum + ratio.rate
},0))/movies.length

   ratesAverage1 = Math.round(ratesAverage* 100) /100;
console.log(ratesAverage1)

// Iteration 4: Drama movies - Get the average of Drama Movies


let dramasMovies = movies.filter(function(peliculas){
    return peliculas.genre.includes("Drama")
})

let dramaMoviesRate = (dramasMovies.reduce(function(sum, ratio){
    return sum + ratio.rate
},0))/dramasMovies.length

console.log(dramaMoviesRate.toFixed(2))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

let orderByYear = movies.sort(function(a,b){
    if (a.year > b.year){
        return 1
    }else if(a.year < b.year){
        return -1
    }else{
       return 0
    }
})

console.log(orderByYear)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles


function orderAlphabetically(movies) {
    let moviesTitle = movies.map(function (obj) {
        return obj.title;
      });

    let moviesTitleSort = moviesTitle.sort();
    
    return moviesTitleSort.slice(0, 20);

}

console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
