/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = movie => {
    let orderedByYear = JSON.parse(JSON.stringify(movie));

    orderedByYear.sort((a, b) => {
        if ( a.year > b.year) {
            return 1;
        } else if (a.year < b.year) {
            return -1;
        } else {
            return a.title.localeCompare(b.title);
        }   
    });
    return orderedByYear;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
const howManyMovies = movie => {
    let stevenArr = JSON.parse(JSON.stringify(movie));

    if (stevenArr.length != 0) {
        let timeSteven = 0;
        timeSteven = stevenArr.filter(a => (a.director == "Steven Spielberg") && (a.genre.includes("Drama"))).length;
        return timeSteven;
    } else {
        return 0;
    }
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = movie => {
    let alphabeticArr = JSON.parse(JSON.stringify(movie));

    alphabeticArr.sort((a , b) => a.title.localeCompare(b.title));

    // alphabeticArr.map((item, index) => {
    //     if (alphabeticArr.length > 20) {

    //         return item.title;
    //     }
    // });

    return alphabeticArr.slice(0, 20).map(item => item.title);

}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = movie =>{
    if (movie.length == 0) {
        return 0;
    }
    let copyArr = JSON.parse(JSON.stringify(movie));

    let size = copyArr.length;

    let somatoria = copyArr.reduce((acc, item) => { 
        if ( item.rate == undefined) {
            return acc;
        } else {
            return acc + item.rate;
        }
    }, 0);
    return +(somatoria / size).toFixed(2);
} 

// Iteration 5: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = movie => {

    if (movie.filter(a => a.genre.includes("Drama")).length == 0) {
        return 0;
    }
    let copyArr = JSON.parse(JSON.stringify(movie));

    let dramaArr = copyArr.filter(a => a.genre.includes("Drama"));
    console.log(dramaArr);
    let dramaAvg = dramaArr.reduce((acc, item) => acc + item.rate); // dramaArr.length;  
    console.log(dramaAvg);
    return +(dramaAvg).toFixed(2);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
