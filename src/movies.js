// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    // console.log ('El array de películas es' , moviesArray)
    const directorsList = moviesArray.map((eachMovie =>{
        return eachMovie.director
    }))
    // console.log ('El array de directores es' , directorsList)

    const cleanDirectorsList = directorsList.filter((eachDirector, index) => {
        return directorsList.indexOf(eachDirector) === index
    })
    // console.log ('El array de directores es filtrados es' , cleanDirectorsList)
    return cleanDirectorsList
    
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    // console.log ('El array de películas es' , moviesArray)
    const SpielbergMovies = moviesArray.filter(eachMovie =>{
        return  eachMovie.genre.includes('Drama') && eachMovie.director === 'Steven Spielberg'
    })
    // console.log ('El array de películas de drama de Spielberg es' , SpielbergMovies)
    return SpielbergMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length > 0){
        // console.log ('El array de películas es' , moviesArray)
        const scoreSum = moviesArray.reduce((acc, eachMovie) =>{
            if(isNaN(eachMovie.score)){
                return acc
            }
            return acc + eachMovie.score
        },0)

        // console.log ('El sumatorio de notas es' , scoreSum)

        let result = (scoreSum/moviesArray.length).toFixed(2)

        // console.log ('El sumatorio de notas es' , result)

        return parseFloat(result)

    } else{
        return 0
    }
    
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    // console.log ('El array de películas es' , moviesArray)

    const dramaList = moviesArray.filter(eachMovie => {
        return eachMovie.genre.includes('Drama')
    })

    // console.log ('El array de películas de drama ' , dramaList)

    // console.log ('La media de drama es', scoresAverage(dramaList) )
    
    return scoresAverage(dramaList)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const moviesArrayCloned = [...moviesArray]

    // console.log ('El array original es', moviesArray)

    moviesArrayCloned.sort((firstMovie, secondMovie) => {

        if (firstMovie.year !== secondMovie.year){

           return firstMovie.year - secondMovie.year

        } else {

           return firstMovie.title.localeCompare(secondMovie.title) 
            
        }
    }) 

    // console.log ('--->')

    // console.log ('El array duplicado y ordenado es', moviesArrayCloned)
    return moviesArrayCloned
    
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const movieTittles = moviesArray.map((eachMovie => eachMovie.title
    ))

    movieTittles.sort ((firstMovie, secondMovie) => firstMovie.localeCompare(secondMovie))

    if(movieTittles.length > 20){

        return movieTittles.slice(0,20)

    }

    console.log (movieTittles.slice(0,20))

    return movieTittles
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    const moviesFormatted = moviesArray.map((eachMovie => {
        // console.log('La duración es', eachMovie.duration.slice(0,4))

        // Separo los valores del valor de la duración por el espacio
        eachMovie.duration = eachMovie.duration.split(' ')
        // console.log('la duración es', '---->', eachMovie.duration[0], '+', eachMovie.duration[1])

        // Cada uno de los valores los convierto en minutos y en números
        eachMovie.duration[0] = eachMovie.duration[0].slice(0,-1)*60
        eachMovie.duration[1] = parseFloat(eachMovie.duration[1].slice(0,-3))
        console.log('la duración es', '---->', eachMovie.duration[0], '+', eachMovie.duration[1])

        // Sumo los valores de la duración
        eachMovie.duration = eachMovie.duration.reduce((acc, eachDuration) => {
             return acc + eachDuration
            },0)

        console.log('la duración sumada es', '---->', eachMovie.duration)

        return eachMovie
    }))

    


    console.log('------')

    console.log('El array de películas es', moviesArray.slice(0,4))

    console.log('El array de películas formateado es', moviesFormatted.slice (0,4))

    return moviesFormatted

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

    //Sacar un array con todos los años y su media y organizar de mejor media a peor y retornar la mejor posición



}
