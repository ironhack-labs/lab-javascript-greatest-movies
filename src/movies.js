console.log('movies', movies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors (arr) {
  const allDirectors = arr.map((element) => {
    return element.director; 
  })

  return allDirectors.filter((element, index) => {
    if (allDirectors.indexOf(element) === index) {
      return true; 
    }
  })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies (arr) {
  const howMany = arr.filter((element) => {
    if (element.director === "Steven Spielberg" && element.genre.includes("Drama")) {
      return true; 
    }
  })

  return howMany.length; 
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage (arr) {
  if (!arr.length) { return 0; }

  const sum = arr.reduce((acc, cur) => {
    if (cur.rate) {
      return acc + cur.rate; 
    } else {
      return acc; 
    }
  }, 0); 
  
  return Number((sum / arr.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate (arr) {
  const onlyDramas = arr.filter((element) => {
    if (element.genre.includes("Drama")) {
      return true; 
    }
  })

  return ratesAverage(onlyDramas); 
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear (arr) {
  const sortedArr = arr.slice().sort((a, b) => {
    if (a.year < b.year) {
      return -1;
    } else if (a.year > b.year) {
      return 1;
    } else {
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      }
    }
  })

  return sortedArr; 
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically (arr) {
  const allTitles = arr.map((element) => {
    return element.title; 
  })

  allTitles.sort(); 
  return allTitles.length > 20 ? allTitles.slice(0, 20) : allTitles; 
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes (arr) {
  const newArr = JSON.parse(JSON.stringify(arr)); 

  newArr.forEach((element) => {
    const durationArr = element.duration.split(' ');
    let hours; 
    let minutes; 

    if (durationArr.length > 1) {
      hours = Number(durationArr[0].replace(/\D/g,''));
      minutes = Number(durationArr[1].replace(/\D/g,''));
    } else if (durationArr[0].includes('h')) {
      hours = Number(durationArr[0].replace(/\D/g,''));
      minutes = 0; 
    } else {
      hours = 0;
      minutes = Number(durationArr[0].replace(/\D/g,'')); 
    }
    
    element.duration = (hours * 60) + minutes; 
  })
  
  return newArr; 
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg (arr) {
  if (!arr.length) { return null; }

  const yearsAndRates = {}; 
  const all = []; 

  arr.forEach((element) => {
    if (!yearsAndRates[element.year]) {
      yearsAndRates[element.year] = []; 
    }
    yearsAndRates[element.year].push(element.rate);
  })
  
  for (let year in yearsAndRates) {
    const sumRates = yearsAndRates[year].reduce((acc, cur) => {
      return acc + cur; 
    }, 0); 
    const avg = sumRates / yearsAndRates[year].length;
    const yearObj = {}; 
    yearObj.date = year;
    yearObj.average = avg;
    all.push(yearObj);
  }
  
  all.sort((a,b) => {
    return b.average - a.average; 
  })

  return `The best year was ${all[0].date} with an average rate of ${all[0].average}`;
}