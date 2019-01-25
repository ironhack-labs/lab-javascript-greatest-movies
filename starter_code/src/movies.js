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
// function pushRatings(){
//   for (let i =0; i<movies.length;i+=1){
//     avgRating.push((movies[i].rate))
//     }
//     splitRating(avgRating)
//   }
//
//   function splitRating(array){
//     for (let i =0; i<array.length;i+=1){
//       array[i] = parseFloat(array[i],10)
//     }
//
//     array = (array.reduce((a, b) => a + b, 0)/array.length).toFixed(2)
//     console.log('Average: ' + array);
//   }
//
// pushRatings()



// Get the average of Drama Movies
//
//   function getDramas(){
//     const dramaMovies = movies.filter(function(movies){
//       return movies.genre == "Drama"
//     })
//     dramaRatings = []
//
//     for (let i = 0; i<dramaMovies.length; i+=1){
//       dramaRatings.push(dramaMovies[i].rate)
//     }
//     avgDramaRating(dramaRatings)
//   }
//
//   function avgDramaRating(array){
//     for (let i =0; i<array.length;i+=1){
//       array[i] = parseFloat(array[i],10)
//     }
//
//     array = (array.reduce((a, b) => a + b, 0)/dramaRatings.length).toFixed(2)
//     console.log('Average Drama Rating : ' + array);
//   }
// getDramas()
// // Order by time duration, in growing order
//
//
// function ascendingOrder(){
//   let moviesCopy = movies
//   moviesCopy.sort((a, b) => (a.duration>b.duration) ? 1 : -1)
//   for (let i =0; i<moviesCopy.length;i+=1){
//     console.log(moviesCopy[i].title, moviesCopy[i].duration )
//   }
// }
// ascendingOrder()
// // How many movies did STEVEN SPIELBERG
// function directorMovies(){
// const director = movies.filter(function(movies){
//   return movies.director == "Steven Spielberg"
// })
//
// spielBergMovies = []
//
// for (let i = 0; i<director.length; i+=1){
//   spielBergMovies.push(director[i].title)
// }
// console.log("Steven Spielberg movies has "+ spielBergMovies.length+ " movies: "+ spielBergMovies )
// }
// directorMovies()


// // Order by title and print the first 20 titles
// TODO: "The"
// function sortByTitle(){
//   let moviesCopy = movies
//   moviesCopy.sort((a, b) => (a.title>b.title) ? 1 : -1)
//   for (let i =0; i<moviesCopy.length;i+=1){
//     console.log(moviesCopy[i].title.slice(0,20))
//   }
// }
// sortByTitle()


// Best yearly rate average
// const yearOfMovie = movies.sort(function(movies){
//       return movies.year == ""
//     })
//     console.log();
