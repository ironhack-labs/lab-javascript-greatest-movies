/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
//function ratesAverage(){
// for (i=0; i<=250; i++){
//     let allRates = movies[i].rate 
//     const average = allRates.reduce(function(sum, data){
//         return sum + data.rate;
//       }, 0);
// }
// let avRate = movies.rate
// return console.log(avRate)

function ratesAverage(movies){
const average = movies.reduce(function(sum, movies){
    
    return sum + Number(movies.rate)
    
   },0);

//    console.log(average/movies.length)
   
   return (average/movies.length)

   
}

//   return average/250
// }
 
// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){

    const result = movies.filter(each => each.genre.includes("Drama"));

    console.log(result)

    
        let averageDrama = result.reduce(function(sum, result){
            
            return sum + Number(result.rate)
            
           }, 0);

           
           
        
return Number((averageDrama/result.length).toFixed(2)) || 0

    // let dramaAverage = 0
    // let totalMovies = 0;
    // for (i=0; i<=250; i++){
    // if (movie.genre.includes("Drama")){
    //     dramaAverage += Number(movies.rate)
    //     totalMovies++
    // } }
    //    return parseFloat(dramaAverage/totalMovies)
    // const dramaMovies = movies.filter(function(movies){
    //     return movies.gere.includes("Drama")
    // });


    // return dramaMovies

}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration(moviesArr){
    return allMovies = moviesArr.sort((a,b) => a.duration - b.duration || a.title.localeCompare(b.title))
}
// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(moviesArr){
    const stevenFilter = moviesArr.filter(each => each.genre.includes("Drama") && each.director == "Steven Spielberg")
    return stevenFilter.length
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArr){
    return alphabetTitles = moviesArr.map(movies => movies.title).sort((a,b) => a.localeCompare(b)).splice(0, 20)
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArr){
    let finalArr = []
    let movieTime = moviesArr.map((movies) => movies.duration )
   movieTime.map((time) =>{
        if(time.includes("h")){
            let split = time.split(" ")
            let hours = (parseFloat(split[0]) * 60)
            let minutes = parseFloat(split[1]) || 0
            result = hours + minutes
            finalArr.push({duration: result})
        } else{
            finalArr.push({duration: parseFloat(time)})
        }
    })
    return finalArr
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
