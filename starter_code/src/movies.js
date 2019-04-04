/* eslint no-restricted-globals: 'off' */
/year of the movies from hours to minutes

/*let turnHoursToMinutes = (movies) => {
  var minutesArray = movies.map((eachMovie) =>{
    let movie = eachMovie.duration.split(' ')
    console.log(eachMovie.duration, movie)
    let totalMinutes = 0;
     movie.forEach((m)=> {
       console.log(m)
       if(m.includes('h')) {
         totalMinutes += Number(m.replace('h','')) * 60;
       }
       if (m.includes('m')) {
         totalMinutes += Number(m.replace('m',''))
       }
     })
     return {...eachMovie, duration: totalMinutes}
  })
  console.log(minutesArray)
  return minutesArray
}
turnHoursToMinutes(movies);*/

function turnHoursToMinutes(arr) {
  var newArray = arr.map(convert => {
    let splitObj = convert.duration.split(" ");
    let minutes = 0;
    splitObj.forEach(m => {
      if (m.includes("h")) {
        minutes += Number(m.replace("h", "")) * 60;
      }
      if (m.includes("min")) {
        minutes += Number(m.replace("min", ""));
      }
    });
    return { ...convert, duration: minutes };
  });
  //console.log(newArray);
  return newArray;
}

// Get the average of all rates with 2 decimals
let ratesAverage = movies => {
  let rates = 0;
  movies.forEach(function(avgrat) {
    var numfloat = parseFloat(avgrat.rate);
    //console.log(numfloat)
    rates += numfloat;
  });
  let avg = Number((rates / movies.length).toFixed(2));
  //console.log(avg);
  return avg;
};

ratesAverage(movies);

// Get the average of Drama Movies

let dramaMoviesRate = movies => {
  var drama = movies.filter(function(cat) {
    //Filter array to only include drama movies
    if (!cat.rate) {
      cat.rate = 0;
    }
    return cat.genre.includes("Drama"); //&& cat.rate
  });

  let ratings = drama.reduce((sum, movie) => {
    return sum + parseFloat(movie.rate);
  }, 0);
  let avg = Number((ratings / drama.length).toFixed(2));

  return avg;
};
dramaMoviesRate(movies);

// Order by time duration, in growing order
let orderByDuration = newerArray => {
  newerArray.sort(function(a, b) {
    if (a.duration < b.duration) {
      return -1;
    }
    if (a.duration > b.duration) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
  //console.log(newerArray);
  return newerArray;
};

orderByDuration(turnHoursToMinutes(movies));
// How many movies did STEVEN SPIELBERG

let howManyMovies = (movies) => {
  if (movies.length === 0){
    return undefined
  } 
  let spiel = movies.filter(s => s.genre.includes('Drama') && s.director === 'Steven Spielberg')
  console.log(spiel)
  return `Steven Spielberg directed ${spiel.length} drama movies!`
}
howManyMovies(movies)

// Order by title and print the first 20 titles
let orderAlphabetically = (movies) => {

inorder =  movies.map((order) => order.title).sort().slice(0,20)
console.log(inorder)
return inorder
}
orderAlphabetically(movies)
// Best yearly rate average
let bestYearAverage = (movies) => {
  movies.sort((a,b) => {
    if (a.year < b.yeat) {
      return -1;
    }
    if (a.year > b.year) {
      return 1;
    }
    return 0
  })

  let bestavg = 0;
  bestYear = ''
  let year = 0,
    sum = 0,
    count=0

  for (let i=0; i < movies.length; i++){
    if (movies[i].year != year) {
      if (bestavg < sum/count) {
        bestavg = (sum / count)
        bestyear = movies[i].year
      }
      count = 0;
      sum = 0;
      year = movies[i].year
    } 
    sum += Number(movies[i].rate)
    count += 1
  }
}
