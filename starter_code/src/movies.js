/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

let newArr = [...movies]
function turnHoursToMinutes(elm) {
    const newMov = elm.map(item => {   //Esta linea no es mia (Repasar)
        const duracion = item.duration
        if (duracion.includes('h')) {
            const arrayDuration = duracion.split(' ');
            if (arrayDuration.length == 1) {
                var minutes = parseInt(arrayDuration[0]) * 60;
            } else {
                var minutes = parseInt(arrayDuration[0]) * 60 + parseInt(arrayDuration[1]);
            };
        } else {
            var minutes = parseInt(duracion)
        };
        return Object.assign({}, item, { duration: minutes }); //Esta linea no es mia (Repasar)
    })
    return newMov;
}


// Get the average of all rates with 2 decimals 
const ratesAverage = movies => {
    const accRate = movies.reduce((acc, elm) => acc + elm.rate, 0)
    let avg = accRate / movies.length
    let round = Math.round(avg * 100) / 100
    return round
}

// Get the average of Drama Movies
const dramaMoviesRate = movies => {
    let dramaFilm = movies.filter(elm => elm.genre == "Drama")
    if (dramaFilm.length == 0) {
        return undefined
    } else return ratesAverage(dramaFilm)
}

// Order by time duration, in growing order
const orderByDuration = minutes => {
    let time = minutes.sort((a, b) => a - b).reverse()
    console.log(time)
    return time
}

// How many movies did STEVEN SPIELBERG
const howManyMovies = movies => {
    let steveFilm = movies.filter(elm => elm.director == 'Steven Spielberg')
    if (steveFilm.length == 0) {
        return 'Steven Spielberg directed 0 drama movies!'
    } else return steveFilm.join()
}

// Order by title and print the first 20 titles
// const orderAlphabetically = movies => {
//     let alp = movies.map(elm => elm.title)
//     let ord = alp.sort((a, b) => {
//         if (a.title > b.title) {
//             return 1;
//         } else if (a.title < b.title) {
//             return -1;
//         } else return 0;
//     });

//     return ord.splice(0, 20)

// }

const orderAlphabetically = movies => {
    // let alp = movies.map(elm => elm.title)
    let ord = movies.sort((a, b) => {
        if (a.title > b.title) {
            return 1;
        } else if (a.title < b.title) {
            return -1;
        } else return 0;
    });
    let alp = ord.map(movie => movie.title)
    return alp.splice(0, 20)

}

// Best yearly rate average
