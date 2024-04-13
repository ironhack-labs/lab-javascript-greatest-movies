// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map((movie) => movie.director)
    
}
//bonus
function cleanGetAllDirectors(moviesArray){
    const allDirectors = moviesArray.map((movie) => movie.director)
    const cleanedArray = allDirectors.filter((director, index) => {
        allDirectors.indexOf(director) === index;
    })
    return cleanedArray;
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const dramaMovies = moviesArray.filter((movie) => {
        return movie.director === `Steven Spielberg` && movie.genre.includes(`Drama`);
    })
    return dramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const totalAvrg = moviesArray.reduce(function (acumulator, currentValue){
        if(typeof currentValue.score === `number`){
        return acumulator + currentValue.score;
        }else {
            return acumulator
        }
    },0);
    if(moviesArray.length === 0) return 0;
    const average = totalAvrg / moviesArray.length
    const roundedAverage = average.toFixed(2);
    return parseFloat(roundedAverage);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const totalDramaMovies = moviesArray.filter((movie) =>{
        return movie.genre.includes(`Drama`) 
    });
    if(totalDramaMovies.length === 0) return 0;
    const totalDramaScore = totalDramaMovies.reduce(function(acumulator, currentValue){
        return acumulator + currentValue.score;
    }, 0);
    const roundedAverage = (totalDramaScore / totalDramaMovies.length).toFixed(2);
    return parseFloat(roundedAverage);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function compareYears(a, b){
    if(a.year !== b.year) {
        return a.year - b.year;       
    }else if(a.year == b.year){
        if(a.title < b.title){
            return -1;
        }else if(a.title > b.title){
            return 1;
        }else{
            return 0;
        }
    }
}
function orderByYear(moviesArray) {
    const newArr = [...moviesArray];
    const orderedArr = newArr.sort(compareYears);
    
    return orderedArr;
}
console.log(orderByYear(movies))
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function compareAlphabet(a, b){
    if (a < b){
        return -1;
    }else if(a > b){
        return 1;
    }else{
        return 0;
    }
}
function orderAlphabetically(moviesArray) {
    const newArr = [];
    moviesArray.forEach(movie => newArr.push(movie.title));
    const orderedArr = newArr.sort(compareAlphabet);
    const ordered20Arr = [];
    for (let i = 0; i < 20; i++) {
        ordered20Arr.push(orderedArr[i])
    }
    if(orderedArr.length > 20){
        return ordered20Arr.sort(compareAlphabet);
    }
    return orderedArr;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const newArr = [...moviesArray];
    newArr.map((movie) =>{
        movie.duration.split(`h`)
        
    })
    console.log(newArr)
    return newArr;
    
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
