// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arr) {
    let newArr = arr.map(function(elem){
        return elem.director;
    })
    return newArr;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr) {
    let spielbergArr = arr.filter(function(elem){
        return elem.director == "Steven Spielberg" && elem.genre.includes('Drama');
    })
    return spielbergArr.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
    let rateArray = arr.filter(function(elem){
        return elem.hasOwnProperty('rate') == true;
    });

    let avgRate = rateArray.reduce(function(acc, elem){
        
        return acc + elem.rate/arr.length;
    }, 0);


    return Math.round((avgRate + Number.EPSILON) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
    let dramaArray = arr.filter(function(elem){
        return elem.genre.includes('Drama');
    });

    let avgRate = dramaArray.reduce(function(acc, elem){
        
        return acc + elem.rate/dramaArray.length;
    }, 0);


    return Math.round((avgRate + Number.EPSILON) * 100) / 100;
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
    let chronologArr = JSON.parse(JSON.stringify(arr));
    chronologArr.sort(function(a, b){
      if (a.year > b.year) {
        return 1;
      }
      else if (a.year < b.year) {
        return -1;
      }
      else {
        if (a.title > b.title) {
            return 1;
          }
          else if (a.title < b.title) {
            return -1;
          }
          else {
            return 0;
          }
      }
    })
    return chronologArr;
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
    let alphabArray = JSON.parse(JSON.stringify(arr));
    alphabArray.sort(function(a, b){
        if (a.title > b.title) {
            return 1;
        }
        if (a.title < b.title) {
            return -1;
        }
        else {
            return 0;
        }
    })

    let titleArray = alphabArray.map(function(elem){
        return elem.title;
    })
    return titleArray.slice(0, 20);
}    

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes


function turnHoursToMinutes(arr) {

    let minutesArray = arr.map(function(elem){
        if (elem.duration.includes('h') == false) {
          elem.duration = '0h' + elem.duration;
        }
        if (elem.duration.includes('min') === false) {
            elem.duration = elem.duration + '0min';
        }
        let timeArr = elem.duration.split('h');
        hours = parseInt(timeArr[0], 10);
        mins = timeArr[1].replace(/[^0-9]/g,'');
        mins = parseInt(mins, 10);
        let min = hours*60 + mins;
        elem.duration = min;
        console.log(elem);
        return elem;
    })
    return minutesArray;
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(arr) {
    if (arr == '') {
        return null;
    }
    else {
        let sortedByYearArray = JSON.parse(JSON.stringify(arr));
        orderByYear(sortedByYearArray);

        let bestAverage = 0;
        let bestYear;

        for (let i = 0; i < sortedByYearArray.length; i++) {
            let oneYearArray = sortedByYearArray.filter(function(elem){
                return elem.year === sortedByYearArray[i].year;
            });
            if (ratesAverage(oneYearArray) > bestAverage) {
                bestAverage = ratesAverage(oneYearArray);
                bestYear = sortedByYearArray[i].year;
            }
        }
        return(`The best year was ${bestYear} with an average of ${bestAverage}`);
    }
}