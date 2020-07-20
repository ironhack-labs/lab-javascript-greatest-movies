// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = arrayMovies => {
    return arrayMovies.map(item => item.director)
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
const uniqueDirectors = arrayMovies => {
    const listDirectors = getAllDirectors(arrayMovies)
    const result = listDirectors.filter((item, index) => (index === listDirectors.indexOf(item))) 
    return result
}

console.log(uniqueDirectors(movies))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = arrayMovies => {
    if (arrayMovies.length === 0) {
        return 0
    }

    const arraySteven = arrayMovies.filter(item => item.director === 'Steven Spielberg' && item.genre.indexOf('Drama') >= 0)
    return arraySteven.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = arrayMovies => {
    if (arrayMovies.length === 0) {
        return 0
    }

    const rateMovies = arrayMovies.map(item => {
        if (!item.rate) {
            return 0;
        }
        return item.rate
    });

    let numerator = rateMovies.reduce((accumulator, currentValue) => accumulator + currentValue)
    let avgMovies = Number((numerator / rateMovies.length).toFixed(2))
    return avgMovies;
}
// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = arrayMovies => {

    const newArray = arrayMovies.filter(item => item.genre.indexOf('Drama') >= 0);

    return ratesAverage(newArray)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = arrayMovies => {
    const orderedArray = arrayMovies.slice().sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title)
        }
        return a.year - b.year
    });

    return orderedArray
}
  
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = arrayMovies => {
    const titleArray = arrayMovies.map(item => item.title)
    const alphaOrder = titleArray.sort((a, b) => a.localeCompare(b))
    return alphaOrder.slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = arrayMovies => {
    const newArray = JSON.parse(JSON.stringify(arrayMovies));

    newArray.map(item => 
        item.duration = Number(item.duration.substring(0, item.duration.indexOf('h'))) * 60 + Number(item.duration.substring(item.duration.indexOf(' ')+1, item.duration.indexOf('min')))
    )

    return newArray
}
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
const bestYearAvg = arrayMovies => {
    if (arrayMovies.length === 0) {
        return null
    }

    const newArray = arrayMovies.map(item => {
        return {
            'year': item.year,
            'rate': item.rate
        }
    })

    const groupedArray = newArray.reduce((accumulator, currentValue) => {
        (accumulator[currentValue.year] = accumulator[currentValue.year] || [])        
        accumulator[currentValue.year].push(currentValue.rate)
        return accumulator
    }, {})

    for (let key in groupedArray) {
            let avg = groupedArray[key].reduce((accumulator, currentValue) => {
            let numerator = groupedArray[key].reduce((accumulator, currentValue) => accumulator + currentValue)
            let avgYear = Number((numerator / groupedArray[key].length).toFixed(2))
            return avgYear;
        })

        groupedArray[key] = avg
    }

    const result = Object.keys(groupedArray).map(i => {
        return {
            'year': i,
            'rate': groupedArray[i]
        }
    })

    const biggerRate = result.sort((a, b) => {
        return b.rate - a.rate
    })


    return `The best year was ${biggerRate[0].year} with an average rate of ${biggerRate[0].rate}`

}