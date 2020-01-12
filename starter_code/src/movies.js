// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
orderByYear = (moviesArr) => {
    let sortedMovies = [...moviesArr].sort((a, b) => {
        if (a.year === b.year) return a.title < b.title ? -1 : 1
        return a.year - b.year;
    })
    return sortedMovies;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
howManyMovies = (moviesArr) => {
    let results = moviesArr.filter(movie => {
        return movie.director === "Steven Spielberg" && movie.genre.indexOf("Drama") !== -1
    })
    return results.length
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
// orderAlphabetically = arr => {
//     let sortedMovies = [...arr].sort((a, b) => {
//         return a.title < b.title ? -1 : 1
//     })

//     let result = sortedMovies.reduce((accum, current) => accum + current.title, [])
//     return result
// }
orderAlphabetically = arr => {
    let newArray = ([...arr])
        .sort((a, b) => a.title < b.title ? -1 : 1)
        .splice(0, 20)
        .reduce((accum, current) => [...accum, current.title], []);
    return newArray;
}


// Iteration 4: All rates average - Get the average of all rates with 2 decimals
ratesAverage = arr => {
    let average = arr.reduce((accum, current) => {
        let rate = current.rate === undefined ? 0 : current.rate
        return (accum + rate / arr.length)
    }, 0)
    return parseFloat(average.toFixed(2));
}

// Iteration 5: Drama movies - Get the average of Drama Movies

dramaMoviesRate = arr => {
    let justDrama = arr.filter(movie => movie.genre.indexOf("Drama") !== -1)
    return ratesAverage(justDrama);
}
dramaMoviesRate(movies);

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

turnHoursToMinutes = arr => {
    convertedMovies = [];
    convertedMovies.map(movie => {
        let totalTime = 0;
        let duration = movie.duration;
        // console.log(duration);
        let hours = parseFloat(duration.slice(0, (duration.indexOf("h")))) * 60
        let minutes = parseFloat(duration.slice((duration.indexOf(" ") + 1), duration.indexOf("min")))
        // console.log("Hours" + hours + "minutes" + minutes)
        movie.duration = totalTime + hours + minutes
        // console.log(movie.duration)
        // console.log(movie);
        convertedMovies.push(movie);
    })
    // console.log(convertedMovies)
    return convertedMovies;
}
Array.isArray(turnHoursToMinutes(movies));

// BONUS Iteration: Best yearly rate average - Best yearly rate average
