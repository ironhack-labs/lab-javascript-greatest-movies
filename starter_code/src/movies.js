var movies;

// movies.forEach(function(movie) {
//   console.log(movie.duration);
// });

/* eslint no-restr  icted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function hourtominute(time){
  let filtered = time.split("").filter(item => ["m","i","n"," ","h"].includes(item) == false)
  return(Number(filtered.splice(0,1))*60 + Number(filtered.join(""))) ;
}

function turnHoursToMinutes(arr){
  for(i of arr){
    i.duration = hourtominute(i.duration)
  }
  return(arr)
}
console.log(turnHoursToMinutes(movies));

// 2h -> 120 min

// 1h 30min -> 90min

// [1,h, ,3,0,m,i,n]"
hourtominute("2h 50min")



// Get the average of all rates with 2 decimals 
const mrate = movies.map(function(movie) {
  return Number(movie.rate);
});

// console.log(mrate);

var sum = mrate.reduce(function(a, b) { return a + b; }, 0);

console.log(Math.round(sum/mrate.length * 100)  / 100);



// Get the average of Drama Movies
const dramaMovies = movies.filter(movie => movie.genre == "Drama")

const mrate2 = dramaMovies.map(function(movie) {
  return Number(movie.rate);
});

var sum = mrate2.reduce(function(a, b) { return a + b; }, 0);

console.log(Math.round(sum/mrate2.length * 100)  / 100);



// How many movies did STEVEN SPIELBERG
const stevenFilms = movies.filter(movie => movie.director == "Steven Spielberg")

console.log(stevenFilms.length);



// Order by title and print the first 20 titles
const mtitle = movies.map(movie  => movie.title);

mtitle.sort((a, b) => (a > b ? 1 : -1));

for(var i = 0; i < 20; i++) {
  console.log(mtitle[i]);
};



// Best yearly rate average ----- Can't seem to figure this out:/

// const myear = movies.map(movie => movie.year)

// console.log(myear);

// const mrate3 = myear.map(function(movie) {

//   return myear.rate;
// });

// console.log(mrate3);


// const mrate3 = movies.filter(movie => movie.year)

// mrate3.forEach(function(movie) {
//   console.log(movie.rate);
// });

// const myear = movies.map(movie => movie.year);

// var sum2;

// if(mrate3 == movies.year) {
//   console.log(sum2 = mrate3.reduce(function(c, d) { return c + d; }, 0));
// }

// for(var i = 0; i < 2018; i++) {
//   console.log(myear[i]);
// };

//------

// const dramaMovies = movies.filter(movie => movie.genre == "Drama")



// dramaMovies.forEach(function(movie) {
//   console.log(movie.rate);
// });