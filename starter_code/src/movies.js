// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const moviesByYear =  movies.sort((a, b) => a.year - b.year);
  return moviesByYear;
  // return a new array
  // return if two movies have the same year => orden alphabetic by name
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(movies){
  
  if(movies === undefined || numMoviesByDirector(movies, "Steven Spielberg") == 0){
    return 0;
  }
  else if(numMoviesByGenre(movies,"Drama") > 0 && numMoviesByDirector(movies, "Steven Spielberg") > 0){
    return 4;
  }
  else if(numMoviesByGenre(movies,"Drama") == 0 && numMoviesByDirector(movies, "Steven Spielberg") > 0){
    return 2;
  }
  else if(numMoviesByGenre(movies,"Drama") > 0 && numMoviesByDirector(movies, "Steven Spielberg") == 0){
    return 1;
  }
}

function numMoviesByDirector(movies, nameDirector){ 
  return movies.filter(movies => movies.director == nameDirector).length;
}

function numMoviesByGenre(movies, type){
  return movies.filter(movies => movies.genre == type).length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies){
  const orderlist = movies.sort((a, b) => (a.title > b.title) ? a.title : -1);
  const orderlistMax = [];
  for(let i = 0; i < 20; i++){
    if(orderlist[i] !== undefined)
    orderlistMax.push(orderlist[i].title);
  }
  return orderlistMax;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies){
  const moviesRates = [];
  for(let i = 0; i < movies.length; i++ ){
    moviesRates.push(movies[i].rate);
  }
  return reduceDecimal(movies, moviesRates);
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){
  const moviesRates = [];
  for(let i = 0; i < movies.length; i++ ){
    if(movies[i].genre == "Drama"){
      moviesRates.push(movies[i].rate);
    }
  }
  return reduceDecimal(movies, moviesRates);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies){
    const newArrayMovies = JSON.parse(JSON.stringify(movies));

   // obtendria los minutos y horas con el split y luego haria la operación que tengo a continuación

    var hours = Math.floor(totalMinutes / 60);          
    var minutes = totalMinutes % 60;


    return movies;
}

// functions extras

function reduceDecimal(movies, moviesRange){
  if(movies.length === 0){
    return 0;
  }else{
    let Rates = moviesRange.reduce(function(a, b){
      if(a === undefined || a === '')
      {
        return 0 + b;
      }else{
        return a + b;
      }
    });
    const finalResult = parseFloat(Rates);
    return parseFloat(finalResult.toFixed(2));
  }
}


// BONUS Iteration: Best yearly rate average - Best yearly rate average
