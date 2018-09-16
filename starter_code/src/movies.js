/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

function duplicate(arr){
    var movies2 = [];
    arr.forEach(element => {
   
  var newO = Object.assign({}, element);
  movies2.push(newO);
});
return movies2;
}

var turnHoursToMinutes = function(arr) {
    var movies2=duplicate(arr);
  movies2.forEach(element => {
    if (element.duration.includes("min") === false) {
      var min = parseInt(element.duration.replace("h", " ")) * 60;
      
      element.duration = min;
    } else if(element.duration.includes("h") === false){
        var min = parseInt(element.duration.replace("min", " "));
      
      element.duration = min;
    }else        
        {
      element.duration = element.duration
        .replace("min", "")
        .replace("h", "")
        .split(" ");
      var time = element.duration[0] * 60 + parseInt(element.duration[1]);
      
      //console.log(timeString);
      element.duration = time;
    }
   
  });
  return movies2;
};

turnHoursToMinutes(movies);


function ratesAverage(arr){
    var average=0;
    arr.forEach(element => {
        average+= element.rate
        
    });
    return average/arr.length;
}

function dramaMoviesRate(arr){
    arr.forEach(element => {      
    //console.log(element.genre)
    var Drama = element.genre.filter(function(tipe){
        return tipe=== "Drama";
       });
       console.log (Drama)
    });
}
dramaMoviesRate(movies)
// Get the average of all rates with 2 decimals

// Get the average of Drama Movies

// Order by time duration, in growing order

// How many movies did STEVEN SPIELBERG

// Order by title and print the first 20 titles

// Best yearly rate average
