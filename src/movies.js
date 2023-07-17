// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    
    const finalDirectors = moviesArray.map(function (eachmoviesArray) {
        return eachmoviesArray.director
    })

    return finalDirectors

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

        let count = 0;

    if (moviesArray.length === 0){
        return 0
    }

    const multipleValues = moviesArray.filter(function (eachmoviesArray){
       
        if (eachmoviesArray.director === 'Steven Spielberg' && eachmoviesArray.genre.includes('Drama')){

            count++

        }
    
    })

    return count
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    let totalScore =0

    if (moviesArray.length === 0) {
        return 0
    }

    moviesArray.forEach(function (eachmoviesArray){

        if (eachmoviesArray.score === '' || Object.keys(eachmoviesArray).length === 0){
            totalScore += 0
        }else{
            totalScore = totalScore + eachmoviesArray.score
        }
    })

    totalScore =(totalScore).toFixed(2) 

    const avg = Number((totalScore / moviesArray.length).toFixed(2))

    return avg

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

let totalRating = 0
let countDrama = 0

let avgDrama

    moviesArray.forEach(function(eachmoviesArray){

        if (eachmoviesArray.genre.includes("Drama")){

            totalRating += eachmoviesArray.score;
            countDrama++   
        }

    })

    if (countDrama === 0){
        return 0
    }

    avgDrama = (totalRating / countDrama).toFixed(2)


return Number(avgDrama)

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))

    moviesArrayCopy.sort(function(a, b){

        if(a.title > b.title){
            
            return 1
        }else if (a.title < b.title){
            return -1
        }else{
            return 0
        }
    })

    moviesArrayCopy.sort(function (x, y) {

            return x.year - y.year
    })

    return moviesArrayCopy
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {


const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))
    

    const alltitle = moviesArrayCopy.map(function(eachmoviesArrayCopy) {
        return eachmoviesArrayCopy.title
    })
    
        if (alltitle.length>=20){
            return alltitle.sort().slice(0,20)
        }


    return alltitle.sort()
    }





// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {


    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))


    moviesArrayCopy.forEach((eachmoviesArrayCopy)=>{

            // CALCULAMOS EL INDICE DE LA HORAS

        indexHour = eachmoviesArrayCopy.duration.indexOf("h")
        indexMin = eachmoviesArrayCopy.duration.indexOf("min")

            // ASIGNAMOS VALOR A hour y min CALCULAR SU VALOR

        let hour = Number(eachmoviesArrayCopy.duration.slice(0, indexHour))
        let min = Number(eachmoviesArrayCopy.duration.slice(3, indexMin))

            timeMinutes = (hour * 60) + min

            // ASIGNAMOS EL NUEVO VALOR A LA NUEVA COPIA DEL ARRAY

            eachmoviesArrayCopy.duration = timeMinutes
        })

    return moviesArrayCopy


}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))
    const moviesArrayCopyTwo = JSON.parse(JSON.stringify(moviesArray))


    if (moviesArray.length === 0){
        return null
    }

    const bestYear =[]

    moviesArrayCopy.sort(function (x, y) {

        return x.year - y.year
    })

    //console.log(moviesArrayCopy)

    let year = 0
    let count = 0

    moviesArrayCopy.forEach(function(eachmoviesArrayCopy){

        year = eachmoviesArrayCopy.year

        bestYear.push(year)

        moviesArrayCopyTwo.forEach(function(eachmoviesArrayCopyTwo){

            count = eachmoviesArrayCopyTwo.score

            

            if (eachmoviesArrayCopy.year === eachmoviesArrayCopyTwo.year){
               

                count += eachmoviesArrayCopyTwo.score

            

            }
            bestYear.push(count)
        })

        count = 0
        
        
        })




}
