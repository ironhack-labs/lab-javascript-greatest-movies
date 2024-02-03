// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    directorsArray = [];
    moviesArray.map((movie)=>{
        directorsArray.push(movie.director);
    })
    return directorsArray;
}

// Bonus - Iteration 1.1
function getAllDirectorsOnlyOnce(moviesArray) {
    directorsArray = [];
    moviesArray.forEach((movie)=>{
        if (directorsArray.includes(movie.director)) {
            return;
        } else {
            directorsArray.push(movie.director);
        }
    })
    directorsArray.sort();
    return directorsArray;
} 

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergMovies = moviesArray.filter((movie)=>
        movie.director === "Steven Spielberg")
    const spielbergDramas = spielbergMovies.filter((movie)=>
        movie.genre.includes("Drama"))
    return (spielbergDramas.length);
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const totalMovies = moviesArray.length;
    const totalScore = moviesArray.reduce((sum, movie) => {
        if (!movie.score) {
            return sum+0
        } else {
        return sum+movie.score;
        }
    },0);
    return Math.round((totalScore/totalMovies)*100)/100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let totalDramas = 0;
    const totalDramaScore = moviesArray.reduce((sum, movie) => {
        if (movie.genre.includes("Drama")) {
            totalDramas ++;
            return sum+movie.score;
        } else {
            return sum+0;
        }
    }, 0);
    if (totalDramas === 0) {return -0}
    return Math.round((totalDramaScore/totalDramas)*100)/100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const orderedArray = [...moviesArray];
    orderedArray.sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title)
        } else {
            return a.year-b.year;
        }
    })
    return orderedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const alphaArray = [];
    moviesArray.map((el)=>{
        alphaArray.push(el.title);
    });
    alphaArray.sort();
    return alphaArray.splice(0, 20);;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const timeArray = [...moviesArray];
    timeArray.forEach((el)=>{
        let movieMinutes = 0;
        movieMinutes += Number(el.duration[0])*60;

        if (el.duration.length > 2) {
            for (i = 0; i <= el.duration.length; i++) {
                if (el.duration[i] === 'm') {
                    movieMinutes += Number(el.duration[i-1]);
                    if (el.duration[i-2] != ' ') {
                        movieMinutes += Number((el.duration[i-2])*10);
                    }
                }
            }
        }
        el.duration = movieMinutes;
    })
    return timeArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
        return null;
    }
    const orderedArray = [...moviesArray];
    orderedArray.sort((a, b) => {
        return a.year - b.year;
    })
    const moviesByYear = [];
    let currentYear = 0;
    orderedArray.forEach((el)=>{
        if (el.year != currentYear) {
            currentYear = el.year;
            let arr = [];
            moviesByYear.push(arr);
            const indexOfArr = moviesByYear.indexOf(arr);
            moviesByYear[indexOfArr].push(el);
        } else {
            moviesByYear[moviesByYear.length-1].push(el);
        }
    })
    const yearlyAvgs = [];
    moviesByYear.forEach((arr)=>{
        let movieYear = arr[0].year;
        let yearMovies = 0;
        let yearScore = 0;
        arr.forEach((movie)=>{
            yearMovies ++;
            yearScore += movie.score;
        })
        const yearAvg = {
            year: movieYear,
            movies: yearMovies,
            totalScore: yearScore,
            avgScore: yearScore/yearMovies
        }
        yearlyAvgs.push(yearAvg);
    })
    let bestYear = 0;
    let bestAvg = 0;
    yearlyAvgs.forEach((year)=>{
        if (year.avgScore > bestAvg || (year.avgScore === bestAvg && year.year < bestYear)) {
            bestYear = year.year;
            bestAvg = year.avgScore;
        }
    })
    return `The best year was ${bestYear} with an average score of ${bestAvg}`
}