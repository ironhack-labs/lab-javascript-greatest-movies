// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(mov){
    let directors = mov.map(ele => ele.director);
    return directors
} 

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function cleanDirectorsDuplicates(array){
    let cleanArray = array.filter((item,index) => {//iterates through the array comparing each element's index with the index that the function generates. If it's different, it means that it has already been called out previously hence will return false and be filtered out
      return (array.indexOf(item) === index);
    })
    return cleanArray
}
  

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array){
    if(array.length === 0){return 0}
    else{
    let cleanDirectorArray = array.filter(function(element){
    return element.director === "Steven Spielberg" && element.genre.includes('Drama');
    });
    return cleanDirectorArray.length;
 }
}
  
// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array){
    if(array.length === 0){return 0}
    const total = array.reduce((accum,currentValue) =>{
      if(currentValue.rate)return accum + currentValue.rate;
      else return accum
    },0) 
    return +(total/array.length).toFixed(2)
  } 

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array){
    if(array.length === 0 ){return 0}
    else{
      const dramas = array.filter(ele => ele.genre.includes('Drama'))
      return ratesAverage(dramas);
    }
  }
  

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array){
    if(array.length === 0){return null
    }else{
        const orderByYear = array.sort((a,b) => {
            if(a.year > b.year) return 1 ;
            if(a.year < b.year) return -1 ;
            if(a.title > b.title) return 1 ;
            if(a.title < b.title) return -1;
        }) 
        return orderByYear;
    }
}
  
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array){
    if(array.length === 0){return null} else{
      alphArray = [...array].sort((a,b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1).slice(0,20);
      alphArrayTitles = []
      alphArray.forEach(ele => alphArrayTitles.push(ele.title));
      return alphArrayTitles;
    }
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array){
    const copyArray = array.map(ele => {
        let newMovie = {...ele,duration:parseInt(ele.duration[0]) * 60 + ((ele.duration.length < 3 ? 0 : parseInt(ele.duration.replace('min','').slice(3))))};
        return newMovie ;
    }); 
    return copyArray
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function ratesAverage1(array){//re-used previous function to get average. Refactored it a little bit for better performance. 
    if(array.length === 0){return 0}
    const total = array.reduce((accum,currentValue) => accum + currentValue,0); 
    return +(total/array.length).toFixed(2) 
} 
    
function groupRateByYear(array){
    let yearsArray = [];
    for(let i=0 ; i<array.length ; i++){
      if(yearsArray.indexOf(array[i].year) ===-1){//loop that iterates through all the movies substracting the years of each one and adding the unique values to the yearsArray
        yearsArray.push(array[i].year);
    }}
    let objectYears = []
    yearsArray.map(ele => objectYears.push({year:ele,rate:[]}));//for each year in the yearsArray generate a new array in which each year is a property of an object and adds another property to the object which is an empty array that will capture the rates
    for(let i=0 ; i<objectYears.length ; i++){//loop that iterates through the objectYears array
      for(let j=0 ; j<array.length ; j++){//loop that iterates through the movies array
        if(objectYears[i].year === array[j].year){//for each movie year add the rate of that movie to the objectYears array to the rates array property
          objectYears[i].rate.push(array[j].rate);
        }else{continue}
      }
    }
    objectYears.forEach(ele => ele.avgRate = ratesAverage1(ele.rate)); //iterates through objectYears running the rates array through the ratesAverage1 function to get the average rate for that year and adds it as a property to the objectYears
    
    objectYears.sort((a,b) => {//sorts the objectYears by year
      if(a.year > b.year) return 1;
      if(a.year < b.year) return -1;
    })
    return objectYears;
}
  
function bestYearAvg(array){
    const list = groupRateByYear(array)
    let highestAverage = 0
    let highestAvgYear = ""
    if(array.length === 0){return null}
    else{
      list.forEach(ele =>{
        if(ele.avgRate > highestAverage){
          highestAverage = ele.avgRate;
          highestAvgYear = ele.year;
        }         
      })    
    }
    return `The best year was ${highestAvgYear} with an average rate of ${highestAverage}`;
}