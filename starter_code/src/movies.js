/* eslint no-restricted-globals: 'off' */

console.log(movies.map(function(e) {return e.title}));

// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(array) {
  //slice function --> returns specific elements of an array into a new array - if nothing written as parameters, returns a new array similar to the old array
  var result = array.slice().map(function(e) {
    var minutes = 0;
    //Hack to comply with the tests
    var ecopy = Object.assign({}, e);
    if(typeof(ecopy.duration) === 'number') {
      return ecopy;
    console.log('type of ' + typeOf(ecopy.duration));}
    //If the duration includes the number of hours, then split the array at the number of hours, otherwise create an array with 1st element as 0 and second element as duration (in minutes)
    var parsedString = (ecopy.duration.indexOf('h') !== -1) ? ecopy.duration.split('h') : ['0', ecopy.duration];
    parsedString[0] = parseInt(parsedString[0]) * 60;
    if (parsedString[1]) {
      parsedString[1] = parseInt(parsedString[1]);
      ecopy.duration = parsedString[0] + parsedString[1];
    } else {
        ecopy.duration = parsedString[0];
      }
      console.log('test',parsedString);
      return ecopy;
})
console.log(result);
return result;
}



// Get the average of all rates with 2 decimals
function ratesAverage(array) {
var result = 0;

for (var i = 0; i < array.length ; i++) {
  result += array[i].rate;
}
return result/array.length;
}


// Get the average of Drama Movies
function dramaMoviesRate(array) {
  var arrDrama = array.filter(function(elmt) {
    return elmt.genre.indexOf('Drama') !== -1;
  })
  var result = 0;
  for (var i = 0; i < arrDrama.length ; i++) {
    result += arrDrama[i].rate;
  }
  return (arrDrama.length === 0) ? undefined : parseFloat(result/arrDrama.length).toFixed(2)*1;
}

// Order by time duration, in growing order
function orderByDuration(array) {
  var result = turnHoursToMinutes(array);

  order1 = result.sort(function(a,b) {
    if (a.title > b.title) {
      return 1;
    } else if (a.title < b.title) {
      return -1;
    } return 0;
  })
  order2 = result.sort(function(a,b) {return a.duration-b.duration});
  //Same function for title is not working??
  return order2;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(array) {
  var result = 0;
  for (var i = 0; i < array.length; i++) {
    if ((array[i].genre.indexOf('Drama') !== -1) && (array[i].director === 'Steven Spielberg')) {
      result += 1;
    }
  }
    var output = 'Steven Spielberg directed ' + result + ' drama movies!'; 
    return (array.length === 0) ? undefined : output;
}


// Order by title and print the first 20 titles
function orderAlphabetically(array) {
  order = array.sort(function(a,b) {
    if (a.title > b.title) {
      return 1;
    } else if (a.title < b.title) {
      return -1;
    } else {
      return 0;
    }
  })
  titleOrdered = order.map(function(elmt) {return elmt.title});
  top20 = titleOrdered.splice(0,20);
  //Not sure I get the whole splice thing... Seems different from the explanation in the Ironhack course
  //There is a mistake in the Ironhack course --> change splice by slice
  return top20;
}


// Best yearly rate average

function bestYearAvg(array) {
  //1. Create a simple array with only the year
    var yearMovies = array.map(function(elmt) {return elmt.year});
  //2. Uniquify this array (one element per year)
    res = [];
    yearMovies.forEach(function(elmt){
      if (res.indexOf(elmt) === -1) {
        res.push(elmt);
      }
    })

    totalRes = 0;
    for (var i = 0 ; i < res.length; i ++) {
      totalRes += parseInt(res[i]);
    }

  //3. For each year, create an array with only the movies from that year (filter) --> one array for each distinct year
  list = [];
  for (var i = 0 ; i < res.length ; i++) {
//Question: how to create variables with [i]? (to have as much variables as the length of the array for example)
    var year = array.filter(function(elmt) {return elmt.year === res[i]});
    //console.log('year');
    //console.log(year);
  //4. For each year, calculate the average and put it in a list
  var interimRate = 0
  year.forEach(function(elmt) {
    interimRate += parseFloat(elmt.rate).toFixed(2)*1;
  })
  var average = parseFloat(interimRate/year.length).toFixed(2)*1;

  //5. Push the average in a new array
  var result = {year: res[i], rate: average}
  list.push(result)
  }


  //7. (6 below) Create list of years in chronological order --> If several years with same average, select oldest one
  orderedList = list.sort(function(a,b) {
    if(a.year > b.year) {
      return 1;
    } else if (a.year < b.year){
      return -1
    } else {
      return 0;
    }
    })

totalOrderedList = 0;
    for (var i = 0 ; i < orderedList.length; i ++) {
      totalOrderedList += parseInt(orderedList[i].year);
    }

//6. Select the best average

var topYear = 0;
var topRate = 0;

for (var i = 0 ; i < orderedList.length ; i++) {
  if (orderedList[i].rate > topRate) {
    topRate = orderedList[i].rate;
    topYear = orderedList[i].year;
  }
}

output = 'The best year was ' + topYear + ' with an average rate of ' + topRate;

return (array.length === 0) ? undefined : output;

}

