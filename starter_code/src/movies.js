/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
    let newArray = JSON.parse(JSON.stringify(array));
    return newArray.sort(function (a, b) {
        if (a.year < b.year) {
            return -1;
        }
        if (a.year > b.year) {
            return 1;
        }
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        }
    });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(array) {
    let count = 0;
    let filmsSteven = array.filter(function (movie) {
        return movie.director === "Steven Spielberg";
    });

    let filmsDrama = filmsSteven.filter(function (movie) {
        return movie.genre.indexOf("Drama") !== -1;
    });
    if (filmsDrama.length === 0) {
        count = 0;
    } else {
        for (let i = 0; i < filmsDrama.length; i++) {
            count = count + 1;
        }
    }
    return count;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
    let newArray = JSON.parse(JSON.stringify(array));
    let secondArray = [];
    newArray.sort(function (a, b) {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        if (a.title === b.title) {
            return 0;
        }
    });
    if (newArray.length < 20) {
        for (let i = 0; i < newArray.length; i++) {
            secondArray.push(newArray[i].title);
        }
    } else {
        for (let i = 0; i < 20; i++) {
            secondArray.push(newArray[i].title);
        }
    }
    return Object.values(secondArray);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
    let newArray = JSON.parse(JSON.stringify(array));
    let media = 0;
    let total = 0;
    if (newArray.length === 0) {
        return media = 0;
    }
    total = newArray.reduce((accumulator, currentValue) => {
        if (!!currentValue.rate) {
            return accumulator + currentValue["rate"];
        }
        return accumulator;
    }, 0);
    media = (total / newArray.length);
    return +media.toFixed(2);
}

//Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
    let newArray = JSON.parse(JSON.stringify(array));
    let count = 0;
    let total = newArray.reduce((accumulator, currentValue) => {
        if (currentValue.genre.includes("Drama") === true) {
            return accumulator + currentValue.rate;
        }
        else {
            return accumulator;
        }
    }, 0);
    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i].genre.includes("Drama") === true) {
            count = count + 1;
        }
    }
    if (count === 0) {
        return media = 0;
    } else {
        media = total / count;
        return +media.toFixed(2);
    }
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array) {
    let newArray = JSON.parse(JSON.stringify(array));
    let durationMin;
    let durationHour;
    let firstChange;
    let secondChange;
    for (let i = 0; i < newArray.length; i++) {
        console.log(newArray[i].duration.split(/h|min| /));
        return firstChange = newArray[i].duration.split(/h|min| /);
        console.log("legal");
    }
    for (let i = 0; i < newArray.length; i++) {
        for (j = 0; j < firstChange.length; j++) {
            console.log(parseInt(firstChange[0]));
            let durationMin = (parseInt(firstChange[0]) * 60 + (parseInt(firstChange[2])));
            console.log(durationMin);
        }
    }
}


