// All time Movies Lab
// Cameron Chromiak
// Oscar Leon


/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

//movieLength so original objects are not altered
movieLength = []

function stripText(){
  for (let i =0; i<movies.length;i+=1){
    movieLength.push((movies[i].duration))

  }
  let alphaCharReg = /[a-z]/ig;
  for (let i =0; i<movieLength.length;i+=1){
    movieLength[i] = movieLength[i].replace(alphaCharReg,'')
  }


  console.log(movieLength)
  for (let item = 0; item<movieLength.length;item+=1){
    // movieLength[item].split(" ")
    movieLength[item][1] = Number(movieLength[item].split(' ')[1])
    movieLength[item] = Number(movieLength[item].split(' ')[1])


  }

  console.log(movieLength)
}


stripText()

// Get the average of all rates with 2 decimals


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
