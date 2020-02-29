/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)


function orderByYear (movies) {
    let sorted = [...movies].sort((value1, value2) => {
        if(value1.year<value2.year){
            return -1
        }
        else if (value1.year>value2.year){
            return 1
        } else {
            if(value1.title<value2.title) {
                return -1
            } else if (value1.title>value2.title) {
                return 1
            } 
        }
    })
    return sorted
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies (array) {

 let   filteredArray=array.filter(movie => { 
     
     return (
         movie.director==="Steven Spielberg"  && movie.genre.includes("Drama")
 );
 });
 return filteredArray.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically (array) {  
    
    let sorted = [...array].sort((value1, value2) => {
            if(value1.title<value2.title) {
                return -1
            } else if (value1.title>value2.title) {
                return 1
            } 
    })
    // https://stackoverflow.com/questions/19590865/from-an-array-of-objects-extract-value-of-a-property-as-array
    return twentySorted=sorted.map(value  => value.title).slice(0,20)

}
orderAlphabetically(movies)
/*
A SHORTER WAY TO DO IT
function orderAlphabetically (array) {
    return array
    .map(movie=>movie.title)
    .sort(
    .slice(0,20)
    )
}
*/

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array){
    if(!array.length){
        return 0
        // let rateArray = array.map((movie) => {
        //     return movie.rate
        // }); 
        
        // let reducedrateArray = rateArray.reduce((accumulator,number) => {
        //     return accumulator + number}, 0);
        // let rateAverage = reducedrateArray / rateArray.length;
        // let avg=Math.round(rateAverage * 10 ** 2) / 10 ** 2
        // return avg
    } else{
        let total = array.reduce((accumulator, current) => {
            if (current.rate) {
                return accumulator + current.rate;
            } else {
                return accumulator;
            }
        }, 0);
        let average = total / array.length;
            // return Math.round(average * 10 ** 2) / 10 ** 2;
            // return Number(average.toFixed(2));
            return parseFloat(average.toFixed(2));
    }
}
// Iteration 5: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = (array) => {
    const drama = array.filter(movie => {      // filtramos o array movies e criamos o array drama que só contêm filmes que são classificados como dramáticos
        return movie.genre.includes('Drama');  // .includes  é um método
    });
    return ratesAverage(drama); // ratesAverage é a função definida na Iteration 4 
};
/* Também funciona
const dramaMovies = movies.filter(
     function (movie) {
          return movie.genre.includes('Drama'); 
     }      
    );
console.log(dramaMovies)
console.log(dramaMovies.length)
console.log(movies.length)
const dramaMoviesRate = ratesAverage(dramaMovies)
console.log(dramaMoviesRate)

*/


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array) {
   
    let durationArray = movies.map(
      (value) => { 
        let hours = value.duration[0];
            if (value.duration.length === 5) {
                hours = "0"
            }
        let minFirstDigit = value.duration[value.duration.length-5];
           if (value.duration.length === 2 || value.duration.length === 7){
            minFirstDigit =  "0"
          }
          console.log(minFirstDigit)
        let minSecondDigit = value.duration[value.duration.length-4];
         if (value.duration.length === 2){
            minSecondDigit =  "0"
          }
        return Number(hours) * 60 + Number(minFirstDigit + minSecondDigit)
  })
    return durationArray
  }
  

/*
function turnHoursToMinutes(array) {
    // console.clear()
    // startTime()
      let durationArray = movies.map(
        (value) => { 
          let hours = value.duration[0];
            if (isNaN(value.duration[0]) ) {
              hours = 0
            }
            // console.log("This is the Hours Digit*******************************")
            // console.log(hours)
          let minFirstDigit = value.duration[value.duration.length-5];
            if (isNaN(value.duration[value.duration.length-5])) {
               minFirstDigit = 0
               //hours[value.duration.length-5] = 0
            }
          // console.log("This is the minutes First Digit*******************************")
           /////////// console.log(minFirstDigit)
          let minSecondDigit = value.duration[value.duration.length-4];
            if (isNaN(value.duration[value.duration.length-4])) {
              /////////////console.log("NaN ????????????????")
               minSecondDigit = 0
               //hours[value.duration.length-4] = 0
            }
           //console.log("This is the minutes Second Digit*******************************")
            //console.log(minSecondDigit)
          return Number(hours) * 60 + Number(minFirstDigit + minSecondDigit)
    })
    
      return durationArray
      
    }
*/




// BONUS Iteration: Best yearly rate average - Best yearly rate average
