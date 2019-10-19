function newExercice(text) {
      var ladate = new Date();
      ladate.toGMTString()
      console.log(`\n\n${ladate.toGMTString()}
    \n\u26a1 | ------------------- | \u2615 | Iteration ${numeroExercice()} | \u2615 |-----------------| \u26a1\nGoal : ${text}`)
    }
    var counter = 0
    function numeroExercice(){ return counter ++ }



/* eslint no-restricted-globals: 'off' */


// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
newExercice("Iteration 1: All rates average - Get the average of all rates with 2 decimals")

function ratesAverage(arr) {

    let sum = arr.reduce((accumulator, currentValue) => accumulator + parseFloat(currentValue.rate), 0);
    let average = sum / arr.length;
    let averageReduce = average.toFixed(2);
    return parseFloat(averageReduce);
}

// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
    // if (arr.length === 1 ) {return arr.rate}
    const dramaMovies = arr.filter(film => film.genre.includes("Drama"))
    console.log(dramaMovies)
    if (!dramaMovies.length) return 0;
    const sumRateDrama = dramaMovies.reduce((accumulator, currentValue) => { return accumulator += Number(currentValue.rate) }, 0);

    let averageDrama = sumRateDrama / dramaMovies.length;
    let averageReduceDrama = averageDrama.toFixed(2);
    console.log(parseFloat(averageReduceDrama))
    return parseFloat(averageReduceDrama);
}

dramaMoviesRate(movies)




// Iteration 3: Ordering by year - Order by time duration, ascending (in growing order)


function orderByYear(arr) {
    arr.sort(function (a, b) {
      
      if(a.year > b.year) return 1
      if(a.year < b.year) return -1
      if(a.year === b.year) {
        if(b.title > a.title) return -1
        else return 1
      };
      
      //return a.year - b.year;
    })
    console.log(arr)
    return arr
    }



// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(arr) {
    const spDramas = arr.filter((film, genre) => film.director.includes("Steven Spielberg") && film.genre.includes("Drama"))
    return spDramas.length
  }

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
    arr.sort(function (a, b) {
      if(a.title >= b.title) return 1
      if(a.title < b.title) return -1
      })
      top20 = arr.slice(0,20)
      return top20.reduce((accumulator, currentValue) => [...accumulator, currentValue.title], [])
    }


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function transformHM (t) {
    if(t.length > 5){
    let formatSansMin = t.substr(0, t.length -3);
    let indexH = formatSansMin.search("h ");
    let heure = formatSansMin.substr(0,indexH)*60;
    let minutes = 1*(formatSansMin.substr((formatSansMin.length -3)*-1));
    let durationMinute = heure + minutes
    return durationMinute}
    if(t.search("h") > 0){
    let indexH = t.search("h");
    let durationMinute = t.substr(0,indexH)*60;
    return durationMinute};
    return t.substr(0, t.length-3);
  }
  
  function turnHoursToMinutes(arr){
    arr.map(currentTime => {
      var newDuration = parseFloat(transformHM(currentTime.duration));
      currentTime.duration = newDuration;
      return newDuration;
    })
    return arr
  }


// BONUS Iteration: Best yearly rate average - Best yearly rate average




var perYear = movies.reduce((acc, movie) => {
    var year = movie.year
    if (acc[year]) acc[year].push(movie.rate)
    else acc[year] = [movie.rate];
    return acc
  }, {})
  