// All time Movies Lab
// Cameron Chromiak
// Oscar Leon


/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

// movieLength so original objects are not altered
movieLength = []

function stripText(){
  for (let i =0; i<movies.length;i+=1){
    movieLength.push((movies[i].duration))

  }
  let alphaCharReg = /[a-z]/ig;
  for (let i =0; i<movieLength.length;i+=1){
    movieLength[i] = movieLength[i].replace(alphaCharReg,'')
  }

  console.log(movieLength.sort())
  for (let item = 0; item<movieLength.length;item+=1){
    movieLength[item] = movieLength[item].replace(' ','')

    let  hours = movieLength[item][0]

      if (movieLength[item].length == 1){
        movieLength[item] = Number(movieLength[item])
        // change to minutes
        movieLength[item] *= 60

      }
      else if (movieLength[item].length == 2){
        movieLength[item] = Number(movieLength[item])
        // if movieLength[item].length
      }
      else if (movieLength[item].length == 3){
        movieLength[item] = Number(movieLength[item])
        movieLength[item][1] *= 60
      }
      else if (movieLength[item].length == 3){
        movieLength[item] = Number(movieLength[item])
      }
    }
}
  console.log(movieLength.sort())

stripText()

// Get the average of all rates with 2 decimals
// avgRating = []
//
// function pushRatings(){
//   for (let i =0; i<movies.length;i+=1){
//     avgRating.push((movies[i].rate))
//     }
//     splitRating(avgRating)
//   }
//
//   function splitRating(array){
//     for (let i =0; i<array.length;i+=1){
//       array[i] = array[i].replace('.',' ')
//     }
//     convertToInt(array)
//   }
//
//
// function convertToInt(array){
//   firstNum = []
//   secNum = []
//   for (let i =0; i<array.length;i+=1){
//       array[i] = array[i].split(' ')
//       array[i][0] = Number(array[i][0])
//       firstNum.push(array[i][0])
//       array[i][1] = Number(array[i][1])
//       secNum.push(array[i][1])
//   }
//   console.log(firstNum.reduce((a, b) => a + b, 0)/250);
//   console.log(secNum.reduce((a, b) => a + b, 0)/250);
//
//
//
// }
//
//
// pushRatings()



// console.log(avgRating)

// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
