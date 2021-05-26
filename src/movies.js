// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(arr){
    let directors=arr.map(element=>element.director);
    return directors
  }


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr){
    let number=arr.filter(element=>element.director=='Steven Spielberg'&&element.genre.includes('Drama'));
    return number.length;
    }
    
// Iteration 3: All rates average - Get the average of all rates with 2 decimals


function ratesAverage(arr){
    let ratedMovies= arr.filter(element=>element.rate>=0)
     let averageGrade=ratedMovies.reduce(function(accu,curr){return accu+=curr.rate},0);
   return arr.length===0? 0 : Math.round((averageGrade/arr.length) * 100) / 100;
   }

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr){
    let dramaList=arr.filter(element=>element.genre.includes('Drama'))
    let averageGrade=ratesAverage(dramaList);
    return averageGrade;
  }


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr){
    let ordered=arr.sort(function(a,b){
    if (a.year < b.year) return -1;
    if (a.year > b.year) return 1; 
    if (a.year === b.year) {if (a.title<b.title){return -1}
                            if (a.title>b.title){return 1}
                            if(a.title===b.title){return 0}
                        }
                        }
                        )
  return arr.length===0? null : ordered
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr){
   
    let orderedAlph=arr.sort(function (a,b){
        if (a.title<b.title) return -1
        if (a.title>b.title) return 1
        if (a.title===b.title) return 0});
    let cleaned=orderedAlph.map(element=>element.title)
        
        return cleaned.length>20?cleaned.slice(0,20):cleaned;
        };
    

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr){
    let changedDuration=arr.map(function(element){
      
    })

}



// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
