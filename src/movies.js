// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(arr){   
    return arr.map((film) => {
        return film.director;
    })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr){
    const spielbergMovies = arr.filter((film) => {
        return film.director === 'Steven Spielberg' && film.genre.includes('Drama');
    })
    return spielbergMovies.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr){
    if (arr.length == 0){  // check for empty arrays
        return 0;
    } else {
        const ratedFilms = arr.filter((film) => { // filter out films without rating
            return film.rate > 0;
        })
        const totalScores = ratedFilms.reduce((total, movie) => {
            return total + movie.rate;
        }, 0)
        return parseFloat((totalScores / arr.length).toFixed(2))
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr){
    if (arr.length == 0){  // check for empty arrays
        return 0;
    } else {
        const dramaFilms = arr.filter((film) => { // return only dramas
            return film.genre == 'Drama';
        })
        if (dramaFilms.length == 0){ // check for empty arrays after reducing to dramas
            return 0;
        } else {
        const ratedDramas = dramaFilms.filter((film) => { // filter out films without rating
            return film.rate > 0;
        })
        const totalDramaScores = ratedDramas.reduce((total, movie) => {
            return total + movie.rate;
        }, 0)
        return parseFloat((totalDramaScores / dramaFilms.length).toFixed(2))
    }
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr){
    const sortedByYear = arr.slice().sort((a, b) => {
        if (a.year == b.year){                         // sort alphabetically if same year
            return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
        } else {
        return a.year - b.year;                                             
        }
    })
    return sortedByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr){
    const onlyTitles = arr.map((film) => {  // create new array with only the tiltes
        return film.title;
    })
    const sortedAlphabetically = onlyTitles.slice().sort(); // sort alphabetically
    if (sortedAlphabetically.length > 20){ //check if > 20 and slice off first twenty only
        const firstTwentyFilms = sortedAlphabetically.slice(0,20);
        return firstTwentyFilms;
    } else {
        return sortedAlphabetically;
    }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr){
    const minutesArr = arr.slice().map((film) => {
        let time = film.duration; // set film.duration to easier to read variable                            
        let hourToMinutes = 0;
        let minutes = 0;
        if (time.includes('h') && time.includes('m')){  // check to see if duration is made up of hours and minutes
            hourToMinutes += parseInt(time[0]) * 60
            minutes = parseInt(time.substring(time.indexOf(' ') + 1, time.indexOf('m')))
        } else  if (time.includes('h') && time.includes('m') == false){ //check if duration is only hours
            hourToMinutes += parseInt(time[0]) * 60
        } else {      
            minutes = parseInt(time.substring(0, time.indexOf('m')))
        }
        let totalMinutes = hourToMinutes + minutes; // add (hours converted to minutes) and minutes
        film.duration = totalMinutes; // reassign value of 'duration' key to totalMinutes
        return film; // return updated object to minutesArr
    })
    return minutesArr;
}

// Jasmin gives an error saying 'time.includes is not a function', yet the code works and gives the desired result


// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(arr){
    if (arr.length == 0){   // checks for empty arrays and returns null if empty
        return null;
    } else {
    let sums = {}   // initialize new empty object to count total scores per year
    let counts = {}     // initialize new empty object to count number of films per year
    let results = []    // initialize new empty array to push results into

    for (let i = 0; i < arr.length; i++) {  // loop over each object(film)
        let year = arr[i].year;             // initialize object.year as new string 
        if (!(year in sums)) {              // if year not already present in sums-object:
            sums[year] = 0;                 // initialize new key in sums as year and equal it 0
            counts[year] = 0;               // initialize new key in counts as year and equal it 0
        }
        sums[year] += arr[i].rate;          // append rate of film to that year in sums
        counts[year]++;                     // increment film count for that year by 1
    }

    // once that's looped through:
        
    for(year in sums) {
        results.push({ year: year, score: sums[year] / counts[year] }); // push results in array as an object
    }
    results.sort((a, b) => {                // sort results by highest scores
       return  a.score - b.score;
    })
    let bestYear = `The best year was ${results[0].year} with an average rate of ${results[0].score}`
    return bestYear;                        // return result
    }
}