// All time Movies Lab
// Cameron Chromiak
// Oscar Leon


/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

//movieLength so original objects are not altered
movieLength = []

function convertStringToInt(array){
  array.forEach(function(item){
    item.parseInt(item,10)
  })
}

function stripText(){
  for (let i =0; i<movies.length;i+=1){
    movieLength.push((movies[i].duration))

  }
  let alphaCharReg = /[a-z]/ig;
  for (let i =0; i<movieLength.length;i+=1){
    movieLength[i] = movieLength[i].replace(alphaCharReg,'')
  }
  convertedNumber = convertStringToInt(movieLength)
  console.log(movieLength.sort())
}


stripText()

// Get the average of all rates with 2 decimals


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
