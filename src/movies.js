// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const topFive = [
    {
        title: 'The Shawshank Redemption',
        year: 1994,
        director: 'Frank Darabont',
        duration: '2h 22min',
        genre: ['Crime', 'Drama'],
        score: 9.3
    },
    {
        title: 'The Godfather',
        year: 1972,
        director: 'Francis Ford Coppola',
        duration: '2h 55min',
        genre: ['Crime', 'Drama'],
        score: 9.2
    },
    {
        title: 'The Godfather: Part II',
        year: 1974,
        director: 'Francis Ford Coppola',
        duration: '3h 22min',
        genre: ['Crime', 'Drama'],
        score: 9
    },
    {
        title: 'Schindler"s List',
        year: 1993,
        director: 'Steven Spielberg',
        duration: '3h 15min',
        genre: ['Biography', 'Drama', 'History'],
        score: 8.9
      },
      {
        title: 'Saving Private Ryan',
        year: 1998,
        director: 'Steven Spielberg',
        duration: '2h 49min',
        genre: ['Drama', 'War'],
        // score: 8.6
      }
  ];



// import { topFive } from "./data";

function getAllDirectors(moviesArray) {
    const newArray = moviesArray.map(e => {
        let director = e.director;
      
        if (director.includes(' ')) {
            const joinedStringArr = director.split(' ').join(' ')
            console.log(joinedStringArr);
            return joinedStringArr;
        }
        return director;
    })


    return newArray.filter((e, index) => newArray.indexOf(e) === index);
}

console.log(getAllDirectors(topFive))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let count = 0;

    const newArr = topFive.map(movie => {
        if(movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')){
            count++;
        } else {
            return 0;
        }
    })

    if (moviesArray.length === 0) {
        return 0;
    }
    else if (count > 0){
        return count;
    } else {
        return 0;
    }
}

console.log(howManyMovies(topFive));
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let scoresArr = [];
    
    let noScoreCount = 0;
    moviesArray.forEach(e => {
        if (e.score === undefined) {
            noScoreCount++
        }
        const score = e.score;
        scoresArr.push(score);
    })
    console.log(scoresArr);
    const initialValue = 0;

    const newScoresArr = scoresArr.filter(function( element ) {
        return element !== undefined;
     });

     console.log(newScoresArr)

    const sumWithInitial = newScoresArr.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue
    );


    const scoresAvg = sumWithInitial / newScoresArr.length;
    const altScoresAvg =   sumWithInitial / scoresArr.length;  

    if (moviesArray.length === 0) {
        return 0;
    } else if (noScoreCount > 0) {
        return Number(altScoresAvg.toFixed(2));
    } else {
        return Number(scoresAvg.toFixed(2));
    }
 }


console.log(scoresAverage(topFive))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaScoresArr = [];
    let dramaCount = 0;
    moviesArray.forEach(e => {
        if (e.genre.includes('Drama')){
            const score = e.score;
            dramaScoresArr.push(score);
            dramaCount++;
        } 
    console.log(dramaScoresArr);
    })

    const initialValue = 0;
    const sumWithInitial = dramaScoresArr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );
    
    const scoresAvg = sumWithInitial / dramaScoresArr.length;
    
    if (moviesArray.length === 0) {
        return 0;
    } else if (dramaCount === 0) {
        return 0;
    } else if (dramaScoresArr) {
        return Number(scoresAvg.toFixed(2));
    }
}

// // Iteration 5: Ordering by year - Order by year, ascending (in growing order)
// function orderByYear(moviesArray) {}

// // Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// function orderAlphabetically(moviesArray) {}

// // BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
// function turnHoursToMinutes(moviesArray) {}

// // BONUS - Iteration 8: Best yearly score average - Best yearly score average
// function bestYearAvg(moviesArray) {}
