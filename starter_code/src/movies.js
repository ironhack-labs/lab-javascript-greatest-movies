/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movie){
  let sum = 0;
  for(let i = 0; i < movie.length; i++){
    if (movie[i].rate === ""){
      sum += 0;
    } else{
      sum += parseFloat(movie[i].rate)
    //console.log(rating)
    }

  }
  return sum /= movie.length;
  //console.log(sum)
}
ratesAverage(movies)

// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array){
  var filteredDrama = array.filter(function(elem){
    return elem.genre.includes("Drama");
  })
  if(filteredDrama == 0){
    return 0;
  }
  return parseFloat(ratesAverage(filteredDrama).toFixed(2))

  //console.log(filteredDrama)
}




//dramaMoviesRate(movies)



// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

/*
function orderByYear(movie){
  const orderingYears = movies.sort((movie1, movie2) => {
    if (movie1.year > movie2.year) {
      return 1
    } else if(movie1.year < movie2.year){
      return -1
    } else if(movie1.year === movie2.year){
      if (movie1.title > movie2.title) {
      return 1
    } else if(movie1.title < movie2.title){
      return -1
    }
    }
  })
  return orderingYears
} */

const orderByYear = movies.sort((a,b) => a.year -b.year)

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(movie){
  const spielbergArray = movie.filter(elem => elem.director.includes('Steven Spielberg'))
  const spielbergDrama = spielbergArray.filter(elem => elem.genre.includes('Drama'))
  return spielbergDrama.length;
}

//howManyMovies(movies)










// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movie){
   let arrayTitle = [];
   for(let i =0; i<movie.length; i++){
     arrayTitle.push(movie[i].title)
   }
   arrayTitle.sort();
   return arrayTitle.slice(0,20);
 }
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr){
var newMovieSet = movies.map(function(num){
if(num.duration.includes(" ")){
   var splitTime = num.duration.split(" ");
  var convertedNum = parseInt(splitTime[0]) * 60 + parseInt(splitTime[1]);
   return {
      title: num.title,
      year: num.year,
      director: num.director,
      duration: convertedNum,
      genre: num.genre,
      rate: num.rate
    }
    //console.log(splitTime)
} else {
    return {
      title: num.title,
      year: num.year,
      director: num.director,
      duration: num.duration,
      genre: num.genre,
      rate: num.rate
    }
}
})
  return newMovieSet;
}




// BONUS Iteration: Best yearly rate average - Best yearly rate average



/*
// Iteration 1: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movie){
  let sum = 0;
  for(let i = 0; i < movie.length; i++){
    if (movie[i].rate === ""){
      sum += 0;
    } else{
      sum += parseFloat(movie[i].rate)
    //console.log(rating)
    }

  }
  return sum /= movie.length;
  //console.log(sum)
}
ratesAverage(movies)

// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array){
  var filteredDrama = array.filter(function(elem){
    return elem.genre.includes("Drama");
  })
  if(filteredDrama == 0){
    return 0;
  }
  return parseFloat(ratesAverage(filteredDrama).toFixed(2))

  //console.log(filteredDrama)
}
dramaMoviesRate(movies)



///3
 function orderByYear(movie){
   const orderingYears = movies.sort((movie1, movie2) => {
     if (movie1.year > movie2.year) {
       return 1
     } else if(movie1.year < movie2.year){
       return -1
     } else if(movie1.year === movie2.year){
       if (movie1.title > movie2.title) {
       return 0
     } else if(movie1.title < movie2.title){
       return -1
     }
     }
   })
   console.log(typeof orderingYears)

   //return orderingYears
 }

 function orderByYear2(movie){

   const ordered = movie.sort((a,b) => a.year - b.year)

  console.log(ordered)
  return ordered
}

orderByYear2(movies)
orderByYear(movies)


//const sortedActivities = activities.sort((a, b) => b.date - a.date)


orderByYear(movies)
*/



/*
const alphabetic = students.sort((student1, student2) => {
  if (student1.name > student2.name) {
    return 1
  } else if (student1.name < student2.name) {
    return -1
  } else {
    if (student1.length > student2.length) {
      return 1
    } else if (student1.length < student2.length) {
      return -1
    }
  }
  return 0
})*/
/*
function orderAlphabetically(array){
  var titleArray = [];
  array.forEach(function(elem){
    titleArray.push(elem.title);
  });
  titleArray.sort();
  if (titleArray.length >= 20){
    titleArray = titleArray.slice(0,20);
  }
  return titleArray;
}
orderAlphabetically(movies)
*/
