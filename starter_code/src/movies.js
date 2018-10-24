// Change the format of duration of movies.

function turnHoursToMinutes (movieArray) {

  var newArray = movieArray.map( function(oneMovie) {
  // pour chaque élément (oneMovie) dans l'array (movieArray)

    var duration = oneMovie.duration;

    // hours
    if ( duration.includes('h') ) {
      var indexEnd = duration.indexOf('h');
      // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/indexOf
      var indexStart = 0;
      var hours = Number(duration.slice(indexStart, indexEnd));
    } else {
      var hours = 0;
    };

  // minutes
      if ( duration.includes('min') ) {
      var indexEnd = duration.indexOf('min');
      var indexStart = indexEnd - 2;
      var minutes = Number(duration.slice(indexStart, indexEnd));
      // slice(index où on commence à couper, index ou on finit de couper [pas inclu])
    } else {
      var minutes = 0;
    };

    var durationRun = (hours*60) + minutes + 'min' ;

    return Object.assign({}, oneMovie, { duration: durationRun });
    // https://medium.com/front-end-hacking/immutability-in-array-of-objects-using-map-method-dd61584c7188

  })

  return newArray;

 };

var bigMoviesArray = turnHoursToMinutes(movies);
console.log(bigMoviesArray);

// Calculate the average rate

function averageRate(movies){
  var total = movies.reduce (function (sum, oneMovie){
  return (sum + Number(oneMovie.rate));
    }, 0);
  var average = ( total / (Number(movies.length)) ).toFixed(2);
  return average;
};

console.log ( "The average rate is " + averageRate(movies) );

// Get the average of Drama Movies

function dramaMoviesRate(movies){
    var dramaMovie =
    movies.filter(function(oneMovie){
    return ((oneMovie.genre.indexOf("Drama")) > -1);
  })
    return averageRate(dramaMovie);
  }

console.log("The average of Drama Movies is : " + dramaMoviesRate(movies));

// Order by year, in growing order

movies.sort( function(itemA, itemB) {
  if (itemA.year < itemB.year){
    //if "itemA" comes before "itemB" return NEGATIVE (the order is good)
    return -999;
  }
  else{
    //if "itemB" comes before "itemA" return POSITIVE (they need to switch)
    return 500;
  }
});
console.log("Movie sorted by years :");
console.log(movies);

// How many movies did STEVEN SPIELBERG

console.log("Steven Spielberg");

var stevenMovies = movies.filter( function (oneMovie){
  return oneMovie.director.includes('Steven Spielberg');
});
console.log(stevenMovies);

var howManyMovies = stevenMovies.length;
console.log(howManyMovies + " : Steven Spielberg movies");

var spielbergDrama = stevenMovies.filter( function (oneMovie){
  return oneMovie.genre.includes('Drama');
});

var howMany = spielbergDrama.length;
console.log("Spielberg did " + howMany + " Drama movies")

// Order by title and print the first 20 titles

movies.sort( function(itemA, itemB) {
  if (itemA.title < itemB.title){
    //if "itemA" comes before "itemB" return NEGATIVE (the order is good)
    return -999;
  }
  else{
    //if "itemB" comes before "itemA" return POSITIVE (they need to switch)
    return 500;
  }
});

newArray= [];

movies.forEach( function() {
  for (i=0; i<movies.length; i++){
    newArray.push(movies[i].title);
  }
});

console.log("20 first movies");
var titleMovies = newArray.slice(0, 20);
console.log(titleMovies);

// BONUS : Best yearly rate average

function bestYearAvg(movies){

  var years = []; // nouveau tableau qui contient toutes les années de sorties des films
  movies.forEach(function(oneMovie){ // on pioche dans le premier tableau
    if((years.indexOf(oneMovie.year) == -1)){
    years.push(oneMovie.year)
    }
    // on supprime les années en doublon
    return years.sort(); // on les classe par ordre chronologique
  })

  averagePerYears =[]; // nouveau tableau avec toutes les averages par année
  years.forEach(function(oneYear){ // on pioche dans le tableau des années
    var averageForOneYear = movies.filter(function(oneMovie){
      return (oneMovie.year == oneYear)
    });
    averagePerYears.push( parseFloat(averageRate(averageForOneYear)) );
  });

  var bestAverage = Math.max.apply(Math, averagePerYears); // apply donne le nombre max de l'array averagePerYears (ici le meilleur average toute année confondue)
  var indexBestYear = averagePerYears.indexOf(bestAverage); // position de la meilleure année dans l'array bestAverage (index = 35)
  var theBest = years[indexBestYear];

  return theBest;

  };

  console.log( "The Best yearly rate average was in " + bestYearAvg(movies) );
