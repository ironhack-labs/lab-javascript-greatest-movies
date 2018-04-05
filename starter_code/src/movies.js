/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movies){
  
	var changeFormat = movies.map(function(obj){
		var hours = "";
		var minutes = "";
		var temp = "";
		
		for (var i = 0; i < obj.duration.length; i++){
		  switch (obj.duration[i]){
		    case "h":
		      hours = parseInt(temp) * 60;
		      temp = 0;
		      break;
		    case "m":
		      minutes = parseInt(temp);
		      break;
		    case ' ':
		      break;
		    default:
		      temp += obj.duration[i];
		    }
		}
		
		return {
			title: obj.title,
		    year: obj.year,
		    director: obj.director,
		    duration: parseInt(hours + minutes),
		    genre: obj.genre,
		    rate: obj.rate 
		};
  });
  
  return changeFormat;
}

// Get the average of all rates with 2 decimals 
function ratesAverage(array) {
  
  	var amount = array.reduce(function(sum, curr) {
  	  if (curr.rate === '') { return sum + 0;}
  	  else{
  		  return sum + parseFloat(curr.rate);}
  	}, 0);
  	return parseFloat((amount / array.length).toFixed(2));
  }

// Get the average of Drama Movies
function dramaMoviesRate(array) {
	var dramaMov = dramaMovieFunc(array);

	if (dramaMov.length === 0) return undefined;
	return ratesAverage(dramaMov);
}

//Finding every Drama movie
function dramaMovieFunc(array){
  return array.filter(function(movie) {
		return movie.genre.indexOf('Drama') > -1;
	});
}

// Order by time duration, in growing order
function orderByDuration(array){
  array.sort(function(a, b){
    if (a.duration !== b.duration) return a.duration - b.duration;
    else {
      if (a.title < b.title) return -1;
      else return 1;
    }
  });
  
  return array;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies (array){
	
  if (array.length === 0) return undefined;

  var stevDirect = array.filter(function(movie){
    return movie.director === "Steven Spielberg"; 
  });
  
  var stevsMovies= dramaMovieFunc(stevDirect);

  
  return "Steven Spielberg directed "+ stevsMovies.length +" drama movies!";
}

// // Order by title and print the first 20 titles
function orderAlphabetically(array){
  var newArray = [];
  var count = 0;
  while (count < array.length){
    newArray.push(array[count].title);
    count++;
  }
  return newArray.sort().slice(0, 20);
}

// Best yearly rate average

function simpleAverage(array){
  
  var amount = array.reduce(function(sum, curr) {
  		  return sum + curr;
  	}, 0);
  	return amount / array.length;
}

function bestYearAvg(array){

	if (array.length === 0) return undefined;	

	var yearsDict = {};
	
	array.forEach(function(obj){
	  if (obj.year in yearsDict){
	   yearsDict[obj.year].push(obj.rate);
	    
	  }
	 else {
	   yearsDict[obj.year] = [obj.rate];
	    console.log(yearsDict);
	 }
	});
	
	var maxAverage = 0;
	var greatYear = 0;
	for (var key in yearsDict) {
	  var temp = simpleAverage(yearsDict[key]);
    if (temp > maxAverage){
	    maxAverage = temp;
	    greatYear = key; 
	}
  }
  
  return 'The best year was ' + greatYear + ' with an average rate of '+  maxAverage;
}

