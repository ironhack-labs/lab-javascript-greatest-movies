/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear (arr) {
  
    let newArray = JSON.parse(JSON.stringify(arr));
      
      return newArray.sort(function(a, b){
        if(a.year > b.year){
          return 1
        } if (a.year < b.year){
          return -1
        } else {
         if( a.title > b.title ){
         return 1;
        } else{
          return -1
            }
        }
      }                
    )
  }
              


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(arr){
    let filtro= arr.filter(function(arr){
        if(arr.length === 0){return 0}
        else{
            return (arr.director.includes('Steven Spielberg') && arr.genre.includes('Drama'))
        }
     });
     return filtro.length;
    }

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr){
 
    let newArray = [...arr];
    newArray.sort(function(a, b){
     
     if(a.title < b.title){
       return -1
     } if(a.title > b.title){
       return 1
     } 
   })
   if(newArray.length < 20){
   return newArray.slice(0, 19)
  } else {
    return newArray
  }                 
 }
 //Si se cambia if(arr.length a > 20) hace bien el slice, se ha dejado así por el ejercicio

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage (arr){
    if(arr.length === 0) {return 0};  
    

    let puntuacion = arr.map(newArray => newArray.rate);
         
     let totalidad = (acumulador, valor) => acumulador + valor;
       
         let suma= puntuacion.reduce(totalidad);
        
      let avg = suma / arr.length;  
        return Math.round((avg) * 100) / 100;
      };

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
    let filtro = arr.filter(function(arr){
      return arr.genre.includes('Drama');
    }     
    
    )
    return ratesAverage(filtro)       
  }



// Iteration 6: Time Format - Turn duration of the movies from hours to minutes



// BONUS Iteration: Best yearly rate average - Best yearly rate average
