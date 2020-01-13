/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear (list) {
let newArray = [...list];
newArray.sort ((a,b)=> {
        if (a.year === b.year) {return a.title.localeCompare(b.title)}
        else { return a.year - b.year} ;
    });
    return newArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies (movieList) {
  return movieList.filter(film => film.director === "Steven Spielberg").filter(film =>film.genre.includes("Drama")).length;
}


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movieList){
  const newArr = [...movieList]
  return newArr.sort((a,b)=> a.title.localeCompare(b.title)).reduce((acc, currentValue,i)=>{
    if (i<20) {
 acc.push(currentValue.title)
    }
    return acc
}, [] )
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage (array) {
  if (array.length === 0 )return 0 ;
  let average = array.reduce((accumulator, currentValue) => {
    if (currentValue.rate === "" || currentValue.rate ===undefined) {
      return accumulator += 0 ;
    } else { return accumulator += currentValue.rate;}}, 0)/ array.length;
  return parseFloat (average.toFixed(2));
} 


// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate (array) {
  let newArray = array.filter(movie => movie.genre.includes("Drama"));
  return ratesAverage(newArray) ;
} 
  

// function dramaMoviesRate (array) {
//   let newArray = array.reduce((accumulator, currentValue) => {
//     if (currentValue.genre.includes("Drama")) return accumulator.push(currentValue);
//   } , []);
//   console.log(newArray);
  
//   return ratesAverage(newArray) ;
// } 

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array) {
  let newArray = [...array];
  newArray.forEach (movie => {
    movie.duration = movie.duration.replace("h ", " ").replace("min"," ").split(" ");
    movie.duration = Number(movie.duration[0])*60 + Number (movie.duration[1]);
    })
    console.log(newArray);
    return newArray;
  }


// BONUS Iteration: Best yearly rate average - Best yearly rate average


// function listOfYears (movieList) {
// let yearsList = movieList.reduce ((accumulator, currentValue) => accumulator.push(currentValue.year), []);
// return yearsList;
// }
 


// function moviesByYears (movieList,aYear) {
//   return movieList.filter(film => film.year === aYear);
// }
