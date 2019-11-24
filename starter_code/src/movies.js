function orderByYear(array) {
  var newArray = Object.assign([], array);
  newArray
    .sort(function(a, b) {
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
      return 0;
    })
    .sort(function(a, b) {
      return a.year - b.year;
    });
  return newArray;
}

function howManyMovies(array) {
  let count = 0;
  array
    .filter(function(dir) {
      return dir.director == "Steven Spielberg";
    })
    .forEach(function(gen) {
      gen.genre.forEach(function(t) {
        if (t == "Drama") {
          count++;
        }
      });
    });
  return count;
}

function orderAlphabetically(array) {
  let solution = [];
  let final = [];
  var newArray = Object.assign([], array);
  solution = newArray
    .sort(function(a, b) {
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
      return 0;
    })
    .map(function(a) {
      return a.title;
    })
    .map(function(a, solution) {
      if (solution < 20) {
        final.push(a);
      }
    });
  return final;
}

function ratesAverage(array) {
  let average = 0;
  if (array.length === 0) {
    return average;
  } else {
    average =
      array
        .map(function(r) {
          if (r.rate) {
            return r.rate;
          } else return 0;
        })
        .reduce(function(acc, e) {
          if (e === false) {
            e = 0;
          }
          return acc + e;
        }) / array.length;
    if (Number.isInteger(average)) {
      return parseFloat(average);
    } else return parseFloat(average.toFixed(2));
  }
}
function dramaMoviesRate(array) {
  let newArray = [];
  array.forEach(function(gen) {
    gen.genre.forEach(function(t) {
      if (t == "Drama") {
        newArray.push(gen);
      }
    });
  });

  return ratesAverage(newArray);
}
function turnHoursToMinutes(array){
  var minutes = 0;
  var time = [];
  //var newArray = Object.assign([], array);
  var newArray = JSON.parse(JSON.stringify(array));
  newArray.map(function(e){
    if(e.duration.length > 5){
      time = e.duration.split(' ');
  minutes = (parseInt(time[0]) * 60) + parseInt(time[1])
   e.duration = minutes;
   return e;
    }else if(e.duration.length === 5) {
      minutes = parseInt(e.duration);
      e.duration = minutes;
      return e;
    }else {
      minutes = parseInt(e.duration)*60;
      e.duration = minutes;
      return e;
    }
  
})
return newArray;
}