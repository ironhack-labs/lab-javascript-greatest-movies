// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(arr) {

    return arr.map(x => x.director)
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?


function removeDuplicates(arr) {
    const directorsArray = getAllDirectors(arr);
    return [...new Set(directorsArray)]
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?



function howManyMovies(arr) {
    const directorArr = arr.filter(x => x.director === "Steven Spielberg" && x.genre.includes('Drama'));
    return directorArr.length
}



// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
    if (arr.length === 0) {
        return 0;
    };
    const mapArr = arr.map(x => x.rate);
    const arrFilter = mapArr.filter(x => typeof x === 'number');
    const reducer = (total, value) => total + value;
    return Math.round(arrFilter.reduce(reducer) / arr.length * 100) / 100
}




// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {


    const dramaArr = arr.filter(x => x.genre.includes('Drama'));
    if (dramaArr.length === 0) {
        return 0;
    };
    const dramaMap = dramaArr.map(x => x.rate);
    const reducer = (total, value) => total + value;
    return Math.round(dramaMap.reduce(reducer) / dramaMap.length * 100) / 100

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)



function orderByYear(arr) {

    const arrCopy = [...arr];

    const sortedArr = arrCopy.sort(function (a, b) {
        if (a.year < b.year) {
            return -1;
        } else if (a.year > b.year) {
            return 1;
        } else if (a.year === b.year) {
            if (a.title < b.title) {
                return -1;
            } else if (a.title > b.title) {
                return 1;
            } else {
                return 0;
            }

        }
    })
    return sortedArr
}




// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
    const copyArr = [...arr];

    const sortedArr = copyArr.sort(function (a, b) {
        if (a.title < b.title) {
            return -1;
        } else if (a.title > b.title) {
            return 1;
        } else {
            return 0;
        }
    })

    const mapArr = sortedArr.map(x => x.title).slice(0, 20);

    return mapArr;
};


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr) {
    const arrCop = JSON.parse(JSON.stringify(arr));
    let h = 'h';
    let m = 'min';
    const reducer = (total, value) => total + value;

    for (let time of arrCop) {

        time.duration = time.duration.split(/[h+min]/);
        time.duration = time.duration.map(x => parseInt(x));
        time.duration = time.duration.filter(Boolean);
        time.duration.push(time.duration[0] * 60);
        time.duration.shift();
        time.duration = time.duration.reduce(reducer);

    }
    return arrCop
}


// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average


function bestYearAvg(arr) {



}
