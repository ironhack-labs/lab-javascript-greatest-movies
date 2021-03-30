// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
    const allDirectors = movies.map(elm => elm.director)
    return allDirectors
}


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// const uniqueDirectors = getAllDirectors().filter(elm => {
//     const directorName = elem
//     console.log(directorName)


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {

    //array pelis Spielberg General

    const spielbergMovies = movies.filter(elm => elm.director.toLowerCase().includes('steven spielberg'))
    console.log(spielbergMovies) 

    //array generos pelis Spielberg
    const spielbergGenres = spielbergMovies.map(elm => elm.genre)
    console.log(spielbergGenres)

    //array drama

    const spielbergDrama = spielbergGenres.filter(elm => elm.includes('Drama'))
    console.log(spielbergDrama)
  
    if(spielbergDrama) {
        console.log(spielbergDrama.length)
        return spielbergDrama.length // 4
    }
    //si el array esta vacio
    if (movies.length === 0) {
        return 0
        }

}
 


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {

     const totalRate = movies.reduce((acc, elm) => {
        //  console.log(elm.rate)
        return acc + elm.rate
    }, 0)
    const averageRate = totalRate / movies.length

    console.log(averageRate)

    const averageRate2 = averageRate.toFixed(2)
    console.log(averageRate2)
    console.log(typeof averageRate2)

    const averageRateNumber = Number(averageRate2)
    console.log(typeof averageRateNumber)

    if (movies.length === 0) {
        return 0
    }
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].rate === ' ') {
            continue;
        } 
            return averageRateNumber
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    const dramaMoviesArray = movies.filter(elm => elm.genre.includes('Drama'))

    const dramaMoviesTotal = dramaMoviesArray.reduce((acc, elm) => {
        return acc + elm.rate
        },0 )
    const dramaMoviesAverage = dramaMoviesTotal / dramaMoviesArray.length
    
    const dramaMoviesAverage2 = dramaMoviesAverage.toFixed(2)
    console.log(dramaMoviesAverage2)
    console.log(typeof dramaMoviesAverage2)

    const dramaMoviesAverageNumber = Number(dramaMoviesAverage2)

    if(movies.length === 1) {
        return dramaMoviesAverageNumber
    }else if(dramaMoviesArray.length === 0) {
        return 0
    } else{
        return dramaMoviesAverageNumber
    }

    }
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {

    const moviesCopy = JSON.parse(JSON.stringify(movies))
    const orderedArray = moviesCopy.sort((elm1, elm2) => elm1.year - elm2.year || elm1.title - elm2.title)
    console.log(orderedArray)

       const dateArray =[]

        orderedArray.forEach(elm =>{
        const dateElement = elm.year
        dateArray.push({year: dateElement})
    })

    return dateArray

    // const titleArray =[]
    // orderedArray.forEach(elm => {
    //     const newObject = {
    //         title: elm.title,
    //         year: elm.year
    //     }
    //     titleArray.push(newObject)
    //     console.log(titleArray)
    //     return titleArray
    // })
    
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {

    const moviesCopy = JSON.parse(JSON.stringify(movies))
    console.log(moviesCopy)

    const alphabeticalArray = [...moviesCopy].sort()
    // console.log(alphabeticalArray)

    const titleArray = []

    alphabeticalArray.forEach(elm => {
    titleArray.push(elm.title)
       
    })
    // console.log(titleArray)

    if(titleArray.length > 20) {
       titleArray. forEach(elm => {
        const shortArray = titleArray.splice(21, titleArray.length - 1)
        return shortArray
       })
    }
    //    console.log(shortArray.length)
    // }else {
    //     return titleArray
    // }
    // console.log(titleArray)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average