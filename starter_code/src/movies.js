/* eslint no-restricted-globals: 'off' */


// let movies  YA RESUELTOS 1 - 2 

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear (array) {
    let order = []
     order = array.map(elem => elem).sort( (a, b) => {
      return (a.year > b.year) ? (1 ) : -1 }  ) 
    
    return order 
    } 




// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(array) {
    let howMany = array.filter (array => array.director === "Steven Spielberg")
   return howMany.length && (howMany.filter(array => array.genre.includes("Drama")  )   ).length

   // ya esta bien, regresa 7 en total, aplicas doble filtro y a eso lo conviertes en num con length
   // resulta 4, todo bien con jasmin
}
      
      howManyMovies(movies)

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
    let order, alphabet, top20;

    order = arr.map((arr) => arr.title)

    if (order.length < 20) {alphabet = order.slice()}
    else {alphabet = order.slice(0, 20)}

   top20 = alphabet.sort()
   return top20

}

orderAlphabetically(movies)

// ya me dio en el repl it, no se que falto


// Iteration 4: All rates average -
//Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    let ratesArr = (movies.map(   (movies) => movies.rate))
    let total = ratesArr.reduce( (acc, sum) => acc + sum, 0 )

    let avg = total / ratesArr.length
    
    if (ratesArr == 0) {return 0}
    else {       return ( Number(avg.toFixed(2) ) )                              }
         
    // me falto el ultimo punto
}

ratesAverage(movies)
// me da el average en dos decimales, no se porque 
//jasmin lo marca mal


// Iteration 5: Drama movies - Get the average of Drama Movies      REDUCE DIVIDIDO POR .LENGTH
function dramaMoviesRate(arr) {

let dramaM = arr.filter(   movie => (movie.genre == "Drama")   )

    if (!dramaM.length) {return dramaM.length}

    let sumOfDramas = dramaM.reduce(  
            (sum, elem) =>  sum + elem.rate, 0    ) / dramaM.length
            return Math.round(sumOfDramas * 100) / 100

        }




// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {
    
    let convertDuration = str => {
        let clean = str.replace("h", "").replace("min", "").split(" ")
        let minutes = clean.reduce( (acc, n, index, originalArray) => 
          { if (index === 0 && originalArray.length > 1   ) 
                {return acc += (parseInt(n )) * 60 }
            }, 0 )
            console.log(minutes)
    }
    
    let newMovies = movies.map( (m) =>  {
        let duracion = convertDuration(movies.duration);
        return {...m, "duration": duracion};  }   )


    

        
}



// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg() {}