/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
    let newArr = [...arr];
    newArr.sort(function(a, b) {
      if (a.year !== b.year) {
        return a.year - b.year;
      } else {
        if (a.title<b.title) {
          return -1;
        } else if (a.title>b.title) {
          return 1;
        } else {
          return 0;
        };
      };
    });
    return newArr;
  };
  
  orderByYear(movies);

  // Other solution

  function orderByYear(arr) {
    let newArr = arr.map(obj => obj)
    .sort((a,b) => {
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
        return 0;
    })
    .sort((a,b) => a.year - b.year);
    return newArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

const arr = [];  

function howManyMovies(arr) {
  let newArr = arr.filter(function(element) {
    return (element.director === "Steven Spielberg") && (element.genre.indexOf("Drama")!==-1);
  });
  return newArr.length;
};

// Other solution

function howManyMovies(arr) {
  let total = arr.filter(el => (el.director === "Steven Spielberg") && (el.genre.includes("Drama")))
  .length;
  return total;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
 
function orderAlphabetically(arr) {
  let newArr = [...arr];
  newArr.sort(function(a, b) {
    if (a.title<b.title) {
      return -1;
    } else if (a.title>b.title) {
      return 1;
    } else {
      return 0;
    };
  });
  newArr = newArr.splice(0,20);
  newArr = newArr.map(function(element) {
    return element.title;
  });
  return newArr;
};

orderAlphabetically(movies);

// Other solution

function orderAlphabetically(arr) {
  let newArr = arr.map(obj => obj.title).sort().slice(0,20);
  return newArr;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
    let newArr  = [...arr];
    newArr = newArr.map(function(element){
      if (typeof(element.rate)!=="number") {
        return 0;
      };
      return element.rate;
    });
    if (newArr.length!==0) {
    var total = newArr.reduce(function(a,b) {
      return a + b;
    });
    var avg = total/(newArr.length)
    return Number(avg.toFixed(2));
    } else {
      return 0;
    };
  };
  
  ratesAverage(movies);

  function ratesAverage(arr) {
    if (!arr.length) return 0;
    let average = arr.map((obj) => {
        if (!obj.rate) return 0;
        return obj.rate;
    })
    .reduce((total,rate) => total+=rate)
    /arr.length;
    
    return Number(average.toFixed(2));
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
    let newArr = [...arr];
    newArr = arr.filter(function(element) {
      return (element.genre.indexOf("Drama")!==-1);
    });
    newArr = newArr.map(function(element) {
      if (typeof(element.rate)!=="number") {
          return 0;
        };
      return element.rate;
    });
    if (newArr.length!==0) {
      var total = newArr.reduce(function(a,b) {
        return a + b;
      });
      var avg = total/(newArr.length)
      return Number(avg.toFixed(2));
      } else {
        return 0;
      };
  };
  
  dramaMoviesRate(movies);

// Other solution

function dramaMoviesRate(arr) {
  let newArr = arr.filter(el => el.genre.includes("Drama"));
  
  if (!newArr.length) return 0;
  let average = newArr
      .map((obj) => {
          if (!obj.rate) return 0;
          return obj.rate;
      })
      .reduce((total,rate) => total+=rate)
      /newArr.length;
      
  return Number(average.toFixed(2));
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

let string = "";

function getMinutes(string) {
  let stArr = string.split("");
  let hours;
    if (stArr.indexOf("h")===-1) {
      hours = 0;
    } else {
      hours = Number(stArr[0]);
    };
  let minutes;
    if ((stArr.indexOf("m")===5) || (stArr.indexOf("m")===3)) {
      minutes = Number(`${stArr[3]}${stArr[4]}`);
    } else if (stArr.indexOf("m")===-1) {
      minutes = 0;
    } else if (stArr.indexOf("m")===2) {
      minutes = Number(`${stArr[0]}${stArr[1]}`)
    } else if (stArr.indexOf("m")===1) {
      minutes = Number(stArr[0]);
    } else {
      minutes = Number(stArr[3]);
    };
  return hours*60 + minutes;
};

function turnHoursToMinutes(arr) {
  let newArr = [...arr];
  newArr = newArr.map(function(element) {
    return {
      title: element.title,
      year: element.year,
      director: element.director,
      duration: getMinutes(element.duration),
      genre: element.genre,
      rate: element.rate
  }
  });
  return newArr;
};

turnHoursToMinutes(movies);

// Other solution

function turnHoursToMinutes(arr) {
  let newArr = arr
  .map((obj) => {
      let totalTime = obj.duration
      .split(" ")
      .map(t => { 
          if (t.includes("h")) {
              return parseInt(t)*60;
          } else if (t.includes("min")) {
              return parseInt(t);
          }
      })
      .reduce((total,time) => total += time)

      return {
          "title": obj.title,
          "year": obj.year,
          "director": obj.director,
          "duration": totalTime,
          "genre": obj.genre,
          "rate": obj.rate
      }
  })
  return newArr;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
