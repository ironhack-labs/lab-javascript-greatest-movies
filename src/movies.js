// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arr) {
    const directorsCol = arr.map(elm => {
        console.log(elm.director)
        return elm.director
    })

    return directorsCol

}


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
    const spielbergFilms = arr.filter(elm => elm.director === "Steven Spielberg" && elm.genre.includes('Drama'))

    return spielbergFilms.length
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {

    if (arr.length == 0) return 0;


    const avgFilms = arr.reduce((acc, elm) => {


        if (typeof elm.rate == 'number') {
            return acc + elm.rate;;
        }

        return acc;

    }, 0

    )

    let avgRate = avgFilms / arr.length;

    return parseFloat(avgRate.toFixed(2));

}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
    const dramaMovies = arr.filter(elm => elm.genre.includes('Drama'))


    if (dramaMovies.length == 0) return 0

    const avgDramaRate = dramaMovies.reduce((acc, elm) => {
        return acc + elm.rate;
    }, 0)

    const avgRate = avgDramaRate / dramaMovies.length;

    return parseFloat(avgRate.toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {

    const orderYear = [...arr]
    console.log(orderYear)

    const ascYear = orderYear.sort((a, b) => {

        if (a.year == b.year) {
            console.log("HOLA", a.year == b.year)
            return a.title.toLowerCase().localeCompare(b.title.toLowerCase())
        }

        return a.year - b.year
    }
    );


    return ascYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {

    console.log(arr)

    const arrAlph = arr

    const finalArr = arrAlph.sort((a, b) => {
        return b.title.toLowerCase().localeCompare(a.title.toLowerCase())
    })




    return finalArr.map(elm => elm.title).reverse().slice(0, 20)



}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
