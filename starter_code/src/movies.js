/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = dt => 
 dt.slice()
 .sort((a, b) => a.year != b.year ? 
 a.year - b.year : 
 a.title < b.title ? 
 -1 : 
 1);

 // Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

const howManyMovies = dt => dt
.filter(film => film.director == "Steven Spielberg" && film.genre.includes("Drama")).length

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = dt => [...dt]
.map( a => a.title)
.filter(a => typeof a == "string")
.sort((a, b) => a < b ? -1 : 1)
.slice(0, 20);

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = dt => 
    Number((dt.length == 0 ? 
    0 : 
    dt.filter(a => a.rate)
    .map( obj => obj.rate)
    .reduce((a, b) => a + b)/dt.length)
    .toFixed(2));

// Iteration 5: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = (obj) => 
ratesAverage(obj.filter(a => a.genre.includes("Drama")));

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes = dt => dt.slice().reduce((a, b) => {
    a.push({
      ...b,
      duration: b.duration.replace(/[a-zA-z]/g, "")
      .split(' ')
      .map((a, i) => a.length == 2 ? parseInt(a) : i == 0 ? parseInt(a) * 60 : parseInt(a))
      .reduce((a,b) => a + b)
    })
    return a;
  }, [])

  // BONUS Iteration: Best yearly rate average - Best yearly rate average

const bestYearAvg = arr => {
  
  let copiedData = [...arr].sort((a,b)=> a.year - b.year);
 
  let moviesContainer = [];
  
  if(arr.length == 0) return null;
  
  for(let i = 0; i < copiedData.length - 1; i++){
    
    if(copiedData[i].year == copiedData[i + 1].year){
      
      copiedData[i+1]={
        year: copiedData[i].year,
        rate: (copiedData[i].rate + copiedData[i + 1].rate)/2
      }

    } else{
      
      moviesContainer.push({
        year:copiedData[i].year,
        rate:copiedData[i].rate
      });
      
    }
  }//for



  moviesContainer = moviesContainer.sort((a,b) => a.rate - b.rate).reduce((a,b)=>{
    a[0].rate < b.rate ?
      a = {
      year:b.year,
      rate:b.rate
    } :
    a = {
      year: a[0].year,
      rate: a[0].rate
    }
    return [a];
  }, [{
    year:0,
    rate:0
  }]);

  return `The best year was ${moviesContainer[0].year} with an average rate of ${moviesContainer[0].rate}`
 
}