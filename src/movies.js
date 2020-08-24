// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
    const directorsArr = movies.map(elm => elm.director)
    return directorsArr
}


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
    
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies){
   const dramasSteven = movies.filter(elm => elm.director === "Steven Spielberg" && elm.genre.includes("Drama"))
    return dramasSteven.length
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies){
    //si no hay movies 
    if(movies.length === 0){
        return 0
    }
        //const filterMoviesRate = movies.filter(elm => elm.rate >= 8)
    const ratesMovies = movies.reduce((acc, elm) => acc+ elm.rate, 0)
           // if(rate.value){
             //   return acc + elm.rate}
            //else {
              //  return acc
           // }    
            // no sé como seguir con esta condición    
          
        const ratesAverageMovies = ratesMovies / movies.length
        
        return Number.parseFloat((ratesAverageMovies).toFixed(2)) 
 }



// Iteration 4: Drama movies - Get the average of Drama Movies
    function dramaMoviesRate(movies){
    const dramaMovies = movies.filter(elm => elm.genre.includes("Drama")) 
    if (dramaMovies.length >0){
        const dramaRates = dramaMovies.reduce((acc, elm)=> acc+elm.rate, 0)
        const averageDramaMovies = dramaRates / dramaMovies.length
        return +averageDramaMovies.toFixed(2)
    }
    else {
        return 0
    }
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies){
    const yearsMovies = [...movies]
        
    const newArrOrder= yearsMovies.sort(function (a,b) {
        if (a.year > b.year) {
            return 1
        }
        if (a.year < b.year){
            return -1
        }
         if (a.year === b.year){
            if(a.title > b.title){
                return 1
            }
             if(a.title < b.title) {
                return -1
            } 
            if(a.title === b.title){
                return 0
            }
        }
        })
        
    return newArrOrder
    }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

    function orderAlphabetically(movies){

    const orderABC = [...movies]

    const titleOrder = orderABC.map(elm => elm.title)
      
    const newOrderABC = titleOrder.sort (function(a,b){
           if (a > b){
               return 1
           }
           if (a < b){
               return -1
           }
           else {
              return 0
         } 
       }) 
        return newOrderABC.slice(0,20)
    }


// condicionales dependiendo de la longuitud (no las incluyo ya que Yasmine da OK)
//     if(newOrderABC.length <= 20){
//            return newOrderABC
//        }
//    if (newOrderABC.length > 20){
//            return newOrderABC.splice(0,20)
//        }
//  
    
       
    
    
    


    
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
