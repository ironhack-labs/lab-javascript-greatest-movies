// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = (arr) =>{
    return arr.map(e => e.director);
};
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (arr) =>{
    const movies =arr.filter(a => a.director === "Steven Spielberg" && a.genre.includes("Drama"));
    return movies.length;
  }
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage= (arr) =>{   
    
    if(!arr.length){
        return 0;
    };
  
    const sum = arr.map(a=> !a.rate ? 0 : a.rate);
    const sumRates = sum.reduce((a,c) =>{
        return a + c;
    });
    const avgRates = sumRates / sum.length;
    return Number(avgRates.toFixed(2));    
  }; 

// Iteration 4: Drama movies - Get the average of Drama Movies
    const dramaMoviesRate = (arr) =>{
        if(!arr.length){
          return 0;
      } 
        const dramaMovies = arr.filter(a => a.genre.includes("Drama"));
        if(!dramaMovies.length){
          return 0;
        }
        const dramaMoviesRate = dramaMovies.map(a=> a.rate)
        const sumRates = dramaMoviesRate.reduce((a,c)=> a+c);
        const avgRates = sumRates / dramaMoviesRate.length;
        return Number(avgRates.toFixed(2));
      };

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (arr) => {
    const sortYear = arr.sort((a,b)=>{
      if(a.year === b.year){
        return a.title > b.title ? 1 : -1;
      }
      return a.year - b.year;
    });
    const orderYear = sortYear.map(a=>a);
    return orderYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (arr) => {
    const titleOrder = arr.map(m=>m.title).sort();
    return titleOrder.splice(0,20);
  };

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const bestYearAvg = (arr) => {
    if (!arr.length) {
      return null;
    }
    const yearRate = {};
    for (let i = 0; i < arr.length; i++) {
      yearRate[arr[i].year] = [];
    }
    for (let i = 0; i < arr.length; i++) {
      yearRate[arr[i].year].push(arr[i].rate);
    }
  
  const totalAvg = [];
  for (yr in yearRate){
    const suma = yearRate[yr].reduce((ac,cv)=>ac+cv);
    const avg = suma/yearRate[yr].length;
  
    totalAvg.push({
      year: yr,
      rate: Number(avg.toFixed(1))
    });
  }
  
  const maxAvg = totalAvg.reduce((a,b)=>a.rate > b.rate ? a : b);
  
    return `The best year was ${maxAvg.year} with an average rate of ${maxAvg.rate}`;
  };
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
