/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {

    const byYearMovies = [...movies];


    byYearMovies.sort((a, b) => {



        if ((a.year - b.year) != 0) {

            return a.year - b.year

        } else {
            return a.title.localeCompare(b.title)
        }



    })


    return byYearMovies;


}





// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct


function howManyMovies(spielbergMovies) {


    const spielbergDrama = spielbergMovies.filter(elm => elm.genre.includes("Drama") && elm.director === "Steven Spielberg")


    return spielbergDrama.length;
}



// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(top20) {

    let topMovies = [...top20].sort((a, b) => {
        return a.title.localeCompare(b.title)

    })

    let topMoviesName = topMovies.map(elm => elm.title);

    return topMoviesName.slice(0, 20);

}


// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {


    const rates = arr.map(elm => elm.rate || 0);
    const ratesSum = rates.reduce((acc, elm) => acc + elm, 0)

    if (arr.length) {

        return parseFloat((ratesSum / arr.length).toFixed(2));

    } else return 0;
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
    //console.log(arr);
    const dramaFilms = arr.filter(elm => elm.genre.includes("Drama"));
    //console.log(dramaFilms);
    const ratesDrama = dramaFilms.reduce((acc, elm) => acc + elm.rate, 0);

    if (dramaFilms.length) {


        return parseFloat((ratesDrama / dramaFilms.length).toFixed(2));

    } else return 0;



}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr) {


    console.log(arr)

    let extract = [...arr];
    let toMinutes = extract.map(elm => {
        // console.log(elm.duration)
        // console.log(hours)
        // let hOut
        // hOut = elm.duration.replace("h", "*60+");
        // hOut = hOut.replace("min", "");
        // hOut = hOut.replace(" ", "");
        // console.log(hOut);
        // console.log(eval.hOut)


        if (elm.duration.includes("h" && "min")) {
            return elm.duration = parseInt(elm.duration.substr(0, 1)) * 60 + parseInt(elm.duration.substr(3, 5))

        } else if (elm.duration.includes("h")) {
            return elm.duration = parseInt(elm.duration.substr(0, 1)) * 60

        } else if (elm.duration.includes("min")) {
            return elm.duration = parseInt(elm.duration.substr(3, 5))


        }
        return toMinutes


    })


}


// BONUS Iteration: Best yearly rate average - Best yearly rate average