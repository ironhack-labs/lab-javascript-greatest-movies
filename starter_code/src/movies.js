/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(arr){
    var newArr = arr.map(function(movie){
      var movieLengthArr = movie.duration.split(" ");
      if(movieLengthArr[0].includes("min"))
      {
        movieLengthArr.unshift("0");
      }
      if(movieLengthArr[0].includes("h"))
      {
        movieLengthArr.push("0");
      }
      movieLengthArr[0] = movieLengthArr[0].replace(/\D/g,'');
      movieLengthArr[1] = movieLengthArr[1].replace(/\D/g,'');
      minuteDuration = Number(movieLengthArr[0]) * 60 + Number(movieLengthArr[1]);
      movie.duration = minuteDuration;
      return movie;
    });
  return newArr;
}

function ratesAverage(arr){
  var sum = arr.reduce(function(pre, cur){
    return pre + Number(cur.rate);
  }, 0);
  average = sum / arr.length;
  return average;
}

function dramaMoviesRate(arr){
  var filtered = arr.filter(function(movie){
    return movie.genre.includes("Drama");
  })
  var sum = filtered.reduce(function(pre, cur){
    return pre + Number(cur.rate);
  }, 0);
  if (sum === 0)
  {
    return undefined;
  }
  average = sum / filtered.length;
  return Number(average.toFixed(2));
}

// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order
function orderByDuration(arr){
  var minutes = turnHoursToMinutes(arr);
  var ordered = minutes.sort(function(a,b) {
      if (a.duration === b.duration)
      {
        return a.title.localeCompare(b.title);
      }
      return a.duration - b.duration;
    });
  return ordered;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(arr){
  if (arr.length === 0)
  {
    return undefined;
  }
  var filtered = arr.filter(function(movie){
    return (movie.genre.includes("Drama"));
  });
  var filteredSecond = filtered.filter(function(movie){
    return (movie.director.includes("Steven Spielberg"));
  });
  return "Steven Spielberg directed " + filteredSecond.length + " drama movies!";
}

// Order by title and print the first 20 titles
function orderAlphabetically(arr){
  var titleArray = [];
  arr.forEach(function(movie){
    titleArray.push(movie.title);
  });
  titleArray.sort();
  if (titleArray.length >= 20)
  {
    titleArray = titleArray.slice(0,20);
  }
  return titleArray;
}

// Best yearly rate average
function bestYearAvg(movies){
  //Sort by year
  if (movies.length === 0)
  {
    return undefined;
  }
  var yearSortedArr = movies.sort(function(a,b){
    return Number(a.year - b.year);
  });
  //Split sorted array
  var splitYear = [];
  for (var i = 0; i < 250; i++){
    splitYear.push([]);
  }
  var count = 0;
  var year = yearSortedArr[0].title
  var index = 0;
  previousYear = 0;
  while (count < yearSortedArr.length)
  {
    if (yearSortedArr[count].year != previousYear)
    {
      index++;
      previousYear = yearSortedArr[count].year;
    }
    splitYear[index].push(yearSortedArr[count])
    count++;
  }
  splitYear.splice(0,1);
  //Splice empty array values off of end of sorted array
  for (i = 0; i < splitYear.length; i++)
  {
    if(splitYear[i].length === 0)
    {
      splitYear = splitYear.splice(0, i)
    }
  }
  var sum = 0;
  var scoreArray = [];
  //Sum score on each split array
  for (i = 0; i < splitYear.length; i++)
  {
    sum = 0;
    for (var j = 0; j < splitYear[i].length; j++)
    {
      sum += Number(splitYear[i][j].rate);
    }
    scoreArray.push(sum);
  }
  //Divide score by length of array, push to new array of scores
  var avgArray = scoreArray.map(function(sum, i){
    return sum / splitYear[i].length;
  });
  //Find max score in array
  var max = 0;
  index = 0;
  avgArray.forEach(function(score, i){
    if (score > max){
      max = score;
      index = i;
    }
  });
  //Associate it with year in second array
  return "The best year was " + splitYear[index][0].year + " with an average rate of " + max;
}