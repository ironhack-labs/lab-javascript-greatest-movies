/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = (arr) => {
    return [...arr].sort((a, b) => {
      return a.year === b.year ? a.title.localeCompare(b.title) : a.year - b.year;
    });
  };
  
  // Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
  
  const howManyMovies = (arr) => {
    return arr.filter((movie) => {
      return (
        movie.genre.includes("Drama") && movie.director === "Steven Spielberg"
      );
    }).length;
  };
  
  // includes() to loop through the array and check the word wanted
  
  // Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
  
  const orderAlphabetically = (arr) => {
    return arr
      .map((element) => element.title)
      .sort((a, b) => a.localeCompare(b))
      .slice(0, 20);
  };
  
  // localeCompare() to order alphabetically and slice() to get just 20
  
  // Iteration 4: All rates average - Get the average of all rates with 2 decimals
  
  const ratesAverage = (arr) => {
    return arr.length === 0
      ? 0
      : Number(
          (
            arr
              .filter((element) => element.rate)
              .reduce((acc, cur) => acc + cur.rate, 0) / arr.length
          ).toFixed(2)
        );
  };
  
  // "?" operator to check invalid arrays, use Number() to convert the result because toFixed() changed the type to string
  
  // Iteration 5: Drama movies - Get the average of Drama Movies
  
  const dramaMoviesRate = (arr) => {
    return ratesAverage(arr.filter((element) => element.genre.includes("Drama")));
  };
  
  // Reuse ratesAverage function
  
  // Iteration 6: Time Format - Turn duration of the movies from hours to minutes
  
  const turnHoursToMinutes = (arr) => {
    // Make a deep clone, set three conditions to modify diferent formats (h and min, h, min)
  
    let newArr = JSON.parse(JSON.stringify(arr));
  
    newArr.forEach((movie, i) => {
      // First split the string in hours and minutes, convert hours to minute and slice "min"
      // Second just slice "h" and convert hours to minutes
      // Third slice "min"
  
      if (movie.duration.includes("h") && movie.duration.includes("min")) {
        movie.duration = movie.duration.split("h");
        movie.duration[0] = movie.duration[0] * 60;
        movie.duration[1] = movie.duration[1].slice(0, -3);
        movie.duration = movie.duration.reduce(
          (acc, cur) => acc + Number(cur),
          0
        );
      } else if (movie.duration.includes("h")) {
        movie.duration = Number(movie.duration.slice(0, -1) * 60);
      } else {
        movie.duration = Number(movie.duration.slice(0, -3));
      }
    });
  
    return newArr;
  };
  
  // BONUS Iteration: Best yearly rate average - Best yearly rate average
  
  const bestYearAvg = (arr) => {
    // Make two conditions to edge cases
    if (arr.length === 0) return null;
    if (arr.length === 1) {
      return `The best year was ${arr[0].year} with an average rate of ${arr[0].rate}`;
    }
  
    let orderByYear = arr.sort((a, b) => a.year - b.year);
  
    // Here I declare the variables to organize my ideas
    let currentYear = orderByYear[0].year,
      oneYearOnly = [],
      separatedByYear = [],
      rateAvgByYear,
      bestAvgRate = 0,
      indexOfTheBestYear = 0;
  
    // Make an array of arrays, which contains the movies of one year only and each position
    orderByYear.forEach((element) => {
      if (element.year === currentYear) {
        oneYearOnly.push(element);
      } else {
        separatedByYear.push(oneYearOnly);
        currentYear = element.year;
        oneYearOnly = [];
        oneYearOnly.push(element);
      }
    });
  
    rateAvgByYear = separatedByYear.map((element) => ratesAverage(element)); // Reuse ratesAvarage function
  
    // Use a loop to store the greater value of the array and get its index
    rateAvgByYear.forEach((element, index) => {
      if (element > bestAvgRate) {
        bestAvgRate = element;
        indexOfTheBestYear = index;
      }
    });
  
    // Get the year by acessing the prop of the array using the index of the best average
    return `The best year was ${separatedByYear[indexOfTheBestYear][0].year} with an average rate of ${bestAvgRate}`;
  };
  