/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(arr) {

    var newArray = arr.map((convert) => {
        let splitObj = convert.duration.split(" ");
        let minutes = 0;
        splitObj.forEach((m) => {
            if (m.includes("h")) {
                minutes += Number(m.replace("h", "")) * 60
            }
            if (m.includes("min")) {
                minutes += Number(m.replace("min", ""))
            }
        })
        return { ...convert, duration: minutes };
    })

    console.log(newArray)
    return newArray

};
// turnHoursToMinutes(movies);


// Get the average of all rates with 2 decimals 
let ratesAverage = (arr) => {
    let sum = 0;
    arr.forEach((avg) => {
        var target = parseFloat(avg.rate);
        sum += target
    })
    let totalAvg = Number((sum / arr.length).toFixed(2))
    console.log(totalAvg)
    return totalAvg

}



// Get the average of Drama Movies

let dramaMoviesRate = (arr) => {
    let drama = arr.filter(function (cat) {
        if (!cat.rate) { cat.rate = 0 }
        return cat.genre.includes("Drama");

    })
    let sum = drama.reduce((a, b) => {
        return a + parseFloat(b.rate)
    }, 0)
    let avg = Number((sum / drama.length).toFixed(2))
    console.log(avg)
    return avg
}





// Order by time duration, in growing order

let orderByDuration = (arr) => {

    arr.sort(function (a, b) {
        if (a.duration < b.duration) { return -1 };
        if (a.duration > b.duration) { return 1 };
        if (a.title < b.title) { return -1 };
        if (a.title > b.title) { return 1 }
        return 0
    })
    console.log(arr)
    return arr
};


// How many movies did STEVEN SPIELBERG
let howManyMovies = (arr) => {
    if (arr.length === 0) return undefined
    let arrayFilter = arr.filter(a =>
        (a.genre.includes('Drama')) && (a.director === 'Steven Spielberg'))
    return "Steven Spielberg directed " + arrayFilter.length + " drama movies!"
}



// Order by title and print the first 20 titles

let orderAlphabetically = (arr) => {

    return arr.map((order) => order.title).sort().slice(0, 20)

}
console.log(orderAlphabetically(movies));



// Best yearly rate average


//////Work in progress
function bestYearAvg(movies) {
    arr.sort((a, b) => {
        if (a.duration < b.year) { return -1 };
        if (a.duration > b.year) { return 1 };
        return 0
    })
    let bestAvg = 0;
    let year = 0,
        sum = 0,
        count = 0
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].year! year) {
            beatAvg = sum / count;
            count = 0;
            sum = 0;
            year = movies[i].year
        }
        sum += Number(movies[i].rate)
        count += 1
        Number(movies[i].rate)

    }
    return movies
}