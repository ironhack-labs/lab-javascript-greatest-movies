// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(a){
    const newArray = a.map(i => { 
   return i.director;
 })
         return newArray
 }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


function howManyMovies(a){ 
    const newArr = a.filter(i => {
      return i.director === `Steven Spielberg` && i.genre.indexOf(`Drama`)!=-1
    },)
    return newArr.length;
  }


// Iteration 3: All rates average - Get the average of all rates with 2 decimals



function ratesAverage(a){  
    if (a.length == 0){
      return 0; 
    }
    const total = a.reduce((accu, curr) => {
      return accu + (curr.rate || 0)
      }, 0);
    return Math.round(total/a.length * 100)/100;
  }


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(a){



  const newArr = a.filter(i =>{ //filter all drama movies
    return i.genre.indexOf(`Drama`)!=-1
  },)

  if (newArr.length == 0 ){
    return 0; 
  }
  
  const total = newArr.reduce((accu, curr) => { // +calculate the sum of rates for the filtered array that contains dramas only
    return accu + (curr.rate || 0)
       }, 0);
  
   
     return Math.round(total/newArr.length * 100)/100 //calculate average and round to 2 digtis
 }


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(a){
  let sortYear = a.slice().sort((c,b)=>{
    
    if (c.year === b.year){
      return c.title.localeCompare(b.title)
    }
    return c.year - b.year
  })
  
  return sortYear
  }


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(c){
  let sortTitle = c.slice(0,20).sort((a,b)=>{
    return a.title.localeCompare(b.title);
  })
  
  let ordertTitle = sortTitle.map( i =>{
    return i.title
  })
  
  return ordertTitle;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
