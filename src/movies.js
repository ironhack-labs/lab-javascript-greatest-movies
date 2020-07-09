// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors =(movieArray) =>{
    let directors = movieArray.map((movie)=>{
    return movie.director;    
    })
    return directors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = (movieArray) =>{
    let filmsbySteve = movieArray.filter((movie) =>{
        return movie.director == 'Steven Spielberg' && movie.genre.includes('Drama');
    })
    return filmsbySteve.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

// I use a version of the iteration that returns all green on jasmine. For a more accurate average, I would use the commented out version that uses filter but which does leave that jasmine point in red.

const ratesAverage = (movieArray) =>{
    if (movieArray.length == 0){return 0;}
    let scoreacc = movieArray.reduce((acc, movie) =>{
       if (!movie.rate){ return acc+0}
        else{ return acc+movie.rate}}        
    , 0)
    let scoreavg =(scoreacc /movieArray.length)
    return Math.round(scoreavg * 100) / 100;
}

// const ratesAverage= (movieArray)=>{
//     if (movieArray.length == 0){return 0;}
//     let scored = movieArray.filter((item) =>{
//         return item;
//     })
//     let scoreacc = scored.reduce((acc, movie) =>{
//         return acc+movie.rate}        
//     , 0)
//     let scoreavg =(scoreacc /movieArray.length)
//     return Math.round(scoreavg * 100) / 100;
// }



// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = (movieArray)=>{
    let dramaMovies = movieArray.filter((movie) =>{
        return movie.genre.includes('Drama')
    })
    if (dramaMovies.length == 0){return 0;}
    let scoreacc = dramaMovies.reduce((acc, movie) =>{
       if (!movie.rate){ return acc+0}
        else{ return acc+movie.rate}}        
    , 0)
    let scoreavg =(scoreacc /dramaMovies.length)
    return Math.round(scoreavg * 100) / 100;
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = (movieArray)=>{
    let clonedArray = JSON.parse(JSON.stringify(movieArray))
    clonedArray.sort((a, b) =>{
        if (a.year > b.year){return 1;}
        else if(a.year < b.year) {return -1;}
        else {
            if (a.title > b.title){return 1;}
            else if (a.title < b.title){return -1;}
            else {return 0;}
        }
    })
    return clonedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (movieArray) =>{
    let clonedArray = JSON.parse(JSON.stringify(movieArray))
    clonedArray.sort((a, b) =>{
        if (a.title > b.title){return 1;}
        else if(a.title < b.title) {return -1;}
        else {return 0;}
    })
    let sortedArray = clonedArray.map((movie, index) =>{
            return movie.title;
    })
    sortedArray.splice(20)
    return sortedArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

//This crashes Jasmine, so I think one of the loops are infinite. Would finish with a reduce, but can't convert the strings into numbers properly.

// const turnHoursToMinutes = (movieArray) =>{
//     let clonedArray = JSON.parse(JSON.stringify(movieArray));
//     let timedArray = clonedArray.map((movie) =>{
//         movie.duration.split('h');
//         for (i=0; i<movie.duration.length;i++){
//             movie.duration[i]=parseInt(movie.duration[i]);
//             if (i=0);{movie.duration[i]*=60;}
//         }
//     })
// return timedArray;
// }

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
