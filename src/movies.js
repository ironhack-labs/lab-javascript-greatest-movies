// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    /* A 'Set' cannot contain duplicates, so would be a possible solution
    const directorSet = new Set();
    */
   let directors = [];
    moviesArray.map(function(info){
        if(directors.includes(info.director) === false) directors.push(info.director);
        // directorSet.add(info.director);
    })
    return directors;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let movieCount = 0;
    const spilbergMovies = moviesArray.filter(function(movie){
        if(movie.director.includes('Steven Spielberg') && movie.genre.includes('Drama')) movieCount++;
    })
    return movieCount;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0){
        return 0;
    }
    const scoreAvg = moviesArray.reduce(function(scoreSum, movie){
        if(!movie.score) {
            return scoreSum + 0;
        }
        return scoreSum + movie.score},0);

    let result = Number((scoreAvg/moviesArray.length).toFixed(2));

    return result
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let count = 0;
    
    const dramas = moviesArray.filter(function(movie){
       return movie.genre.includes('Drama')
    });
    count = dramas.length
    const sumScore = dramas.reduce(function(sum, drama){
        return sum + drama.score;
    }, 0)
    if(dramas.length === 0) return 0;
    
    let dramaAvg = Number((sumScore/count).toFixed(2));

    return dramaAvg
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    let mvArrCopy = [...moviesArray];
    let alphSort = mvArrCopy.sort(
        (m1, m2) => (m1.title < m2.title) ? -1 : (m1.title > m2.title) ? 1 : 0);
    let sorted = alphSort.sort(
        (m1, m2) => (m1.year < m2.year) ? -1 : (m1.year > m2.year) ? 1 : 0);

    return sorted
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    let mvArrCopy = [...moviesArray]
    let sorted = mvArrCopy.sort(
        (m1, m2) => (m1.title < m2.title) ? -1 : (m1.title > m2.title) ? 1 : 0);
    let titlesArray = sorted.map(function(movie){return movie.title})
    titlesArray.sort()
    if(titlesArray.length > 20) titlesArray = titlesArray.slice(0, 20)
    
    return titlesArray
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let sum = 0;
    let minutes = 0;
    let hoursConvertedList = moviesArray.map(function(movie){
        minutes = movie.duration.split('h')[0] * 60;
        sum = minutes + Number(movie.duration.split('min')[0].split(" ")[1])
        if(isNaN(sum)) return minutes
        return sum
    })
    const modifiedArr = moviesArray.map((movie, index) => {
        return {...movie, duration: hoursConvertedList[index]};
        })

    return modifiedArr

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

    if(moviesArray.length === 0) return null;
    let years = [];

    moviesArray.map(function(movie){
        if(years.includes(movie.year) === false) years.push(movie.year);
    });

    years.sort()
    let moviesGroup = [];
    let average;
    let avgList = [];
    let bestYear = []

    years.forEach(year => {

        moviesGroup = []

        moviesArray.map(function(movie){
            if(movie.year === year) return moviesGroup.push(movie)
        });
        average = moviesGroup.reduce((sum, movie) => 
            sum + movie.score, 0)/moviesGroup.length
        
            avgList.push(average)
        if(!bestYear.includes(year)) bestYear.push(year)
    });

    let highestAvg = 0;
    for(avg of avgList){if(avg > highestAvg) highestAvg = avg}
    return `The best year was ${bestYear[avgList.indexOf(highestAvg)]} with an average score of ${highestAvg}`;
}




