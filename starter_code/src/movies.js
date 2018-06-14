/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(array){
    var str = "";
    var hours;
    var min;
    var totalMin;
  
    array.forEach(function(element){
      var str = element.duration;
      str = str.replace("h ","");
      str = str.replace("min","");
      hours = parseInt(str[0]);
      min = parseInt(str.substring(1));
      totalMin = hours*60+min;
      element.duration = totalMin;
    });  
  }
  
  turnHoursToMinutes(movies)

// Get the average of all rates with 2 decimals 

/*  //Solucion con solo forEach
function ratesAverage(array){
    var decimalRate
  
    var accum = 0;
    var total = array.forEach(function(currentElement){
      decimalRate = parseFloat(currentElement.rate);
      accum += decimalRate;
    });
    console.log(accum);
    return accum/array.length;
  }
  
  console.log(ratesAverage(testArray));
  */
  
  //Solucion con map y con forEach
    function ratesAverage(array){
        //Genera un arreglo de rates y guardalo en arrayOfRates
        var arrayOfRates = array.map(function(element){
        return (parseFloat(element.rate));
        });
        //Suma cada elemento en array of rates
        var accum = 0;
        var totalSum = arrayOfRates.forEach(function(element){
        accum += element;
        })
        //Divide la suma entre el total de elementos
        return accum/array.length;
    }
  console.log(ratesAverage(movies));

// Get the average of Drama Movies

    function dramaMoviesRate(array){
        //Arreglo de dramaMovies solamente
        var dramaMovies = array.filter(function(element){
        return element.genre.includes('Drama');
        });
        //Llamar a rates average enviando dramaMovies para obtener su rating average
        return ratesAverage(dramaMovies);
    }

console.log(dramaMoviesRate(testArray));

// Order by time duration, in growing order

turnHoursToMinutes(movies);  // Times must be in numeric minutes

function orderByDuration(array){
  var numericRateA;
  var numericRateB;

  var orderedArray = array.sort(function(a,b){
    numericRateA = parseFloat(a.duration);
    numericRateB = parseFloat(b.duration);
    if(numericRateA > numericRateB) return 1;
    if(numericRateA < numericRateB) return -1;
  });
  return orderedArray;
}

console.log(orderByDuration(movies));

// How many movies did STEVEN SPIELBERG
function howManyMovies(array){
    //Crear un arreglo de perliculas de steven
    var sSpilbergMovies = array.filter(function(element){
      return element.director === 'Steven Spielberg';
    });
    //filtrarlas a sola las de drama
    var dramaSpilbergMovies = sSpilbergMovies.filter(function(element){
      return element.genre.includes('Drama');
    });
    return dramaSpilbergMovies.length;
  }
  console.log(howManyMovies(movies));

// Order by title and print the first 20 titles
function orderAlphabetically(array){
    var orderedArray = array.sort(function(a,b){
      if(a.title > b.title) return 1;
      if(a.title < b.title) return -1;
    });
    return orderedArray;
  }
  orderAlphabetically(movies);

// Best yearly rate average
