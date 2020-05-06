// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(anArray){
    let moviesDirectors = anArray.map(movie => movie.director);
    return moviesDirectors;
}

//let allDirectors = getAllDirectors(movies);
//console.log(allDirectors);


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function uniqueDirectors(anArray){
    let uniqueMovieDirectors = anArray.filter((item, index) => anArray.indexOf(item) === index);
    return uniqueMovieDirectors;
}

//console.log(uniqueDirectors(allDirectors));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(anArray){
    let dramaMovies = anArray.filter(movie => movie.genre.includes('Drama'));
    let SpielbergDrama = dramaMovies.filter(movie => movie.director === 'Steven Spielberg');
    return SpielbergDrama.length;
}

//console.log(howManyMovies(movies));

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(anArray){
    let rates = anArray.map(movie => movie.rate);
    let sumRates = rates.reduce((accumulator, currentValue) => {
        if (typeof (currentValue) !== 'number'){
            return accumulator;
        }else{
            return accumulator + currentValue;
        }
    },0)
    if (anArray.length === 0){
        return 0; 
    } else {
        return +(sumRates/anArray.length).toFixed(2);
    }
}

//console.log(ratesAverage(movies);

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(anArray){
    let dramaMovies = anArray.filter(movie => movie.genre.includes('Drama'));
    return ratesAverage(dramaMovies);
}

//console.log(dramaMoviesRate(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(anArray){
    if (anArray.length === 0){
        return [];
    } else {
        return anArray.sort((a, b) => {
            if (a.year !== b.year){
                return a.year - b.year;
            } else {
                if (a.title > b.title){
                    return 1;
                } else if (a.title < b.title){
                    return -1;
                } else {
                    return 0;
                }
            }
        });
    }
}

//console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(anArray){
    let titleArray = anArray.map(movie => movie.title);
    titleArray.sort();
    if (anArray.length >=20){
        titleArray = titleArray.slice(0,20);
    }
    return titleArray;
}

//console.log(orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(anArray){
    let newTimeArray = JSON.parse(JSON.stringify(anArray));
    newTimeArray.map(obj => {
        if (obj.duration.slice(3,5).includes('m')){
            return parseInt(obj.duration.slice(3,4), 10);
        } else {
            return parseInt(obj.duration.slice(3,5), 10);
        }
    })
    newTimeArray.map(obj => {
            if (obj.duration.includes('min') === false){
            obj.duration = parseInt(obj.duration, 10)*60;
        } else if (obj.duration.includes('h') === false){
            obj.duration = parseInt(obj.duration, 10);
        } else {
            obj.duration = parseInt(obj.duration, 10)*60 + parseInt(obj.duration.slice(3,5), 10);
        }
    });
    return newTimeArray;
}

//console.log(turnHoursToMinutes(movies));

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(anArray){
    if (anArray.length === 0){
        return null;
    } else {
        let yearAndRateArray = anArray.map(obj => {return {year : obj.year, rate : obj.rate}});
        yearAndRateArray = orderByYear(yearAndRateArray);
        // Array with the format [{year: year1, avgrate: rate1}, {year: year2, avgrate: rate2}, ...]
        let finalArray = [];
        // Array of 1 year and several rates ([{year: year1, rate: rate1}, {year: year1, rate: rate2}, ...])
        let workingArray = [{year: yearAndRateArray[0].year, rate: yearAndRateArray[0].rate}];
        
        for (let i=1; i<yearAndRateArray.length; i++){
            if(yearAndRateArray[i-1].year === yearAndRateArray[i].year){
                workingArray.push({year: yearAndRateArray[i].year, rate: yearAndRateArray[i].rate});
            } else {
                finalArray.push({year: yearAndRateArray[i-1].year, rate: ratesAverage(workingArray)});
                workingArray = [{year: yearAndRateArray[i].year, rate: yearAndRateArray[i].rate}]
            }
        }
        finalArray.push({year: yearAndRateArray[yearAndRateArray.length-1].year, rate: ratesAverage(workingArray)});
     
        let bestYear = 0;
        let bestRate = 0;
        finalArray.forEach(obj => {
            if (obj.rate > bestRate){
                bestRate = obj.rate;
                bestYear = obj.year;
            } else if (obj.rate === bestRate){
                if (obj.year < bestYear){
                    bestYear = obj.year;
                }
            }
        })
        return `The best year was ${bestYear} with an average rate of ${bestRate}`;
    }
    
}

//console.log(bestYearAvg(movies));