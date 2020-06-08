// Iteration 1: All directors? - Get the array of all directors.
    function getAllDirectors(movies){
        const AllDirectors = movies.map(elm => elm.director)
        return AllDirectors
    }
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
    function howManyMovies(movies){
        const spilOnlyDrama =  movies.filter(elm => elm.director === "Steven Spielberg" && elm.genre.includes("Drama"))
        
        return spilOnlyDrama.length
               
    }

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

      
function ratesAverage(movies){
    const totalMovies = movies.length        
        let sumAverage = movies.reduce((acc, elm) => {
            if (elm.rate){
              return acc + elm.rate
            }else{
                return acc
            }
            }, 0)    
            if (movies.length === 0){
                return 0
            }         

            //const sum2Ave8 = movies.reduce((acc, elm) => acc + (elm.rate, 0) === 8)
            //return sum2Ave8
            return Math.round((sumAverage / totalMovies)*100)/100
        }        
   
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){
   

    let moviesRate = movies.filter(elm => elm.genre.includes('Drama'))
    return ratesAverage(moviesRate)

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
    function orderByYear(movies){
        const byYear = [...movies].sort((a, b) => {
            if (a.year === b.year){
                return a.title.localeCompare(b.title)
            } else {
                return a.year - b.year
            }
        })
 
        return byYear
    }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies){
    const byTitle = [...movies].sort((a, b) => a.title.localeCompare(b.title))
    const titleOnly20 = byTitle.map(elm => elm.title).slice(0, 20)
    return titleOnly20
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes




// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
