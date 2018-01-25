   

    
var durationArray = movies.map(function(movie){


return movie.duration;


});

console.log (durationArray);

var array = [];

 for (i=0; i < durationArray.length; i++){
    var hoursToMinutes = (durationArray[i][0]*60);
    array.push(hoursToMinutes);
    console.log(hoursToMinutes);
    

}


console.log(array);

var array2 = [];

 for (i=0; i < durationArray.length; i++){
    var partialTime = ((durationArray[i][3]*10) + (durationArray[i][4]*1));
    array2.push(partialTime);
    console.log(partialTime);
    

}


console.log(array2);

//second try 
    
    
    /*) eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average


var numbers = [1, 2, 3, 4, 5, 6];

var evens = numbers.filter(function(number){
  return number % 2 === 0;
});

console.log(evens);
// [ 2, 4, 6 ]

var cities = ["miami", "barcelona", "madrid"];

  
  
  var turnHoursToMinutes = cities.map(function(city){
    city[0].toUpperCase()+city.slice(1);
  })
  
  
  console.log(capsCities); = cities.map(function(city){
  city[0].toUpperCase()+city.slice(1);
})


console.log(capsCities);
// ["Miami", "Barcelona", "Madrid"]