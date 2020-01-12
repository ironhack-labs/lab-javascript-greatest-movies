/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array){
    let newArray = [];
    newArray = array.sort(function(num1, num2) { 
                          if(num1.year===num2.year){
                            if(num1.title < num2.title){ //esto no se esta aplicando y no se porque...
                              return num1;
                            } else {
                              return num2;
                            }
                          }else{
                            return (num1.year - num2.year);
                          };                       
                          });
    return newArray //no se porque no lo detecta como nuevo array
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(array){
    
    const dramaMovies = array.filter(function(element, index){    
      return element.genre[index] === "Drama" //porque no lo printea?
      //return array[index].genre[index] === "Drama"})
    })
      
    const spielbergDramaMovies = array.filter((element, index) => array[index].director === "Steven Spielberg")
    
    /* si pongo este codigo siempre devuelve el return 0
    if (array.length===0 || typeof array.movies === 'undefined'){
        return 0
    }
    */
    return dramaMovies
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array){
    const newArray = []
    array.sort((num1, num2) => num1 - num2);
    return newArray
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array){
    if(movies){

    }
    return Number
}

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
