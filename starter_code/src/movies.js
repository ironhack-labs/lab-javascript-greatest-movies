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
   var count = 0;
	var dramaMov = array.filter(function(movie) {
		return movie.genre.indexOf('Drama') > -1;
	});

	if (dramaMov.length === 0) return undefined;
	return ratesAverage(dramaMov);
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
  var stevDirect = array.filter(function(movie){
    return movie.director === "Steven Spielberg" && movie.director === "Drama"; 
  });

  if (stevDirect.length === 0) return undefined;

  return "Steven Spielberg directed "+ toString(stevDirect.length) +" drama movies!";
}

// Order by title and print the first 20 titles
function orderAlphabetically(array){
  var newArray = [];
  var count = 0;
  while (count < array.length && count < 20){
    newArray.push(array.title);
  }
  return newArray.sort();
}


// Best yearly rate average
