// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(array){
    const allDirectors = array.map(movie => { 
    const container = movie.director
    
    return container})
    return allDirectors
    } 
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array){
    const container = array.filter( item =>
    item.director === "Steven Spielberg" &&
    item.genre.includes('Drama')
    )
    return container.length
    } 

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array){
    if((!array.length) || movies.rate === "") {
    return 0
    }
    const allRatings = array.map(movie => { 
    const container = movie.rate
    
    return container})
    
    let total = allRatings.reduce(function(sum, item){
    return sum + item
    })
    return Math.round((total/array.length)*100)/100
    } 
    
    console.log (ratesAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array){
    const drama = array.filter( item =>
    item.genre.includes('Drama')
    )
    if (!drama.length){
    return 0
    }
    
    const allRatings = drama.map(movie => { 
    const container = movie.rate
    
    return container})
    
    let total = allRatings.reduce(function(sum, item){
    return sum + item
    })
    return Math.round((total/drama.length)*100)/100
    } 



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array){
    let newArray = array.sort(function (a, b) {
    return a.year - b.year}); 
    return newArray
    } 


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array){
    const allTitles = array.map(movie => { 
    const container = movie.title
    return container})
    
    const sortedTitles = allTitles.sort()
    let top20 = sortedTitles.slice(0, 20)
    return top20
    } 




// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
