

// Iteration 1: Time Format
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(function (elem) {
    var hours = 0;
    var minutes = 0;
    if (elem.duration.indexOf('h') !== -1) {
      hours = parseInt(elem.duration[0], 10) * 60;
    }
    if (elem.duration.indexOf('min') !== -1) {
      minutes = parseInt(elem.duration.substring(elem.duration.length - 5, elem.duration.length - 3), 10);
    }
    return Object.assign({}, elem, { duration: hours + minutes });
  });
}

// console.log(turnHoursToMinutes(movies));

// Iteration 2: All rates average

function ratesAverage(array){
  var rateSum = array.reduce(function(acc,value){
    return acc + Number(value.rate);
  },0);
  return (rateSum/array.length).toFixed(1);
}

console.log(ratesAverage(movies));


// Iteration 3: Drama movies

// taking an array that has objects which have "drama" in its genre
// var dramaArray = movies.filter(function(element){
//   return element.genre.includes("Drama");
// })

// var rate = drama[0].rate;

// returning sum of rate of dramas
// var rateDrama = dramaArray.reduce(function(acc, value){
//   return acc + Number(value.rate);
// }, 0);


function dramaMoviesRate(array){
  var dramaArray = array.filter(function(element){
    return element.genre.includes("Drama");
  })

  var rateDrama = dramaArray.reduce(function(acc, value){
    return acc + Number(value.rate);
  }, 0);

  return (rateDrama / dramaArray.length).toFixed(1);

}

console.log(dramaMoviesRate(movies));


// Iteration 4: Ordering by the duration

// var minfied = turnHoursToMinutes(movies);

// var durSortedArray = movies.sort(a,b){
//   a.duration 
// }

function orderByDuration(array){
  var minified = turnHoursToMinutes(array);
  var durSortedArray = minified.sort(function(a,b){
    return a.duration - b.duration;
  });
  return durSortedArray;
}

console.log(orderByDuration(movies));

// Iteration 5: Steven Spielberg. The best?

function howManyMovies(array){
  return array.filter(function(element){
    return element.director.includes('Steven Spielberg');
  })
}

console.log(howManyMovies(movies));

// Iteration 6: Alphabetic Order

function orderAlphabetically(array){

  // this one does not work >>>
  // var newArray =  array.sort(function(a,b){
  //   return a.title - b.title;
  // });
  // return newArray;

  var newArray = array.sort(function(a, b){
    var nameA = a.title.toUpperCase();
    var nameB = b.title.toUpperCase();
    if(nameA < nameB){
      return -1;
    }
    if(nameA > nameB){
      return 1;
    }
    return 0;
  });

  return newArray;
}

console.log(orderAlphabetically(movies));