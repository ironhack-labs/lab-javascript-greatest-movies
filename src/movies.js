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
   let newArr=arr.slice()
    let orderedAlph=newArr.sort(function (a,b){
        if (a.title<b.title) return -1
        if (a.title>b.title) return 1
        if (a.title===b.title) return 0});
    let cleaned=orderedAlph.map(element=>element.title)
        
        return cleaned.length>20?cleaned.slice(0,20):cleaned;
        };
    

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr){
    let arrCopy=arr.slice();
  
    let durationArr=arrCopy.map(element=>element.duration)                    // making an Array Only with the Durations to work with 
    let durationArrSplit=durationArr.map(element=>element.split(' '));     // Split that Array in to SubArrays     
    let durationArrConv= [];                                  
    const hRegex= new RegExp('h','g');                                      // regex for hours
    const minRegex= new RegExp ('min','g');                                  // regex for minutes   
    const d = /\d+/;   
                                                     // regex for digits 
          for(let i=0;i<durationArrSplit.length; i++){                         // 2 nested loops to iterate over the array and its subarray 
                let x=0;
                for(let j=0;j<durationArrSplit[i].length;j++)
                    {
                    if(hRegex.test(durationArrSplit[i][j])===true)              // if regex finds and "h"-value => take it and multiply it by 60 and add it to x
                    {x+=((durationArrSplit[i][j].match(d))*60)};          
                    if(minRegex.test(durationArrSplit[i][j])===true)             // if regex finds and "min"-value => take it and add it to x as it is 
                    {x+=(durationArrSplit[i][j].match(d))*1}
                    }
                    durationArrConv.push(x)                                       // take final of x and push it to the new converted Arr! 
                         };
                            
      for(let k=0;k<arrCopy.length;k++)                                       //loop over the duplicated Array and asign every duration the equivalent Value from the converted Array
      {arrCopy[k].duration=durationArrConv[k]};
      
  return arrCopy
      }

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
