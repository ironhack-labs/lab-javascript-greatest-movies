
// Iteration 1: All directors? - Get the array of all directors.




const getAllDirectors = (arr) =>{
    const directorsArr = arr.map((movie)=>{
        return movie.director
    })
    return directorsArr
}



// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// const cleanArr = directorsArr.filter((director, index)=>{
//     return index === directorsArr.indexOf(director)
// })





// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


const howManyMovies = (array) => {
    const directorMoviesArr = array.filter((movie)=>{
        return movie.genre.includes("Drama") && movie.director === "Steven Spielberg"
    })
    return directorMoviesArr.length
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = (array) => {
    if(array.length===0){
        return 0.00
    } else {

        const ratesArr = array.map((movie)=>{
            return movie.rate || null
        })
        const ratesSum = ratesArr.reduce((counter, item)=>{
            return counter + item
        }, 0)

        return Math.round((ratesSum/(array.length))*100)/100
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = (array) => {

    dramaArr = array.filter((movie)=>{
        return movie.genre.includes("Drama") 
    })
    if (dramaArr.length===0){
        return 0
    } else {
        const dramaRatesArr = dramaArr.map((movie)=>{
        return movie.rate 
        })
        const dramaRatesSum = dramaRatesArr.reduce((counter, item)=>{
            return counter + item
        }, 0)

        return Math.round((dramaRatesSum/(dramaArr.length))*100)/100
    }
    

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = (array) => {

    const yearsArr = array.map((movie)=>{
        return movie.year
    });
    
    const orderedYears = yearsArr.sort((a, b)=> a - b)
  
    return yearsArr.map((item)=>{
      return { year: item }
    })
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (array) => {
    const titleArr = array.map((movie)=>{
        return movie.title
    })
    const orderedArr = titleArr.sort()
    const filteredArr = orderedArr.filter((movie, index)=>{
        return index<20
    })
    return filteredArr
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
