// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectors = (arr) => {
    //get directors array
    const allDirectors = arr.map(function(arr) {
        return arr.director;
    });
    //filter repeated data (BONUS)
    const directors = allDirectors.filter(function (element, index) {
        console.log("Element: ",element," - Index:",index);
        console.log("indexOfElement: ",allDirectors.indexOf(element));
        return allDirectors.indexOf(element) === index;
    });
    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (arr) => {
    if(!arr.length) {
        return 0;
    }
    const stevenDramaMovies = arr.filter(movie => movie.director==="Steven Spielberg" && movie.genre.includes("Drama"));
    return stevenDramaMovies.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (arr) => {
    if(!arr.length) return 0;

    const rateSum = arr.reduce(function(sum,element){
      //console.log("Sum=",sum," Element.rate = ",element.rate);
      if(typeof element.rate === "number"){
          return sum+element.rate;
      }
      return sum+0;
    },0);
    return Number((rateSum/arr.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = (arr) => {
    if(!arr.length) return 0;

    let dramaMoviesCount=0;
    const rateSum = arr.reduce(function(sum,element){
      //console.log("Sum=",sum," Element.rate = ",element.rate);
      if(typeof element.rate === "number" && element.genre.includes("Drama")){
          dramaMoviesCount++;
          return sum+element.rate;
      }
      return sum+0;
    },0);

    if(dramaMoviesCount===0) return 0;

    return Number((rateSum/dramaMoviesCount).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (arr) => {
    const yearlySorted = [...arr].sort(function(movie1, movie2) {
      if(movie1.year > movie2.year) {
        return 1;
      }
      else {
        return -1;
      }
    });
    return yearlySorted;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (arr) => {
    //get titles array
    const movieTitles = arr.map(function(arr) {
        return arr.title;
    });
    //sort movie titles
    const alphabeticSort = movieTitles.sort(function(movie1, movie2) {
      if(movie1 > movie2) {
        return 1;
      }
      else {
        return -1;
      }
      return 0;
    });

    return alphabeticSort.slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = (arr) => {
    //iterate in the array
    const hoursToMinutesArr = arr.map(function(element) {
      const modifiedElement = {...element}
      //turn movie duration into an array
      const hoursAndMinutes = modifiedElement.duration.split(" ");
      //obtain minutes from the movie duration array
      let totalMinutes = 0;
      hoursAndMinutes.forEach(function (timeElement){
        if(timeElement.includes("h")) {
          totalMinutes += Number(timeElement.replace(/\D+/,""))*60;
        }
        else {
          totalMinutes += Number(timeElement.replace(/\D+/,""));
        }
      });
      //Return modified element
      modifiedElement.duration = Number(totalMinutes);
      return modifiedElement;
    });

    return hoursToMinutesArr;
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
const getAllYears = (arr) => {
    //Yearly sort the array
    const yearlySortedArr = orderByYear(arr);
    //Create array with the years
    const allYears = yearlySortedArr.map(function(yearlySortedArr) {
        return yearlySortedArr.year;
    });
    //filter repeated data (BONUS)
    const years = allYears.filter(function (element, index) {
        return allYears.indexOf(element) === index;
    });
    return years;
}

const yearRateAverage = (arr, year) => {
    //Sum all the rates from the year
    let moviesFromYear=0;
    const rateSum = arr.reduce(function(sum,element){
      if(element.year === year){
          moviesFromYear++;
          return sum+element.rate;
      }
      return sum+0;
    },0);

    return Number(rateSum/moviesFromYear);
}

const bestYearAvg = (arr) => {
    if(!arr.length) return null;
    const yearsArray = getAllYears(arr);
    let maxRate = 0;
    let winnerYear = 0;
    yearsArray.forEach(function(year) {
        if(yearRateAverage(arr,year) > maxRate) {
            maxRate = yearRateAverage(arr,year);
            winnerYear = year;
        }
    });
    return `The best year was ${winnerYear} with an average rate of ${maxRate}`
}



