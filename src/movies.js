
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(movie => movie.director)
    return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergDramas = moviesArray.filter((movie) => {
        if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')) {
            return true
        }
    })
    return spielbergDramas.length
}
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }
    const scoreAverages = moviesArray.reduce((count, scoreNum) => {
        if ('score' in scoreNum && !(scoreNum.score === '')) {
            return count + scoreNum.score
        } else {
            return count
        }
    }, 0)
    return Number((scoreAverages / moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaAverage = moviesArray.reduce((count, dramaScoreSum) => {
        if (dramaScoreSum.genre.includes('Drama')) {
            return count += dramaScoreSum.score
        } else {
            return count;
        }
    }, 0)
    const dramaMoviesNumber = moviesArray.filter(genreValue => genreValue.genre.includes('Drama'))

    if (dramaMoviesNumber.length === 0) {
        return 0
    } else {
        return Number((dramaAverage / dramaMoviesNumber.length).toFixed(2))

    }
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    const moviesCopy = movies.slice();
    moviesCopy.sort((a, b) => {
        if (a.year !== b.year) {
            return a.year - b.year;
        }
        return a.title.localeCompare(b.title);
    });
    return moviesCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    moviesArray.sort((a, b) => a.title.localeCompare(b.title));
    const newMoviesArr = moviesArray.map((movie)=>{return movie.title})
   if(newMoviesArr.length>=20){
    const otherArr = newMoviesArr.slice(0,20)
    return otherArr
   }else{
    return newMoviesArr
   }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const moviesArrayCopy = moviesArray.slice();
    moviesArrayCopy.map((movie) => {
        let minutes = 0;
        if(movie.duration.length>2){
             minutes = Number(`${movie.duration[3]}` + `${movie.duration[4]}`);
        }else{
             minutes = 0;
        }
        const hour = Number(movie.duration[0])*60;
        movie.duration = Number(hour + minutes);
        return movie;
    })
    return moviesArrayCopy;
}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length===0){
        return null;
    };
    let yearMovie = 0;
    let sumScore = 0;
    let countOfMovies =0;
    let averagePerYear =0;
    const averagePerYearArr = [];
   for(let i =0;i<moviesArray.length;i++){
    if (moviesArray[i].year === moviesArray[i+1].year||moviesArray[i].year === moviesArray[i-1].year){
        yearMovie = moviesArray[i].year;
        sumScore += moviesArray[i].score;
        countOfMovies ++;
        console.log(yearMovie)
        console.log(sumScore)
    }else{
        averagePerYear = sumScore/countOfMovies;
        console.log(`El promedio del año ${yearMovie} es ${averagePerYear}`)
        averagePerYearArr.push({year:yearMovie, average:averagePerYear});
    }
   }
    return averagePerYearArr;

 }


 const newMoviesArr = [
    { year: 2000, score: 9 },
    { year: 2000, score: 8 },
    { year: 2001, score: 8 },
    { year: 1978, score: 10 },
    { year: 1978, score: 7 }
  ];
//   console.log(newMoviesArr[0])
//   for(let i =0;i<newMoviesArr.length-1;i++){
    
//     console.log(`el año del indice ${i} es ${newMoviesArr[i].year}`)
//     console.log(`el año del indice ${i+1} es ${newMoviesArr[i+1].year}`)
//   }
 console.log(bestYearAvg(newMoviesArr));
