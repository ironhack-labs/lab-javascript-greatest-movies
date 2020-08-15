// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
    let newArray = movies.map(function(movie){
        return movie.director; 
    })
    return newArray;
}



// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function cleanArray (newArray) {
    uniqueDirectors = [];
    for (let el in newArray) {
        if (uniqueDirectors.indexOf(el) < 0) uniqueDirectors.push(el);
    }
    return uniqueDirectors;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies (movies) {
    
    const totalMovies = movies.filter(function (item) {
        const isSteven = item.director === 'Steven Spielberg';
        const isDrama = item.genre.indexOf('Drama') >= 0;
        return isSteven && isDrama;
    });
    return totalMovies.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage (movies){
    if (movies.length === 0) return 0;
    const ratedMovies = movies.filter(function(item){
        return item.rate > 0;
    })
    const sum = ratedMovies.reduce(function (total, movie){
        return total + movie.rate;
    }, 0)
    const avg = sum / movies.length;
    return +avg.toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    const dramaMovies = movies.filter(function(item){
        const isDrama = item.genre.indexOf('Drama') >= 0;
        return isDrama;
    })
    return ratesAverage (dramaMovies);
    
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    const newArray = movies.map(function(item){
        return item;
    })
    const oldestFirst = newArray.sort(function(a, b){
        if (a.year === b.year) {
            if (a.title > b.title) {
                return 1;
            } 
            if (a.title < b.title) {
                return -1;
            }
            return 0;
        }
        return a.year - b.year;  
    }); 
    return oldestFirst;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    const newArray = movies.map(function(item){
        return item.title;
    });
    const oldestFirst = newArray.sort();

return oldestFirst.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// function turnHoursToMinutes (movies) {
//     let totalTime = 0;
//     let indexH =0;
//     let indexM =0;
//     const intoMinutes = movies.map(function(item){
//             let timeValue = String(item.duration);
//             totalTime = +timeValue.slice(0)*60 +timeValue.slice(3,4);
//             if (timeValue.indexOf('min' < 0)) {
//                 totalTime = +timeValue.slice(0,1)*60;
//             }

//             if (timeValue.indexOf('h') >= 0) {
//                 if (timeValue.length === 8) {
//                     totalTime = +timeValue.slice(0,1)*60 +timeValue.slice(3,5);
//                 }
//                 else if (timeValue.length === 7) {
//                     totalTime = +timeValue.slice(0,1)*60 +timeValue.slice(3,4);
//                 }
//             }

//             if (timeValue.indexOf('h') < 0) {
//                 if (timeValue.length === 5) {
//                     totalTime = +timeValue.slice(0,2);
//                 }
//                 else if (timeValue.length === 4) {
//                     totalTime = +timeValue.charAt(0);
//                 }
//             }
//             item.duration = +totalTime;
//             return item;
//     }) 
//     return intoMinutes;
// }

function turnHoursToMinutes (movies) {
    let totalTime = 0;
    let newArray=[];
    const intoMinutes = movies.forEach(function(item){
            let timeValue = String(item.duration);
            switch (timeValue.length) {
                case (8):
                    totalTime = +timeValue.slice(0,1)*60 + Number(timeValue.slice(3,5));
                    break;
                case (7):
                    totalTime = +timeValue.slice(0,1)*60 + Number(timeValue.slice(3,4));
                    break;
                case (5):
                    totalTime = +timeValue.slice(0,2);
                    break;
                case (4):
                    totalTime = +timeValue.slice(0,1);
                    break;
                case (3):
                    totalTime = +timeValue.slice(0,2)*60;
                    break;
                case (2):
                    totalTime = +timeValue.slice(0,1)*60;
                    break;

            }
            newArray.push({
                ...item,
                duration: +totalTime
            })
    }) 
    return newArray;
}


// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
