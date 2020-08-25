// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(array) {

    return array.map(elm => elm.director)

}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array) {

    const stevenDirectedMovies = array.filter(elm => elm.director === 'Steven Spielberg' && elm.genre.includes('Drama')).length

    if (!array.length) {

        return 0

    }

    return stevenDirectedMovies

}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

ratesAverage(movies)

function ratesAverage(array) {




    if (!array.length) {

        return 0

    }

    // // Descartamos los rate que no son números
    // let notVoidRated = eightRated.filter(elm => typeof (elm.rate) === typeof (0))

    // Almacenamos su media
    const average = array.reduce((acc, elm) => {

        let sumador = elm.rate

        if (typeof (sumador) !== typeof (0)) {

            sumador = 0

        }

        return acc + sumador

    }, 0) / array.length

    return parseFloat(average.toFixed(2))

}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {

    let dramaArray = array.filter(elm => elm.genre.includes('Drama'))

    if (!dramaArray.length) {

        return 0

    }

    //let singleElement = dramaArray[0]
    let average = dramaArray.reduce((acc, elm) => acc + elm.rate, 0) / dramaArray.length

    return parseFloat(average.toFixed(2))

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {

    const sortedArray = [...array]

    sortedArray.sort((a, b) => {

        // If years are equal
        if (a.year === b.year) {

            // We compare names
            const comparator = a.title.localeCompare(b.title)

            // We return depending on the titles
            switch (comparator) {

                // Means a goes first
                case -1:

                    return -1

                    break;

                // Means b goes firs
                case 1:

                    return 1
                    break;

                default:

                    return 0
                    break;
            }

        }

        return a.year - b.year

    })

    return sortedArray

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {

    // We create a copy
    const copyArray = [...array]

    // We sort it by name
    const orderedArray = copyArray.map(elm => elm.title)
    orderedArray.forEach(elm => elm.toLowerCase())
    orderedArray.sort()

    // We take the top 20
    const twentyFirst = orderedArray.slice(0, 20)

    return twentyFirst

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array) {

    // We make a copy of the original array
    const copyArray = [...array]

    // For each element of the string we want to change the duration string format
    copyArray.forEach(elm => {

        // We store the original duration string
        const wrongStr = elm.duration

        let hourFirstIndex = 0, hourLastIndex = 0, minFirstIndex = 0, minLastIndex = 0

        const rightHour = []

        if (wrongStr.includes('h')) {

            hourLastIndex = wrongStr.indexOf('h')

            rightHour.push(Number(wrongStr.slice(hourFirstIndex, hourLastIndex)) * 60)

        }

        if (wrongStr.includes('min')) {

            minFirstIndex = wrongStr.indexOf(' ') + 1
            minLastIndex = wrongStr.indexOf('m')

            rightHour.push(Number(wrongStr.slice(minFirstIndex, minLastIndex)))

        }

        // If it has only hours or it has only minutes
        if (rightHour.length === 2) {

            elm.duration = rightHour[0] + rightHour[1]

        } else {

            elm.duration = rightHour[0]

        }

    })


    copyArray.forEach(elm => {

        console.log(elm.duration)

        console.log(typeof (elm.duration))

    });

    return copyArray

}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
