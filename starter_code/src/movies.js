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
    const newArray = array.map(function(title, index) {
        return array[index].title;
        });
    newArray.sort()
    if(newArray.length > 20){
        const titles20 = newArray.slice(0, 20)
        return titles20
    } else{
        return newArray
    }
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array){
    let sum = 0
    let sumAverage = array.reduce(function(accumulator, currentValue, index){//no se hacer para que index empiece en 0 en vez de 1...(según la documentación si nombras ese parametro empieza en 0 pero no está funcionando así)
      sum = sum+array[index].rate
      return accumulator + array[index].rate
    });
    let totalAverage = (sum / sumAverage.length) //al ser un string ("Object Object media") tiene mucho length y por eso sale un num pequeño
    totalAverage = parseFloat(totalAverage).toFixed(2)
    return totalAverage
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array){
    const dramaMovies = array.filter(function(element,index){  
        return element[index].genre === "Drama";
    })
    ratesAverage(dramaMovies)
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array){
    const hoursOfMovies = array.map(function(element){
        console.log(element.duration)
        return element.duration
    })


}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
