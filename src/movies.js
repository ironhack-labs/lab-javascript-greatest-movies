// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arr) {
    return arr.map(ele => ele.director);
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
    return (arr.filter(ele => ele.director === "Steven Spielberg")
        .filter(ele => {
            for (let genre of ele.genre) {
                if (genre === 'Drama') return true;
            }
            return false;
        })
        .length
    )
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
    if (!arr.length) return 0;

    return (Math.round(arr.reduce((acc, cv) => {
        if (!cv.rate) return acc;

        return acc + cv.rate;
    }, 0) / arr.length * 100) / 100);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
    const filteredArr = arr.filter(ele => {
        for (let genre of ele.genre) {
            if (genre === 'Drama') return true;
        }
        return false;
    });
    if (!filteredArr.length) return 0;
    return (Math.round(filteredArr
        .reduce((acc, cv) => {
            if (!cv.rate) return acc;

            return acc + cv.rate;
        }, 0) / filteredArr.length * 100) / 100);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
    let newArr = JSON.parse(JSON.stringify(arr));

    return newArr.sort((a, b) => {
        if (a.year - b.year === 0) return a.title.localeCompare(b.title);
        return a.year - b.year;
    });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
    let newArr = JSON.parse(JSON.stringify(arr)).map(ele => ele.title);
    newArr.sort((a, b) => a.localeCompare(b));

    if (newArr.length < 20) return newArr;

    return newArr.filter((ele, index) => index < 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
    let newArr = JSON.parse(JSON.stringify(arr));

    newArr = newArr.map(element => {
        timeArr = element.duration.split('h ');
        if (timeArr[0].includes('min')) element.duration = Number(timeArr[0].split('min')[0]);
        else if (timeArr[0].includes('h')) element.duration = Number(timeArr[0].split('h')[0]) * 60;
        else element.duration = Number(timeArr[0]) * 60 + Number(timeArr[1].split('min')[0]);
        console.log(typeof element.duration)
        return element;
    });

    return newArr;
}
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(arr) {

}