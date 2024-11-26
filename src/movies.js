/*  {
    title: 'The Shawshank Redemption',
    year: 1994,
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    score: 9.3
  },*/

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(function(currentMovie){
        return currentMovie.director;
    })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.reduce(function(acc, currentMovie){
        if(currentMovie.director == "Steven Spielberg" && (currentMovie.genre).includes("Drama")) return acc + 1;
        else return acc;
    }, 0)
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length == 0) return 0;
    const sumAllScores = moviesArray.reduce(function(acc, currentMovie){
        if(currentMovie.score) return currentMovie.score + acc;
        else return acc;
    }, 0);
    return Math.round((sumAllScores / moviesArray.length)* 100)/100 ;
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let numDrama = 0; 
    const sumDrama = moviesArray.reduce(function(acc, currentMovie){
        if((currentMovie.genre).includes("Drama")){
            numDrama++;
            return acc + currentMovie.score;
        }
        else return acc;
    }, 0);
    if(numDrama == 0) return 0;
    else return Math.round((sumDrama/numDrama) * 100)/100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let sortedArr = moviesArray.toSorted(function(a,b){
        return  a.year - b.year;
    })
    return sortedArr
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let sortedArr2 = moviesArray.toSorted(function(a,b){
        return  (a.title).localCompare(b.title);
    })
    let result = [];
    let count = 0;
    for(let i = 1; i <= 20; i++){
        if(i <= sortedArr2.length){
            result.push(sortedArr2.title);
        }
    }
    return result;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    result = [];
    const clone = structuredClone(moviesArray);
    return clone.map(function(movie){
        let timeConvertArr = (movie.duration);
        let duration  = 0; 
        for(let i = 0; i < timeConvertArr.length; i++){
            if(timeConvertArr[i] == 'h'){
              duration += Number(timeConvertArr[i-1])*60;
            }
            if(timeConvertArr[i] == 'm'){
              duration += Number(timeConvertArr[i-2])* 10 + Number(timeConvertArr[i-1]);

            }
        }
        return {
            title : movie.title,
            year : movie.year,
            director : movie.director,
            duration: duration,
            genre : movie.genre,
            score : movie.score
        }
    })
}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if(moviesArray.length == 0){
        return null;
    }
    let sortedArr = {};
    moviesArray.forEach(function(movie){
        //let year = movie.year;
       // console.log(Object.keys(sortedArr));
        if(!((Object.keys(sortedArr)).includes(moviesArray.year)))
        {
            
            sortedArr[movie.year]  = [0, 0, 0, 0];
            //console.log()
        } else{
            sortedArr[movie.year]++;
        }
    })
    moviesArray.forEach(function(movie){
      //count
      sortedArr[movie.year][0] += 1;
      //sum of scores
      sortedArr[movie.year][1] += movie.score;
      // year 
      sortedArr[movie.year][3] = Number(movie.year)
  }) 
  let maxVal = 0;
  let bestYear = '';
  for(val of Object.values(sortedArr) ){
      val[2] = Math.round(val[1]/val[0]);
      if (val[2] > maxVal){
        maxVal = val[2];
        bestYear = val[3];
      }
    }
    return `The best year was ${bestYear} with an average score of ${maxVal}`
  }
