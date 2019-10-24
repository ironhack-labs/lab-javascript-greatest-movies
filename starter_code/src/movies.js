/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

const ratesAverage = (arr) => {
    const avgRates = arr.reduce((sum, total) => {
      const totalRates = sum + Number(total.rate);
      return totalRates;
    }, 0);
  
    const avgRating = avgRates / arr.length;
    const roundedAvg = Number(avgRating.toFixed(2));
    return roundedAvg;
  }; 

// Iteration 2: Drama movies - Get the average of Drama Movies

  
const dramaMoviesRate = (array) => {
    const dramaFilter = array.filter((item) => item.genre.includes('Drama'));
    const avgTotal = dramaFilter.reduce((acc, total) => acc + Number(total.rate), 0);
    const avgRate = (avgTotal / dramaFilter.length).toFixed(2);
  
    return dramaFilter[0] == undefined ? 0 : Number(avgRate);
  };

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

const orderByYear = (array) => {
    return array.sort((a, b)=> {
        if(a.year == b.year) {

        }
      return a.year - b.year
    })
  } 

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

const howManyMovies = (array) => {
    let filteredMovies = array.filter((item) => 
       item.genre.includes('Drama') && item.director.includes('Spielberg')
     )
     return filteredMovies.length
   }
   


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (array) => {
    const alphabetSort = array.sort((a, b) => {
      textA = a.title;
      textB = b.title;
      return textA.localeCompare(textB);
    });
  
  
    const filteredArray = [];
  
    for (let i = 0; i < 20; i++) {
      filteredArray.push(alphabetSort[i]);
    }
  
  
    return filteredArray;
  };
  


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
