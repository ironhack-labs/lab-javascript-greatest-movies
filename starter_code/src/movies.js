/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
// const copyMovies = JSON.parse(JSON.stringify(movies));

function orderByYear(arr){
  const newArr = arr.slice().sort((obj1, obj2) => {
       if(obj1.year === obj2.year){
        if(obj1.title > obj2.title) return 1;
        if(obj2.title > obj1.title) return -1;
        return 0;
       } else
        return (obj1.year - obj2.year);
    });
    return newArr;
}

//orderByYear(copyMovies);


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(array){
   const filteredArr = array.filter(obj => {
        let category = obj.genre.includes('Drama');
        if(obj.director === "Steven Spielberg" && category){
            return obj;
        }
    });
    return filteredArr.length;
    
}
// howManyMovies(movies);


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr){
   const sorted = arr.slice().sort((a,b)=>{
         if(a.title > b.title) return 1;
         if(a.title < b.title) return -1;
          return 0;
    }).map(obj => obj.title);
    sorted.splice(20);
    return sorted;
}
// orderAlphabetically(movies);


// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr){
    if(arr.length===0) return 0;
   const avrRate = arr.reduce((acc,val)=>{
       if(!val.rate) val.rate = 0;
        return acc + val.rate;
    },0)/arr.length;
    return parseFloat(avrRate.toFixed(2));
}
// ratesAverage(movies);

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr){
    
  const sortByDrama =  arr.filter( obj =>{
    return obj.genre.includes('Drama');
  });
  const dramaRatings = sortByDrama.reduce((acc, val) => {
      return acc + val.rate;
  }, 0);
  const avgDramaRating = dramaRatings/sortByDrama.length;
  return parseFloat(avgDramaRating.toFixed(2)) || 0;
}
// dramaMoviesRate(movies);

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr){
    const newArr = JSON.parse(JSON.stringify(arr));
    const convertToMnts = newArr.map(obj =>{
       
       if(!obj.duration.includes('h')){
        
        obj.duration = parseInt(obj.duration);
         return obj;
       }
       else if(!obj.duration.includes("min")){
          obj.duration = parseInt(obj.duration)*60;
           return obj;
       } 
       else
       { 
         obj.duration = parseInt(obj.duration.split(' ')[0])*60+ parseInt(obj.duration.split(' ')[1]);
          return obj;
       }
    });
   return convertToMnts;
  }
//   turnHoursToMinutes(movies);

// BONUS Iteration: Best yearly rate average - Best yearly rate average


function filtered(arr, ayear){
    const obj = {};
    const sortArr = arr.filter(obj => {
        return obj.year=== ayear;
    });
    const totalRate = sortArr.reduce((acc, val) => {
        return acc + val.rate;
    }, 0);
    const avgRate = totalRate/sortArr.length;
    obj.year = ayear;
    obj.rate = parseFloat(avgRate.toFixed(2));

    return obj;
}

// filtered(movies,movies[0].year);
// console.log(filtered(movies,movies[0].year));

function bestYearAvg(arr){
  const newArr = JSON.parse(JSON.stringify(arr));
  
  if(newArr.length === 0) return null;
  let rateArr = [];
  let val;
  for(let i=0;i < newArr.length;i++){
         val = filtered(newArr, newArr[i].year);
     rateArr.push(val);
  }
 const maxRate = rateArr.reduce((max, val) => val.rate > max ? val.rate : max, rateArr[0].rate);
 
  const winnerOfYear = rateArr.filter(obj => {
    return obj.rate=== maxRate ;
  });
        if(winnerOfYear.length > 1 ){
          let minYear = rateArr.reduce((min,val) => val.year < min ? val.year : min, rateArr[0].year);
          const winner = winnerOfYear.filter(el => {
            return el.year === minYear;
          });
          return `The best year was ${winner[0].year} with an average rate of ${winner[0].rate}`
        } else
  return `The best year was ${winnerOfYear[0].year} with an average rate of ${winnerOfYear[0].rate}`
}

// bestYearAvg(copyMovies);
// console.log(bestYearAvg(movies));