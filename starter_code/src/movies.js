/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(movies) {
    const totalRate = movies.reduce((sum, elem) => {
        return sum += Number(elem.rate);
    }, 0);

    const averageRate = Math.round(totalRate / movies.length * 100) / 100;
    return averageRate;
}


// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movie) {
    const dramaMovies = movie.filter((x) => {
        return x.genre.includes('Drama');
    })
    // console.log(ratesAverage(dramaMovies));
    let average = ratesAverage(dramaMovies);
    return isNaN(average) ? 0 : average;

    // or 
    // let average = Number(ratesAverage(dramaMovies).toFixed(2));
    // return average;
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration(movie) {
    const duration = movie.sort((a, b) => {
        //         return b - a;
        if (a.duration < b.duration) {
            return -1;
        }
        if (a.duration > b.duration) {
            return 1;
        }
        if (a.title < b.title) {
            return -1
        }
        if (a.title > b.title) {
            return 1
        }
        return 0;
    });
    return duration;
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(param) {
    const filteredSS = param.filter(elem => elem.director.includes('Steven Spielberg'));
    const dramaSS = filteredSS.filter(elem => elem.genre.includes('Drama'));
    return dramaSS.length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(param) {
    const movieTitle = param.map(anything => anything.title)

    const sortTitle = movieTitle.sort().splice(0, 20);
    return sortTitle;
}


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(time) {

    let finalArray = time.map((eachMovie) => {

        eachMovie = Object.assign({}, eachMovie);
        // console.log(eachMovie)
        const t = eachMovie.duration
        //console.log(t)

        if (t.includes('h') && t.includes('min')) {
            const h = Number(t.split('h')[0] * 60);
            const m = Number(t.split(' ')[1].split('min')[0]);
            const sum = h + m
            eachMovie.duration = sum
            //console.log(eachMovie)
        } else if (!t.includes('min')) {
            const h = Number(t.split('h')[0] * 60);
            eachMovie.duration = h
            //console.log(eachMovie)
        } else {
            const m1 = Number(t.split('min')[0]);
            eachMovie.duration = m1
            //console.log(eachMovie)
        }
        // console.log(eachMovie)
        return eachMovie
    })
    console.log(finalArray);

    return finalArray
}



// const h = Number(t.split('h ')[0] * 60);


// console.log(finalArray);

// let finalArray = time.map((eachMovie)=>{
//     // console.log(eachMovie)
//     t = eachMovie.duration
//     // console.log(t)
//     if (t.includes('h') && t.includes('min')){
//         const h = Number(t.split('h ')[0])*60;
//         const m = Number(t.split(' ')[1].split('min')[0]);
//         return x = h + m
//         Object.assign(eachMovie.duration, x)
//     }
//     console.log(t)
//     //return {duration: h + m }
//     return t
// } 
// // else if (!t.includes('min')) {
//     const h1 = Number(t.split('h')[0]);
//     eachMovie.duration = h1
//     //return  t
// }
// else {
//     const m1 = Number(t.split('min')[0]);
//     eachMovie.duration = m1
//     //return t
// }
// return eachMovie
// })

// console.log(finalArray)

// return finalArray


// if (t[0].includes('h') && t[0].includes('min')){
//     const h = Number(t[0].split('h ')[0])*60;
//     const m = Number(t[0].split(' ')[1].split('min')[0]);
//     return {duration: h + m }
// } 
// else if (!t[0].includes('min')) {
//     const h1 = Number(h1[0].split('h')[0]);
//     return  {duration: h1 }
// }
// else {
//     const m1 = Number(t[0].split('min')[0]);
//     return {duration: m1 }
// }

//return t

// BONUS Iteration: Best yearly rate average - Best yearly rate average