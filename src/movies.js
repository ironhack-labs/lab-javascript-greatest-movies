// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arr) {

    var newArray = JSON.parse(JSON.stringify(arr));
    const mapped = newArray.map(function (movie) {
        return movie.director;
    });
    return mapped
}


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function removeDoublons(arr) {
    const noDuplicate = getAllDirectors(arr).filter(function (director, index) {
        return getAllDirectors(arr).indexOf(director) === index;
    });
    return noDuplicate;
}

//OTHER SOLUTION WITH .reduce()
/* function removeDoublons(arr){
    const noDuplicate = getAllDirectors(arr).reduce(function (unique,director){
        return unique.includes(director) ? unique :[...unique,director]}, []);
    return noDuplicate;
} */


console.log(removeDoublons(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
    let total = 0;
    const movieSteven = arr.filter(function (movie) {
        if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')) {
            return total += 1;
        }
    })
    return total;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
    if (arr.length === 0) {
        return 0;
    }
    const sum = arr.reduce(function (acc, movie) {
        if (!movie.rate) {
            return acc;
        }
        return acc + movie.rate;
    }, 0);
    let average = sum / (arr.length);
    return Number(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {

    const dramaMovies = arr.filter(function (movie) {
        if (movie.genre.includes('Drama')) {
            return true;
        } else {
            return false;
        }
    });

    return ratesAverage(dramaMovies);
}

console.log(dramaMoviesRate(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
    let newArr = JSON.parse(JSON.stringify(arr));
    const orderYear = newArr.sort(function (year1, year2) {
        if (year1.year === year2.year) {
            return year1.title.localeCompare(year2.title);
        }
        return year1.year - year2.year;
    });
    return orderYear;
}

console.log(orderByYear(movies));


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {

    let newArray = JSON.parse(JSON.stringify(arr));
    const mapped = newArray.map(function (movie) {
        return movie.title;
    });
    const orderAlpha = mapped.sort(function (a, b) {
        return a.localeCompare(b);
    })

    if (orderAlpha.length > 20) return orderAlpha.splice(0, 20);
    return orderAlpha;
}

console.log(orderAlphabetically(movies));



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr) {
    let newArray = JSON.parse(JSON.stringify(arr));
    hour = 0;
    minute = 0;
    const hoursToMinute = newArray.map(function (v) {
        if (v.duration.includes('h') && v.duration.includes('min')) {
            hour = parseInt(v.duration.slice(0, 1));
            minute = parseInt(v.duration.slice(2, -2));
            v.duration = hour * 60 + minute

        } else if (v.duration.includes('h')) {
            hour = parseInt(v.duration.slice(-2, 1));
            v.duration = hour * 60;
        } else {
            minute = parseInt(v.duration.slice(0, -2));
            v.duration = minute;
        }
        return v;
    });
    return hoursToMinute
}

console.log(turnHoursToMinutes(movies));


// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(arr) {
    if (arr.length === 0) return null; // return null if the initial array is empty
    newArr = JSON.parse(JSON.stringify(arr));

    //Create an array only with dates 
    const mapped = newArr.map(function (movie) {
        return movie.year;
    });
    //Create an array only with dates and no duplicates
    const noDuplicate = mapped.filter(function (year, index) {
        return mapped.indexOf(year) === index;
    });

    //Create an array only with dates, no duplicates and order by year
    const orderYear = noDuplicate.sort();

    //New array of arrays composed with the films of the same year
    const arrPerYear = newArr.reduce(function (acc, cur) {
        if (!(cur.year in acc)) {
            acc[cur.year] = [];
        }
        acc[cur.year].push(cur);
        return acc;
    }, []);
    console.log(arrPerYear);


    //Arrays of average of each year - Order By Year 
    let tab = [];
    const arrPearYearIteration = arrPerYear.map(function (subArray, i) {
        const sum = subArray.reduce(function (acc, movie) {
            if (!movie.rate) {
                return acc;
            }
            return acc + movie.rate;
        }, 0);
        let average = sum / (subArray.length);
        return tab.push(Number(average.toFixed(2)));
    });

    //Find the highest average
    let highestAverageArr = JSON.parse(JSON.stringify(tab)); //create a copy of tab to not alterate the original array
    let highestAverageArrNew = highestAverageArr.sort(); //Orber by value
    let newHighestAverageArr = JSON.parse(JSON.stringify(highestAverageArrNew)); //create a copy of the highestAverageArrNew to not alterate the original array
    const highestAverage = Number((newHighestAverageArr.sort()).splice(-1, 1)); //Take the last element of the array (the highest) and turn it into number
    const findIndexOfAverage = tab.indexOf(highestAverage); //find the first index of the highest average 

    //Find the best year (the oldest)
    const bestYear = orderYear[findIndexOfAverage];

    //Display
    return 'The best year was ' + bestYear + ' with an average rate of ' + highestAverage;
}

console.log(bestYearAvg(movies));