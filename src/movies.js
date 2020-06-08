// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors (arr) {
    return  arr.map(elem=>elem.director)
   }
   
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

const uniqueDirectors = arr => {
    let uniqueDirectorsArr = []
    arr.forEach(elem => {
        if (arr.indexOf(elem.director) === -1) {
            uniqueDirectorsArr.push(elem.director)
        }
    })
    return uniqueDirectorsArr
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


const howManyMovies = arr => arr.filter(elem => elem.director ==='Steven Spielberg' && elem.genre.includes("Drama")).length
   

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = arr => {
    if (arr.length ===0) { return 0}
    let arrReduced = arr.reduce((acc, elem) => {
        
        if (typeof(elem.rate) !== 'number') elem.rate = 0

         return acc + elem.rate; 
        },0)


    return parseFloat((arrReduced/arr.length).toFixed(2))
};

// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = arr => {
    const dramaMovies = arr.filter(elem => elem.genre.includes('Drama'))
    return ratesAverage(dramaMovies)
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = arr => {
   const moviesOrderedByYear =  [...arr]
   moviesOrderedByYear.sort((a, b) => {
        if (a.year === b.year){
            return a.title.localeCompare(b.title)
        } 
        return a.year - b.year

    })
    return moviesOrderedByYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = arr => {
    let orderedMovies = [...arr]
    orderedMovies.sort((a, b) => a.title.localeCompare(b.title))
    const first20 = orderedMovies.slice(0,20)
    let first20titles = []
    first20.forEach(elem => first20titles.push(elem.title))
    return first20titles
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes



const turnHoursToMinutes = arr => {

    return arr.map(elem => {
        let duration = elem.duration.split(' ')

        let totalDuration = 0
        duration.forEach(elem => {
            if (elem.includes('h')){
                totalDuration += parseInt(elem.replace('h', '')*60)

            }
            else if (elem.includes('min')){
                totalDuration += parseInt(elem.replace('min',''))

            }
        })

        return {
            ...elem,
            duration: totalDuration
        }
    })

}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

const bestYearAvg = arr => {
    if (arr.length === 0) return null
    let ordered = orderByYear(arr)
    let baseYear = ordered[0].year
    let groupedFilms = []
    let newGroup = []
    ordered.forEach(elem =>{
        if (elem.year === baseYear){
            newGroup.push(elem)
        } else {
            groupedFilms.push(newGroup)
            baseYear = elem.year
            newGroup = [elem]
        }
    })
    console.log(groupedFilms)

    let average = 0
    let index = 0

    groupedFilms.forEach((elem, ind) => {
        if (average<ratesAverage(elem)){
            average = ratesAverage(elem)
            index = ind
        }

    })

    return `The best year was ${groupedFilms[index][0].year} with an average rate of ${average}`
}

