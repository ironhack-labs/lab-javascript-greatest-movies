// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return directorsArray = moviesArray.map(elem => elem.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const director = `Steven Spielberg`;
    const ourGenre = `Drama`;
    const moviesSteven = moviesArray.filter((elem) => elem.director === director).filter((elem) => elem.genre.includes(ourGenre));
  
    return moviesSteven.length;;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    
    const average=moviesArray.reduce((function(acl,curr){
        if(typeof curr.score === "number"){
            return acl+(curr.score/moviesArray.length)
        }else{
            return acl
        }        
    
    }),0)
    const averageRounded= Math.round(average *100)/100
    return averageRounded;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes(`Drama`) )
    return scoresAverage(dramaMovies)

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    ////solution 1 --------------------------------------------------------without ordering alphabetically
    // let moviesOrdered = moviesArray;
    // moviesOrdered.sort((a, b) => a.year - b.year);  
    ////---------------------I dont understand why this 2 lines of code also change moviesArray
   

    ////solution2 --------------------------------------------------without ordering alphabetically
    // const  moviesOrdered = moviesArray.map(movies=> movies)
    // moviesOrdered.sort((a,b) =>  a.year - b.year)


    
    //solution 3 ------------------------- to be honest i dont really understand why it works
    const  moviesOrdered = moviesArray.map(movies=> movies)
    moviesOrdered.sort(function(a,b) { 
        
        if(a.year===b.year){
           return a.title.localeCompare(b.title)
        }   
                
        return a.year - b.year
    })
    

   
  return moviesOrdered;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const  moviesOrdered = moviesArray.map(movies=> movies)
    
    moviesOrdered.sort((a,b)=> a.title.localeCompare(b.title))
    const movieTitles = moviesOrdered.map(movies => movies.title)

    if(movieTitles.length>20){
        for (let i = 0; i < 20; i++) {
             movieTitles.splice(20,Infinity)
    }
    }


    return movieTitles;

    
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    // I`m aware this is not the best way to change the time, but it works XD
    function changeTime(hora) {
        let time = 0;
        for (let i = 0; i < hora.length; i++) {
          if (hora[i] === `h`) {
            time = hora[i - 1] * 60;
          }
          if (hora[i] === `m`) {
            if (hora[i - 2] === ` `) {
              time += hora[i - 1] * 1;
            } else {
              time += 1 * (hora[i - 2] + hora[i - 1]);
            }
          }
        }
        return time;
      }
    newMovies = moviesArray.map((movies) => movies);
   
   
    // this works
    const timeChange = newMovies.map(function (movie) {
      let time = changeTime(movie.duration);
      
      // i couldnt find a way to change only one key in a simpler way than this.
      return {
        title: movie.title,
        year: movie.year,
        director: movie.director,
        duration: time,
        genre: movie.genre,
        score: movie.score,
      };
    });

   
  



    return timeChange;
    



}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if(!moviesArray.length){ return null}
    let moviesYear = [];
  
    newMovies = moviesArray.map((movies) => movies);


    // max and min year for iteration
    const yearsArray = newMovies.map((movies) => movies.year);
    const minYear = Math.min(...yearsArray);
    const maxYear = Math.max(...yearsArray);

  // iteration to find the average every year
  for (let i = minYear; i <= maxYear; i++) {
    let average = 0;
    let counter = 0;
    average = newMovies.reduce(function (acc, curr, index) {
      if (newMovies[index].year === i) {
        counter++;
        return acc + curr.score;
      } else {
        return acc;
      }
    }, 0);
    // to avoid NaN
    if (average !== 0) {
      average = average / counter;
    }
    moviesYear.push({ year: i, score: average });
  }

  const years = moviesYear.map((movie) => movie.year);
  const score = moviesYear.map((movie) => movie.score);

  const indexSol = score.indexOf(Math.max(...score));

  console.log(indexSol);

  const sol = `The best year was ${years[indexSol]} with an average score of ${score[indexSol]}`;
  return sol;
}
