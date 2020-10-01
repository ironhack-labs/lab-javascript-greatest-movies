// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(arrMovies){
    return arrMovies.map(movie=>movie.director)
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectorsNoDuplicates(allDirectors){
    return allDirectors.filter((director, index)=>index === allDirectors.indexOf(director))
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arrMovies){
    return arrMovies.filter(movie=>movie.director === "Steven Spielberg"&&movie.genre.includes('Drama')).length
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arrMovies){
console.log(arrMovies.length)
    if(arrMovies.length){
        let newArrMovies = arrMovies.filter((movie)=> movie.rate);
        return Math.round(newArrMovies.reduce((acc, movie)=>
        acc + movie.rate, 0)/arrMovies.length*100)/100
    } else {
        return 0
    }
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arrMovies){
    let newArr =  arrMovies.filter(movie=>movie.genre.includes('Drama'));
    return newArr.length ? Math.round(newArr.reduce((acc, movie)=>acc + movie.rate, 0)/newArr.length*100)/100 : 0
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arrMovies){
    let newArr = arrMovies.map(movie=>{
    return movie.title ? {
        title: movie.title,
        year: movie.year
    } : {year: movie.year}});
    return newArr.sort((a, b)=>{
        if(a.year === b.year){
            if (a.title>b.title){
                return 1
            } else {return -1}
        } else {return a.year - b.year};
    })
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arrMovies){
    let newArr = arrMovies.map(movie=>movie.title);
    return newArr.sort(function(a, b) {
        if(a>b){
        return 1
        } else {return -1}
      }).filter((movie, index)=> index<20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(moviesArr){
    let toMinute = (string)=>{
      let hour=0;
      let minute=0;
      string.split('').forEach((char,index)=>{
        if (char === 'h'){
          hour = string[index-1];
        } else if(char === 'm'){
            minute = Number(string[index-2] + string[index-1])
        }
      })
      return Number(hour)*60 + Number(minute)
    }
    return moviesArr.map(movie=>({
      ...movie,
      duration: toMinute(movie.duration)
    }))
  }

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
    
function bestYearAvg(arrMovies){
    if (!arrMovies.length) {return null}
    let newArr = arrMovies.map(movie=>{
      return movie.rate ? {
          rate: movie.rate,
          year: movie.year
      } : {year: movie.year}});
      newArr = newArr.sort((a, b)=>{
          return a.year - b.year;
      });
    let makeAverage = (array)=>{
        let sum = array.reduce((acc,movie)=>{
          return acc + movie.rate
        },0)
        return Math.round(sum/array.length*100)/100
      }
      let finalArr = [];
      let avgArr = [newArr[0]];
      for(let i =1; i<newArr.length; i++){
        if (avgArr[0].year === newArr[i].year){
          avgArr.push(newArr[i]);
        } else {
          finalArr.push([avgArr[0].year, makeAverage(avgArr)]);
          avgArr = [newArr[i]];
        }
      }
      finalArr.push([avgArr[0].year, makeAverage(avgArr)])
      let finalArrOrd = (arr)=>arr.sort((a,b)=>{
        return b[1] - a[1]
      })
      return `The best year was ${finalArrOrd(finalArr)[0][0]} with an average rate of ${finalArrOrd(finalArr)[0][1]}`
  }