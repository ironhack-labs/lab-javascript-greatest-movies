/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)





const orderByYear = array => {

        const newArray = array.map(elm => elm)
        return newArray.sort((a, b) => a.year === b.year ? a.title.toLowerCase() - b.title.toLowerCase() : a.year - b.year)
    }
    //de hecho, he probado mi misma funcion en otro archivo y si me lo ordena bien :3




// const orderedByYear = array.map(elm => elm).sort((a, b) => a.year - b.year)

// return orderedByYear




//console.log(orderByYear(movies))


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct


const howManyMovies = array => array.filter(elm => elm.director === 'Steven Spielberg' && elm.genre.includes('Drama')).length





// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = array => {

    const onlyTitles = array.map(elm => {
        const title = elm.title
        return title
    })

    const justTwenty = onlyTitles.splice(0, 20)
    const orderedTwenty = justTwenty.sort((a, b) => a.toLowerCase() - b.toLowerCase())

    return orderedTwenty
        // me he bloqueado en los ultimos dos pasos porque no se que estoy haciendo mal, jasmine me dice que no estoy mostrando 
        // solo 20 elementos y yo veo que si, y el sort tampoco veo en que me he equivocado T_T
}



// Iteration 4: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = array => {

    const moviesWithRate = array.filter(elm => elm.rate)
    const average = moviesWithRate.reduce((acc, elm) => acc + elm.rate, 0) / array.length

    return array.length === 0 ? 0 : Number(average.toFixed(2))

}

// Iteration 5: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = array => {

    const dramaMovies = array.filter(elm => elm.genre.includes('Drama'))
    const dramaAvg = dramaMovies.reduce((acc, elm) => acc + elm.rate, 0) / dramaMovies.length

    return dramaMovies.length === 0 ? 0 : Number(dramaAvg.toFixed(2))

}


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes




const patt1 = /[0-9]/g;
const str = movies[0].duration
const separatedN = str.split(' ')
const hour = separatedN[0]
const minutes = separatedN[1]
const hourAlone = hour.match(patt1)
const hourInMinutes = Number(hourAlone[0]) * 60
const minutesAlone = minutes.match(patt1)
const minutesNumber = Number(minutesAlone.join(''))
const totalTime = minutesNumber + hourInMinutes + ' min'

console.log(totalTime) // tengo una duda, he intentado meter esto en la funcion que nos pide para despues 
    //iterar por cada elemento y que le haga esto, cambiad el movies[0].duration por elm.duration pero me da un error 
    // que me dice que no reconoce la funcion .match













// BONUS Iteration: Best yearly rate average - Best yearly rate average