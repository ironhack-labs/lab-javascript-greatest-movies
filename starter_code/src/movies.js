/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = function (arr) {
   // let newArr = JSON.parse(JSON.stringify(arr));
   let newArr = arr.slice();
    newArr.sort((a,b) => {
        if(a.year > b.year) {
            return 1;
        }
        if(a.year < b.year) {
            return -1;
        }
        if(a.year === b.year) {
           return a.title.localeCompare(b.title);
        }
    })
    return newArr;
} 

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
const howManyMovies = function (arr) {
    let newArr = arr.filter( movie => movie.director === 'Steven Spielberg');
    let newArr2 = newArr.filter(movie => movie.genre.includes('Drama'));
    return newArr2.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = function (arr) {
    let newArr = arr.slice();
    newArr.sort((a,b) => a.title.localeCompare(b.title))
    let newArr2 = newArr.slice(0,20);
    let finalArr = newArr2.map(movie => {
        return movie.title;
    })
    console.log(finalArr);
    return finalArr;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = function (arr) {
    if(arr[0]===undefined) {
        return 0;
    }
    let newArr = arr.slice();
    // let rateArr = [];
    // newArr.forEach(movie => {
    //     if(movie.rate !== undefined) {
    //         rateArr.push(movie.rate);
    //     }
    // });
    let rateArr = newArr.map(movie => {
        if (!movie.rate) {
            return 0;
        } else {return movie.rate;}
    })
    let total = rateArr.reduce((accumulator,currentValue) =>  { return accumulator + currentValue},0);
    let average = total/rateArr.length;
    let result = Number(average.toFixed(2));
    console.log(result);
    return result;
    

}

// Iteration 5: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = function (arr) {
    if(arr[0]===undefined) {
        return 0
    }
    let newArr = arr.filter(movie => movie.genre.includes('Drama'));
    if(newArr[0]===undefined) {
        return 0
    }
    let rateArr = newArr.map(movie => movie.rate);
    let total = rateArr.reduce((accumulator,currentValue) => {return accumulator + currentValue},0);
    let average = total/rateArr.length;
    let result = Number(average.toFixed(2));
    return result;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = function (arr) {
    let newArr = JSON.parse(JSON.stringify(arr));
    function hourToMin (str) {
        let timeArrStr = str.split(' ');
        
        let mins;
        if(timeArrStr.length===2) {
            let timeArrNum = timeArrStr.map(element => parseInt(element));
            mins = timeArrNum[0]*60 + timeArrNum[1];
        }
        if(timeArrStr.length ===1) {
            if(timeArrStr[0].includes('h')) {
                mins = parseInt(timeArrStr[0])*60; 
            }
            if(timeArrStr[0].includes('min')) {
                mins = parseInt(timeArrStr[0]);
            }
        }
        return mins;   
    }
    let finalArr = newArr.map(element => {
        return {
            "title": element.title,
            "year": element.year,
            "director": element.director,
            "duration": hourToMin(element.duration),
            "genre": element.genre,
            "rate": element.rate
          };
    })
    return finalArr;
}


// BONUS Iteration: Best yearly rate average - Best yearly rate average

const bestYearAvg = function (arr) {
    if(arr[0]===undefined) {
        return null;
    }
    let yearArr =[];
    arr.forEach(movie => {
        if(yearArr.indexOf(movie.year) < 0 ) {
            yearArr.push(movie.year);
        }
    })
    yearArr.sort();
    let rateArr = yearArr.map(year => {
        let count = 0;
        let totalRate = arr.reduce((a,b)=> {
            if(b.year===year) {
                count++;
               return a+b.rate;
            } else {
                return a;
            }  
        },0)
        return totalRate/count;
    })
    let sortArr = rateArr.slice();
    sortArr.sort();
    let highestRate = sortArr[sortArr.length-1];
    let whichyear = yearArr[rateArr.indexOf(highestRate)];
    return `The best year was ${whichyear} with an average rate of ${highestRate}`;
}
