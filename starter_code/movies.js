/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
movieLength = []
for (let i =0; i<movies.length;i+=1){
  movieLength.push((movies[i].duration))

}
let alphaCharReg = /[a-z]/ig;
for (let i =0; i<movieLength.length;i+=1){
  movieLength[i] = movieLength[i].replace(alphaCharReg,'')
}
console.log(movieLength)

// Get the average of all rates with 2 decimals


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
