// Iteration 1: All directors? - Get the array of all directors.


function getAllDirectors(movies) {                      
    let allMovies = movies.map(function(film){          
    // console.log('the movies are:', movies)  
    // console.log('the movies directors  are:', movie.director)
    return film.director                                
     
    })

    // console.log('the movies are:', allMovies)
    return allMovies                                   
}



//----------------------- 0 --------------------------------





// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


function howManyMovies (movies){                                                
let spielbergDramas = movies.filter(function(film){
if (film.director === 'Steven Spielberg' && film.genre.includes('Drama')) 

//console.log('las peliculas dramaticas de steven spielberg son:', film)
return film

})

//console.log('las peliculas dramaticas de steven spielberg son:', spielbergDramas.length)
return spielbergDramas.length

}




//----------------------- 0 --------------------------------




// Iteration 3: All rates average - Get the average of all rates with 2 decimals


function ratesAverage(movies){

 if (movies.length === 0) {
    return 0
 }

let sum = movies.rate.reduce((acc, elm) => {            
let totalSum = acc + elm

},0)

let average = totalSum / movies.length
//return average

return average

    
}


//----------------------- 0 --------------------------------



// Iteration 4: Drama movies - Get the average of Drama Movies



function dramaMoviesRate (movies) {


let numberOfDramaMovies = movies.filter (film => {
//console.log(film)
let movie = film.genre.includes('Drama')
return movie
}) 

let dramaMoviesRate = numberOfDramaMovies.map(film => {
// console.log('the rate is', film.rate)
return film.rate
})

let totalSum = dramaMoviesRate.reduce((acc, elm) => acc + elm)

let average = totalSum / dramaMoviesRate.length

//console.log(average)
return average
}




//----------------------- 0 --------------------------------





// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear (movies){

}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically (movies){
    
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
