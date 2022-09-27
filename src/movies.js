// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    
    return moviesArray.map( (elem) => {
        return elem.director
    })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }
    let steveArray = moviesArray.filter( (elem) => {
        return (elem.director === 'Steven Spielberg' && elem.genre.includes("Drama"))
    })
    return steveArray.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }


    let sum = moviesArray.reduce( (acc, elem) => {
        if (elem.score !== undefined) {
            return acc + Number(elem.score) / moviesArray.length
        } else {

            return acc
        }
    }, 0)
    //console.log(sum.toFixed(2), moviesArray.length, typeof(sum.toFixed(2), count))
    return Number(sum.toFixed(2))
} 


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaArray = moviesArray.filter( (elem) => {
        return elem.genre.includes("Drama")
    })
    let dramaAvg = scoresAverage(dramaArray)
    return dramaAvg
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let newArr = structuredClone(moviesArray)
    return newArr.sort( (elem2, elem1) => {
        if (elem2.year > elem1.year) {
            return 1
        } else if (elem2.year < elem1.year) {
            return -1
        } else {
            if (elem2.title > elem1.title) {
                return 1
            } else if (elem2.title < elem1.title) {
                return -1
            } else {
                return 0
            }
        }
    })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    let newArr = structuredClone(moviesArray)
    
    
    
    let onlyTitlesArray = newArr.map( (elem) => {
        return elem.title
    })
    //console.log("onlytitles", onlyTitlesArray) // ok
    
    let orderedTitles = onlyTitlesArray.sort( (elem2, elem1) => {
        if (elem2 > elem1) {
            return 1
        } else if ( elem2 < elem1) {
            return -1
        } else {
            return 0
        }
    })
    //console.log("ordered", orderedTitles)  //ok

    if (orderedTitles.length > 20) {
        let just20 = orderedTitles.slice(0, 20)
        //console.log("just20", just20)
        return just20
    } else {
        //console.log(orderedTitles)
        return orderedTitles
    }
    
}  

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    let newArr = structuredClone(moviesArray)
    
    newArr.map( (elem) => {

        let minArr = []
        let minNum = 0

        if (elem.duration.includes("h")){
            if (elem.duration.includes("min")){
                minArr = elem.duration.split("min")
                minArr = minArr[0].split("h ")
                minNum = minArr[0] * 60 + Number(minArr[1])
                //console.log("min1", minArr, "elem.duration", elem.duration, "minNum", minNum)
            } else {   
                minArr = elem.duration.split("h")
                minNum = minArr[0] * 60
                //console.log("min2", minArr, "elem.duration", elem.duration, "minNum", minNum)
            }
        } else {
            minArr = elem.duration.split("min")
            minNum = Number(minArr[0])
            //console.log("min3", minArr, "elem.duration", elem.duration, "minNum", minNum)
        }

        elem.duration = minNum
        return elem

    })

    return newArr
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

    let newArr = structuredClone(moviesArray)
    
    if (newArr.length === 0) {
        return null
    }
    
    if (newArr.length === 1) {
        //console.log("single:",  newArr[0]["score"], "newArr:", newArr)
        return `The best year was ${newArr[0]["year"]} with an average score of ${Number(newArr[0]["score"])}`
        
    }

    let yearScore = []

    for (let yearIti = 1900; yearIti < 2013; yearIti++) {
        let filteredYears = newArr.filter( (elem) => {
            return elem.year === yearIti
        })
        yearScore.push({year: yearIti, score: scoresAverage(filteredYears)})
    }
    //console.log("yearScore:", yearScore)

    let sortedYearScore = yearScore.sort( (elem2, elem1) => {
        if (elem2.score > elem1.score) {
            return -1
        } else if (elem2.score < elem1.score) {
            return 1
        } else {
            if (elem2.year > elem1.year) {
                return 1
            } else if (elem2.year < elem1.year) {
                return -1
            } else {
                return 0
            }
        }

    })

    //console.log("sortedYearScore", sortedYearScore)

    return `The best year was ${sortedYearScore[0]["year"]} with an average score of ${sortedYearScore[0]["score"]}`
}
