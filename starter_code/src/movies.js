/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
//use map function


function turnHoursToMinutes(arr){
    let modifiedArr = arr.map(function(data){
        let newOB = {};
        newOB.title = data.title;
        newOB.year = data.year;
        newOB.director = data.director;
        newOB.duration = data.duration;
        newOB.genre = data.genre;
        newOB.rate = data.rate;
        
        let time = newOB.duration;
        let hour = parseInt(time[0])*60;
        let finalmin;
        if(!(time.includes("h"))){
            finalmin = parseInt(time.slice(0,2));
        }else if(!(time.includes("min"))){
            finalmin = hour;
        }else if(parseInt(time.slice(4,5))!= NaN){
            
            let min = parseInt(time.slice(3,5));
            finalmin = hour + min;
        }else{
            let min = parseInt(time.slice(3,4));
            finalmin = hour + min;
        }
        newOB.duration = finalmin;
        return newOB;
    })
    return modifiedArr;
}
// Get the average of all rates with 2 decimals 
function ratesAverage(arr){
    let average = arr.reduce((accum,current)=>{
        return parseFloat(accum) + parseFloat(current.rate);
    },0)
    average = average/arr.length;
    if(Number.isInteger(average)){
        return Math.floor(average);
    }
    return parseFloat(average.toFixed(2));
}

// Get the average of Drama Movies
function dramaMoviesRate(arr){
    let dramaMovies = arr.filter(function(ob){
        return ob.genre.includes("Drama");
    })
    let average = dramaMovies.reduce((accum,current)=>{
        if(current.rate===''){
            current.rate = 0;
        }
          return accum + parseFloat(current.rate);
      },0)
    if(dramaMovies.length === 0){
        return undefined;
    }
    average = average/dramaMovies.length;
    return parseFloat(average.toFixed(2));
  }

// Order by time duration, in growing order
function orderByDuration(arr){
    let sortedArr = arr.sort((a,b)=>{
        if(a.duration < b.duration){
            return -1;
        }
        if(a.duration > b.duration){
            return 1;
        }else{
            if(a.title > b.title){
                return 1;
            }
            if(a.title < b.title){
                return -1;
            }
        };
    })
    return sortedArr;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(arr){
    let dramaMovies = arr.filter(function(ob){
        return ob.genre.includes("Drama");
    })
    let movie = dramaMovies.filter(function(ob){
            return ob.director.includes("Steven Spielberg");
        })
    if(arr.length === 0){
        return undefined;
    }
    return `Steven Spielberg directed ${movie.length} drama movies!` ;
}

// Order by title and print the first 20 titles
function orderAlphabetically(arr){
    let sortedArr = arr.sort((a,b)=>{
        if(a.title > b.title){
            return 1;
        }
        if(a.title < b.title){
            return -1;
        }
    })
    let result = sortedArr.map((ob)=>{
        return ob.title;
    })
    if(result.length > 20){
      return result.slice(0,20);
    }
    return result;
}

// Best yearly rate average

function bestYearAvg(arr){
    if(arr.length === 0){
        return undefined;
    }
    let max=0;
    let bestYear;
    for(let i=0;i<arr.length;i++){
        let year = arr[i].year;    
        let checkArr = arr.filter(function(ob){
            return ob.year === year; 
        });
        if(ratesAverage(checkArr) > max){
            max = ratesAverage(checkArr);
            bestYear = year;
        }else if(ratesAverage(checkArr) === max){
            if(bestYear > year){
                bestYear = year;
            }
        }
    }
    return `The best year was ${bestYear} with an average rate of ${max}`;
}
