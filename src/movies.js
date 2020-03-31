/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

let moviesOrderedYear = []

function orderByYear (movies) {

    
    const realCopyMovies = [...movies]
    const yearGrowOrder = realCopyMovies.sort((a,b) => a.year-b.year)

    return yearGrowOrder

    
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

let director = []
let dramaMovies = []
function howManyMovies(movies) {

   
   if(movies.length) {    
       
        director = movies.filter(elm => { 

           if(elm.director.includes("Steven Spielberg")) {
               return true
        } else{
            return 0}
        })

        dramaMovies = movies.filter(elm => { 
            
            if(elm.genre.includes("Drama")) {
                return true
         } else{
             return 0}
        })

                 
    // const dramaMovies = movies.filter(elm=> {elm.genre.includes("Drama")}).reduce((acc, elm) => acc + elm, 0)     
       
     } else {

       return 0

     }

    const sumDirector =  director.reduce((acc, elm) => acc + elm, 0) 
    const sumdramaMovies = dramaMovies.reduce((acc, elm) => acc + elm, 0)


}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically (movies) {

    // const realCopyMovies = [...movies]
    // const titleAlpha = realCopyMovies.sort((a, b) => a.localeCompare(b))

    // return titleAlpha

    

    // array temporal contiene objetos con posición y valor de ordenamiento
    let mapped = movies.map(function(el, i) {
      return { index: i, title: el.toLowerCase() };
    })

    // ordenando el array mapeado que contiene los valores reducidos
    mapped.sort(function(a, b) {
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
      return 0;
    });

    // contenedor para el orden resultante
    let mapTitle = mapped.map(function(el){
      return movies[el.title];
    });

}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage (movies) {

    if(movies.length) {    
    
        const moviesSumRate = movies.reduce((acc, elm) => acc + elm.rate, 0)
        const moviesAvg = moviesSumRate / movies.length
        const roundAvg = moviesAvg.toFixed(2)
        const rateAvg = parseFloat(roundAvg)
    
        return rateAvg
        
      } else {

        return 0

      }

}


// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate (movies) {


    if(movies.filter(elm => elm.genre.includes("Drama")).length) {    

    
        const dramaMovies = movies.filter(elm => elm.genre.includes("Drama")).reduce((acc, elm) => acc + elm.rate, 0)
        const dramaMoviesAvg = dramaMovies / movies.filter(elm => elm.genre.includes("Drama")).length
        const drmaRoundAvg = dramaMoviesAvg.toFixed(2)
        const dramaRateAvg = parseFloat(drmaRoundAvg)
    
        return dramaRateAvg
        
      } else {

        return 0
      }




}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes


// turnHoursToMinutes (movies) {

    // const realCopyMovies = [...movies]

    // let horaMin = realCopyMovies.duration

    // let parts = horaMin.split(' ')

// // Calcular minutos (horas * 60 + minutos)
    // let total = parseInt(parts[0]) * 60 + parseInt(parts[1])



// }


// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg( ) {

}