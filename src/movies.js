// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map((element) =>
        element.director
    );
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const genre = "Drama"
    const director = "Steven Spielberg";
    return moviesArray.filter((element) =>
        element.genre.includes(genre) && element.director == director
    ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray,) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const totalScore = moviesArray.reduce((sum, element) =>
        sum += (element.score || 0)
        , 0);
    return Number((totalScore / moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((movie) =>
        movie.genre.includes("Drama")
    );
    const result = dramaMovies.reduce((acc, movie) => acc + movie.score, 0);
    return Number((result / dramaMovies.length).toFixed(2)) || 0;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return moviesArray.splice(0).sort((a, b) =>
        a.year === b.year ? a.title.localeCompare(b.title) : a.year - b.year
    );
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return moviesArray.splice(0).sort((a, b) =>
        a.title.localeCompare(b.title)
    ).splice(0, 20).map((element) =>
        element.title
    );
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return [...moviesArray].map((element) => {
        const strings = element.duration.split(' ');
        const time = (strings[0] ? (parseInt(strings[0]) * 60) : 0) + (strings[1] ? parseInt(strings[1]) : 0);
        //console.log(element.duration + "\n" + time);
        return { ...element, duration: time };
    });
}
const arr = turnHoursToMinutes(movies);
console.log(arr);
arr.forEach((e) => console.log(e.duration));

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
        return null;
    }
    const sorted = [...moviesArray].sort((a, b) =>
        a.year - b.year
    );
    let currentYear;
    let currentAvg;
    let currentCount;
    const years = [];
    sorted.forEach((element) => {
        if (element.year != currentYear) {
            currentYear = element.year;
            currentAvg = 0;
            currentCount = 0;
        }
        currentAvg += element.score;
        currentCount++;
        years.push({ year: currentYear, avgScore: (currentAvg / currentCount) });
    });
    return years.sort((a, b) =>
        a.year - b.year
    ).shift().year;
}
