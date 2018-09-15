/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(array) {
    if(array.length == 0) {
        return;
    }
    var movies2 = [];
      array.forEach(function(element) {
        var object1 = Object.assign({}, element);

        if(object1.duration.length > 5) {
            var dur = object1.duration.split("h ");
            var a = dur[1].slice(0, -3);
            dur[1] = a;
            dur[0] *= 60;
            var totalTime = dur[0] + parseInt(dur[1]);
            object1.duration = totalTime;
            movies2.push(object1);
        } else {
            var a;
            if(object1.duration.length > 3) {
                a = parseInt(object1.duration.slice(0, -3));
            } else {
                a = object1.duration.slice(0, -1);
                a *= 60;
            }
                object1.duration = a;
                movies2.push(object1);
        }
      });
    return movies2;
  }
  
  
console.log(turnHoursToMinutes(movies));
  

// Get the average of all rates with 2 decimals 
function ratesAverage(array) {
    var rates = [];
    array.map(function(element) {
        var object1 = Object.assign({}, element);
        rates.push(parseFloat(object1.rate));
    })
    var total = rates.reduce(function(accumulator, current){
      return accumulator + current;
    });
    var average = total/rates.length;
    if(String(average).search(".00") >= 0) {
      return(Math.round(average));
    }
    return(average.toFixed(2));
  }

  console.log(ratesAverage(movies));

// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
