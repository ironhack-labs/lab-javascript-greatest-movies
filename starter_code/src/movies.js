// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes (movArr) {
  // use map 
  return movArr.map(function(elem){
    // takes duration in string format
    var temp = elem.duration;
    // modify string to number, apply math (default format)
    var duration = (temp[0] * 60) + (temp[3] * 10) + (temp[4] * 1);
    // only hours
    if (temp[1] === "h" && temp.length === 2)
      duration = (temp[0] * 60);
    // '2h 8min' omitting minutes * 10
    else if (temp[4] === 'm')
      duration =   (temp[0] * 60) + (temp[3] * 1)
    // only mins
    else if (temp[0] === 0)
      duration = (temp[3] * 10) + (temp[4] * 1); 
    else if (temp[2] === "m")
      duration = (temp[0] * 10) + (temp[1] * 1);   
    if (elem.title === undefined)
      return { duration: duration };
    else 
      return {
        title: elem.title,
        year: elem.year,
        director: elem.director,
        // return number in string format
        duration: duration,
        genre: elem.genre,
        rate: elem.rate
      };
  });
};


// Get the average of all rates with 2 decimals 
function ratesAverage (arr) {
  var x = arr.reduce(function(count, elem){
    return elem.rate * 1 + count;
  }, 0);  
  return parseFloat((x / arr.length).toFixed(2));
}
console.log(ratesAverage(movies))


// Get the average of Drama Movies
function dramaMoviesRate (arr) {
  var dramas = arr.filter(function(elem) {
    return (elem.genre.includes('Drama'));
  });
  if (dramas.length === 0)
    return undefined;  
  else   
    return ratesAverage(dramas);
}
console.log(dramaMoviesRate(movies));


// Order by time duration, in growing order
function orderByDuration (arr) {
  var temp = arr;
  temp.sort(function(a, b) {
    if (a.duration > b.duration)
    // if a longer, bump right
      return 1;
    else if (a.duration < b.duration)
    // if shorter, bump left
      return -1;
    else if (a.duration === b.duration)
      // sort by alpha 
      if (a.title.toUpperCase() > b.title.toUpperCase())
        return 1;
      else
        return -1;
  });
  return temp;
}

// How many movies did STEVEN SPIELBERG

function howManyMovies (arr) {
  var temp = arr.filter(function(elem) {
    return (elem.genre.includes('Drama') && elem.director === 'Steven Spielberg');
  }); 
  if (arr.length === 0)
    return undefined;
  return "Steven Spielberg directed " + temp.length + ' drama movies!';
}
// Order by title and print the first 20 titles

function orderAlphabetically(arr) {
  var temp = arr.sort(function (a, b) {
    if (a.title.toUpperCase() > b.title.toUpperCase())
      return 1;
    else if (a.title.toUpperCase() < b.title.toUpperCase())
      return -1;
    else
      return 0;    
  })
  return Array.from(temp.slice(0, 20), function(elem){
    return elem.title;
  });
}

// Best yearly rate average
function bestYearAvg (arr) {
  if (arr.length === 0) 
    return undefined;
  var temp = arr.sort(function(a, b) {
    if (a.year < b.year)
      return -1;
    else if (b.year < a.year)
      return 1;
    else 
      return 0;    
  });
  // find min and max years
  var min = temp[0].year;
  var max = temp[temp.length - 1].year;
  var averages = [];

  // iterate over years
  for (var i = min; i <= max; i++) {
    // for each year, create an array of films
    var year = temp.filter(function(elem) {
      if (i == elem.year * 1)
        return elem;
    });
    // run ratesAverage for each array
    if (year.length !== 0)
      averages.push(
      {
      year:  i,  
      rate:  ratesAverage(year)
      });
  };

  // return highest average
  averages.sort(function(a, b) {
    if (a.rate < b.rate){
      return -1;
    }
    else if (b.rate < a.rate || b.rate === a.rate) {
      return 1;
    }
  });
return 'The best year was ' + averages[averages.length - 1].year + ' with an average rate of ' +  averages[averages.length - 1].rate
};