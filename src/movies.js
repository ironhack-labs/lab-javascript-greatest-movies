// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(array) {
    return array
        .map( (element) => {
            return element.director;
        })
        .reduce((acc,element, index) => {
            if (acc.indexOf(element) === -1){
                acc.push(element);
            }
            return acc;
        },[]);
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array) {
    return array
        .filter( (element) => {
            return (element.director === 'Steven Spielberg' &&
                element.genre.join('').includes('Drama'));
        }).length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
    return array
        .reduce((acc, element, index, array)=> {
            if (index === array.length - 1) {
                return Math.round((acc+ (element.rate ? element.rate: 0))/array.length*100)/100;
            }
            return acc + (element.rate ? element.rate: 0);
        }, 0);
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
    return ratesAverage(array.filter((element) => {
        return element.genre.join('').includes('Drama');
    }));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
    const myArray = [...array];
    return myArray
        .sort((a,b) => {
            if (a.year === b.year) {
                return (a.title < b.title) ? -1: 1;
            }  
            return a.year - b.year;
        } );
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
    return array
        .map((element) => {
            return element.title;
        })
        .sort((a,b) => {
            return (a < b) ? -1: 1;
        })
        .filter((element, index) => {
            return index < 20;
        });
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array) {
    const newArray = [...array];
    newArray
        .forEach((element, index) => {
            if (newArray[index].duration && (typeof newArray[index].duration == 'string')) {
                let rawDuration = newArray[index].duration;
                let rawHours = (rawDuration.indexOf('h') > 0) 
                    ? rawDuration.substring(0,rawDuration.indexOf('h')) 
                    : '0';
                let rawMinutes = (rawDuration.indexOf('min') > 0) 
                    ? rawDuration.substring(rawDuration.indexOf('h')+1,rawDuration.indexOf('min')) 
                    : '0';
                element.duration = parseInt(rawHours)*60 + parseInt(rawMinutes);
            }
        });
    return newArray;
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(array) {
    if (!array || array.length===0) {
        return null;
    }
    const newArray = array.reduce((acc, element) => {
        const iterationYear = element.year;
        const accIndex = acc.findIndex(element2 => element2.year === iterationYear);
        if (accIndex === -1 && element.rate) {
          acc.push({year: element.year, 
        sumRate: element.rate,
        countRate: 1});
        }else if (element.rate) {
          acc[accIndex].sumRate += element.rate;
          acc[accIndex].countRate++;
        }
        return acc;
    },[]);
    let maxYear = '';
    let maxAvgRate = 0;
    newArray.forEach((element) => {
      element.avgRate = element.sumRate/element.countRate;
      if (element.sumRate/element.countRate >= maxAvgRate) {
          if (element.sumRate/element.countRate > maxAvgRate || element.year < maxYear) {
            maxAvgRate = element.sumRate/element.countRate;
            maxYear = element.year;
          }
        }
    });
    return 'The best year was ' + maxYear + ' with an average rate of ' 
    + Math.round(maxAvgRate*100)/100;
};