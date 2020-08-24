
    


// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies){
    const getAllDirectorss = movies.map(elm => elm.director)
    return getAllDirectorss
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies){

const howmany = movies.filter(elm => elm.director == "Steven Spielberg" && elm.genre.includes("Drama"))
if (howmany.length == 0)
    return 0
else
    return howmany.length    
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
    function ratesAverage(movies){
        let sum= 0
        const reduRates = movies.reduce((acc,elm) => acc + elm.rate, 0)
        
        sum = parseFloat(reduRates) / movies.length
        sum = Math.round(sum * 100) / 100
        
        if (movies.length == 0)
            return 0
        else
        return sum
    }
     
// Iteration 4: Drama movies - Get the average of Drama Movies
    function dramaMoviesRate(movies){
        let sum = 0
        const drama = movies.filter(elm => elm.genre.includes("Drama"))
        const dramaVerage = drama.reduce((ecc,elm) => ecc + elm.rate, 0)
        sum = parseFloat(dramaVerage) / drama.length
        sum = Math.round(sum * 100) / 100
       
        if(drama == 0)
            return 0
        else
        return sum
    }
    
    
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
    function orderByYear(movies){
        const newcopy = [...movies]
        let order = newcopy.sort(function (a, b) {
            var adate = a.year
            bdate = b.year
        cmp = a.year - b.year
        if (cmp === 0) {
            cmp = a.title.localeCompare(b.title);
        }
         return cmp;
        });
        console.log(order)
         
        return order
    }
   
    
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies){
    const newcopy = [...movies]
    const copy = newcopy.map(elm => elm.title)
     const final = copy.sort()
     
    return final.slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies){
    const newcopy = [...movies]
    const paco = newcopy.map(elm => elm.duration)
    return newcopy

}
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
