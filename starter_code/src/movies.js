/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(arr){
  var newMovies = arr.map(function(item){
    var num1 = 0;
    var num2 = 0;
    var newItem = Object.assign({}, item);
    if (item.duration.includes("h") && !item.duration.includes("min")) {
        newItem.duration.replace("h", "");
        newItem.duration = parseInt(newItem.duration, 10) * 60;
        console.log(newItem);
        return newItem;
    }

    else if (!item.duration.includes("h") && item.duration.includes("min")) {
        newItem.duration.replace("min", "");
        newItem.duration = parseInt(newItem.duration, 10);
         console.log(newItem); 
        return newItem;
    }

    else if (item.duration.includes("h") && item.duration.includes("min")) {
      var durationArr = newItem.duration.split(" ");
        
      durationArr[0].replace("h", "");
      num1 = parseInt(durationArr[0], 10) * 60;
     
      durationArr[1].replace("min", "");
      
      num2 = parseInt(durationArr[1], 10);
      
      
      newItem.duration = num1 + num2;
      
      return newItem;
        
    }
  })
  
  return(newMovies);

}

// Get the average of all rates with 2 decimals 
function ratesAverage (arr){
  var newArray = [];
  for(var i=0; i<arr.length; i++){
    newArray.push(parseFloat(arr[i].rate));
  }
  
  var totalRate = 0;
  totalRate = newArray.reduce(function(a,b){
    return a + b;
  }, 0);
  
  var average = totalRate/arr.length;
  average.toFixed(2);
  return average;
} 

// Get the average of Drama Movies
function dramaMoviesRate(arr){
  var newArray = [];
  for(var i=0; i<arr.length; i++){
    if(!arr[i].rate){
      newArray.push(0);
      continue
    }
    if(arr[i].genre.includes("Drama"))
      newArray.push(parseFloat(arr[i].rate));
  }

  if(newArray.length === 0){return newArray[0]}
  
  var totalRate = 0;
  totalRate = newArray.reduce(function(a,b){
    return a + b;
  }, 0);
  
  var average = totalRate/newArray.length;

  average = Number.parseFloat(average).toFixed(2);
  average = parseFloat(average);
  return average;
} 



// Order by time duration, in growing order

function orderByDuration(arr){
  if (arr.length === 1){return arr;}
  var newArray = []; 
  newArray = arr.sort(function(a,b){
    if(a.duration < b.duration){
    return -1;
    }
    if(a.duration > b.duration){
    return 1;
    }
    if (a.duration === b.duration) {
      return a.title.localeCompare(b.title);
    }
  })
  return newArray;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(arr){
  if (arr.length === 0){return arr[0];}
  var newArray = [];
  newArray = arr.filter(function(director){
    return (director.director === 'Steven Spielberg' && director.genre.includes("Drama"));
    
  })
  return "Steven Spielberg directed " + newArray.length + " drama movies!";
} 

// Order by title and print the first 20 titles

function orderAlphabetically(arr){
  if (arr.length === 0){return arr;}

  var newArray = []; 
  newArray = arr.sort(function(a,b){
    var title1 = a.title
    var title2 = b.title
    if(title1.localeCompare(title2, {sensitivity: 'base'}) < 0){
      return -1;
    }
    if(title1.localeCompare(title2, {sensitivity: 'base'}) > 0){
      return 1;
    }
  })
  var printArray = []; 

  if(newArray.length <= 20){
    for(var i = 0; i < newArray.length; i++){
      printArray.push(newArray[i].title);
    }
    return printArray;
  }
  if(newArray.length > 20){
    for(var j = 0; j <= 19; j++){
      printArray.push(newArray[j].title);
    }
    return printArray;
  }
  
}


// Best yearly rate average
function bestYearAvg(arr){
  if (arr.length === 0){return arr[0];}
  if (arr.length === 1) {
    return "The best year was " + arr[0].year + " with an average rate of " + arr[0].rate;
  }
  var years = [[arr[0].year, parseFloat(arr[0].rate), 1, parseFloat(arr[0].rate)]];
  
  for (var i = 1; i < arr.length; i++){
    var item = [arr[i].year, parseFloat(arr[i].rate), 1, parseFloat(arr[i].rate)];
    var current = arr[i].year;
    var counter = years.length;
    console.log(counter);
    console.log(current)
    for(var j = 0; j < years.length; j++){
      if(years[j].includes(current)){
        years[j][1] += item[1];
        years[j][2] += item[2];
        years[j][3] = years[j][1]/years[j][2];
        counter++
      }
    }
    console.log(counter);
    if(counter === years.length){
      years.push(item);
    }
    console.log(years);
  }
  console.log(years)
  var index = 0;
  var maxAverage = 0;
  for (var z = 0; z < years.length; z++){
    if(years[z][3] > maxAverage){
      index = z;
      maxAverage = years[z][3];
    }
    if(years[z][3] === maxAverage) {
      if (years[z][0].localeCompare(years[index][0]) < 0) {
        index = z;
      }
    }
  }
  
  return "The best year was " + years[index][0] + " with an average rate of " + years[index][3];
}