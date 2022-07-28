// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let directors = [];
  moviesArray.filter((ele) => {
    //_Bonus_:  if (directors.findIndex(ele.director)===-1) directors.push(ele.director);
    directors.push(ele.director);
  });
  return directors;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let temp = [];
  moviesArray.filter(ele => {
    ele.director === "Steven Spielberg" && ele.genre.includes('Drama') ? temp.push(ele) : null;
  })
  return temp.length; 
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0; 
  let points = moviesArray.reduce((acc, cur) => {
    return cur.score ? acc + cur.score : acc; 
  }, 0);
  return +(points / moviesArray.length).toFixed(2);
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (moviesArray.length === 0) return 0;
  let dramaNum = 0;
  moviesArray.filter((ele) =>
    ele.genre.includes("Drama") ? dramaNum++ : null
  );
  let points = moviesArray.reduce((acc, cur) => {
    return cur.score && cur.genre.includes("Drama") ? acc + cur.score : acc;
  }, 0);
  if (dramaNum === 0) return 0;
  return +(points / dramaNum).toFixed(2);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let temp = JSON.stringify(moviesArray);
  let newArr = JSON.parse(temp);
  newArr.sort((a, b) => {
    if (a.year === b.year) {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      }
    }
    if (a.year !== b.year) {
      if (a.year < b.year) {
        return -1;
      }
    }
  });
  return newArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
   let temp = JSON.stringify(moviesArray);
   let newArr = JSON.parse(temp);
   newArr.sort((a, b) => {
     if (a.title.toLowerCase() < b.title.toLowerCase()) {
       return -1;
     }
   });
  return newArr.map(ele=> ele.title).slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  
    let temp = JSON.stringify(moviesArray);
    let newArr = JSON.parse(temp);
    newArr.forEach((ele) => {
      ele.duration = ele.duration.split("h");
      ele.duration =
        !ele.duration[1]
          ? ele.duration[0] * 60
          : ele.duration[0] * 60 + parseInt(ele.duration[1]);
    });
  
  return newArr;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
   let temp = JSON.stringify(moviesArray);
   let newArr = JSON.parse(temp);

   let temp2 = newArr
     .map((ele) => {
       let year = ele["year"].toString();
       let score = ele["score"].toString();
       return year + " " + score;
     })
     .map((ele) => {
       return ele.split(" ");
     });

   let caseArr = [];

   temp2.forEach((ele) => {
     ele[1] = Number(ele[1]);
     if (caseArr.indexOf(ele[0]) === -1) {
       caseArr.push(ele);
     }
   });

   console.log(temp2);

   return `The best year was <YEAR> with an average score of <RATE>`;
}
