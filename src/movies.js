// Iteration 1: All directors? - Get the array of all directors.
let directors = []
function getAllDirectors(arr) {
    directors = arr.map(x => x.director)
    directors = filterDirectors(directors)
    return directors
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function filterDirectors(arr) {
    let filteredDirector = arr.filter((director, i, array) => array.indexOf(director) === i)
    return filteredDirector
    
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
let dramaFilms = 0

function howManyMovies(arr) {
    let films = arr.filter(x => isSteve = x.director === "Steven Spielberg" && x.genre.includes("Drama"))
    return films.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
    if (arr.length === 0) return 0
    else {
        let calc = arr.reduce((a, b) => {
            let isEmpty = b.rate === undefined ;
            if (!isEmpty) a = a + b.rate
            else a = a 
            return a
        }, 0)
        let average = calc / arr.length
        return +(average.toFixed(2))
    }
}


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
  let dramaAverage = 0;
    let totalDrama = 0
    let counter = 0;
    let dramaFilms = arr.filter(film => {
        let isDrama = film.genre.includes("Drama");
        if (isDrama) {
            totalDrama += film.rate
            counter++
        }
        return totalDrama
    })
    if (counter) dramaAverage = totalDrama / counter
    else dramaAverage = 0;
    return +(dramaAverage.toFixed(2))
    
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
    let sortYearFilms = arr.slice()
    sortYearFilms = sortYearFilms.sort((a, b) => {
        let sameYear = a.year === b.year
        if(sameYear) return a.title.localeCompare(b.localeCompare)
        else return a.year - b.year
    })
    return sortYearFilms
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
    let newArr = arr.slice();
    newArr = newArr.sort((a, b) => a.title.localeCompare(b.title));
    let arrLength = getArrLenght(newArr);
    let top20SortedArr = []
    for (i = 0; i < arrLength; i++){
        top20SortedArr.push(newArr[i].title)
    }
    return top20SortedArr
}

function getArrLenght(arr) {
    if (arr.length < 20) return arr.length
    else return 20
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr) {

    let timeArr = arr.slice();
    for (let i = 0; i < timeArr.length; i++){
        let timeHours = timeArr[i].duration;
        let onlyMin = false;
        if(timeHours.includes("min")) onlyMin = true
        timeHours = timeHours.split(" ");
        for(let i = 0; i < timeHours.length; i++){
            timeHours[i] = parseFloat(timeHours[i])
            if(isNaN(timeHours[i])) timeHours[i] = 0    
        }
        let minutes = 0
        if (timeHours.length > 1) minutes = timeHours[0] * 60 + timeHours[1]
        else if(onlyMin) minutes = timeHours[0]
        else  minutes = timeHours[0]*60
        timeArr[i].duration = minutes
    }
    return timeArr
}



// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(arr) {
    let years = [];

    arr.forEach(x => years.push(x.year));
    let filteredYears = years.filter( (year,i, arr) => arr.indexOf(year) === i)
    let avg = 0;
    let totalSum = 0;
    let previousAvg = 0;
    let bestYear = 0;
    let films = 0;

    if (filteredYears.length > 0) {

        filteredYears.forEach(year => {
            for (let i = 0; i < arr.length; i++) {
                let sameYear = year === arr[i].year;
                if (sameYear) {
                    totalSum += arr[i].rate
                    films++;
                }
            }
            avg = totalSum / films;
            if (avg > previousAvg) {
                previousAvg = avg
                bestYear = year
            } else if (avg === previousAvg) {
                if (bestYear > year) {
                    previousAvg = avg
                    bestYear = year
                }
            }
            totalSum = 0;
            avg = 0;
            films = 0;

        })
        return (`The best year was ${bestYear} with an average rate of ${previousAvg}`)
    } else return null
    
}
