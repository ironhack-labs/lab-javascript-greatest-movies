/*eslint no-restricted-globals: 'off'*/

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(arr) {
    let sum = 0;
    sum = arr.reduce((total, item) => total += item.rate, 0);
    return parseFloat((sum / arr.length).toFixed(2))
};

// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
    let sum = 0;
    let dramaMovie = [];
    dramaMovie = arr.filter(item => item.genre.includes("Drama"));
    if (dramaMovie.length === 0) {
        return 0
    }
    sum = dramaMovie.reduce((total, item) => {
        if (item.rate === '') {
            total += 0
        } else {
            total += parseFloat(item.rate)
        } //console.log(item.rate)
        return total
    }, 0); //console.log('sum',sum)
    return parseFloat((sum / dramaMovie.length).toFixed(2));
};

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration(arr) {
    let orderMovie = [];
    orderMovie = [...arr];
    orderMovie.sort((a, b) => {
        if (a.duration > b.duration) {
            return 1;
        } else if (a.duration < b.duration) {
            return -1;
        } else {
            let k = a.title;
            let j = b.title;
            let comp = 0;
            return (k).localeCompare(j);
        }
    })
    return orderMovie;
}


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(arr) {
    let dramaMovie = [];
    dramaMovie = arr.filter(item => item.genre.includes("Drama")).filter(item => item.director.includes("Steven Spielberg"));
    return dramaMovie.length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {

    let orderArr = [];
    let total = 0;
    arr.sort((a, b) => {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    });
    if (arr.length < 20) {
        total = arr.length;
    } else {
        total = 20;
    }
    for (let i = 0; i < total; i += 1) {
        orderArr.push(arr[i].title);
    }
    //console.log(orderArr)
    return orderArr;
}
console.log(orderAlphabetically(movies))

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
    let durationMin = [];
    let durMinutesS = [];
    let movieTime = 0;
    let newArr = [];
    newArr = arr.map(function (item) {
        let durationOriginal = item.duration;
        durationMin = durationOriginal.split('h ');
        movieTime = parseInt(durationMin[0]) * 60;
        durMinutesS = durationMin[1].split('min');
        movieTime += parseInt(durMinutesS[0]);
        item.duration = movieTime;
        return item;
    });
    return newArr;
}
console.log(turnHoursToMinutes(movies))

// BONUS Iteration: Best yearly rate average - Best yearly rate average