/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
//let newMovies = movies.map(movie => {
//    let hours= parseInt(movie.duration[0] * 60 )
//    let minutesIdx = movie.duration.indexOf("min")
//    //let turnHoursToMinutes= hours+(movie.duration.substring(minutesIdx-2, minutesIdx-1))
//    
//    let minutes= ""
//    if (minutesIdx==-1){
//     minutes=0
//    }else if(newMovies.duration[minutesIdx-2] === " "){
//     minutes=newMovies.duration[minutesIdx-1]
//    }else{
//     minutes=newMovies.duration[minutesIdx-2] + newMovies.duration[minutesIdx-1]
//    }
//    const outputMins = {
//        ...movies,
//        duration= parseInt(minutes) + hours
//    
//    
//    
//    return outputMins
//    
//    })
//    
//    console.log(newMovies)



//
// Get the average of all rates with 2 decimals 
function ratesAverage(movies){
    const sumRates = movies.reduce((sum, elem) => {
        if(elem.rate==""){
            elem.rate=0
        }
        return sum + parseFloat(elem.rate)
    }, 0)
    
    return parseFloat((sumRates/movies.length).toFixed(2))
}
console.log(ratesAverage(movies))

// Get the average of Drama Movies

function dramaMoviesRate(movies){
    const dramaRate = movies.filter(movie => movie.genre.indexOf("Drama") !=-1) //si es TRUE se añade a dramaRate
    
    //if(dramaRate==[]){
    //    return undefined
   // }

    return ratesAverage(dramaRate)
	   
}
console.log(dramaMoviesRate(movies))


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG
function howManyMovies(movies){
    const stevenMovies = movies.filter(movie => movie.director.indexOf('Steven Spielberg')!=-1)
    return stevenMovies
	   
}
console.log(howManyMovies(movies))  //Tiene q devolver string


// Order by title and print the first 20 titles


function orderAlphabetically(movies){
    let alpha = movies.map(movie => movie.title)
    alpha= alpha.sort()
    if(alpha.length>20){
        return alpha.slice(0,20)
    }  
    if(alpha.length < 20)  {
        return alpha
    }
}

console.log(orderAlphabetically(movies))

// Best yearly rate average
