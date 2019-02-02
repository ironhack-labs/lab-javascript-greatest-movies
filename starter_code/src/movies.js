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
    if(!arr[i].rate){continue}
    if(arr[i].genre.includes("Drama"))
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



// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
