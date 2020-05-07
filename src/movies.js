// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it
// unified (without duplicates)?
function getAllDirectors(array){
    return array.map( (obj) => {return obj.director})
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array){
    return array.filter( (obj) => {return obj.director === "Steven Spielberg" && obj.genre.indexOf('Drama') !== -1}).length
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array){
    if(array.length===0) return 0;
    return Number((array.reduce( (sum, obj) => sum + Number(isNaN(obj.rate)? 0 : obj.rate), 0)/array.length).toFixed(2))
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array){
    return ratesAverage(array.filter( obj => obj.genre.indexOf('Drama') !== -1))
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array){
    return array.sort( (word1, word2) => {
        if(word1.year < word2.year){
            return -1;
        }
        else if(word1.year > word2.year){
            return 1;
        }
        else if(word1.year === word2.year){
            if(word1.title < word2.title){
                return -1
            }
            else if(word1.title > word1.title){
                return 1
            }
            return 0;
        }
        return 0;
    }).slice()
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array){
    let newArr = [...array]
    newArr = newArr.sort( (obj1, obj2) => {
        if(obj1.title < obj2.title){
            return -1
        }
        else if(obj1.title > obj2.title){
            return 1
        }
        return 0
    }).slice();
    return newArr.map( (obj) => obj.title).slice(0,20)
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
