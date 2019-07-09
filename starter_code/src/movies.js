/* eslint no-restricted-globals: 'off' */
/*
var movies = [
  {
    title: 'The Shawshank Redemption',
    year: '1994',
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    rate: '9.3'
  },
*/



// Turn duration of the movies from hours to minutes  

      let moviesCopy1 = [...movies]

      function turnHoursToMinutes (movies){

      }

// Get the average of all rates with 2 decimals 
    function ratesAverage(movies) { 
     
        const average = movies.reduce((acc, elm) => {
        return acc + parseFloat(elm.rate)
      
        }, 0)


        console.log((average/movies.length).toFixed(2))
        return parseFloat((average/movies.length).toFixed(2))
    }
  
    // Get the average of Drama Movies
    //Explicacion de Teo para forzar a una arrow function a tener nombre   const dramaMovies = (movies) => {}


    

        function dramaMoviesRate(movies){
          movies.filter(function(elm){
            const genero=elm.genre
            console.log(genero)
            genero.filter(function (elm2){
              if(elm2)
              console.log(elm2==="Drama")
            })
          })

        }



  //     function dramaMoviesRate(movies){
  //     const dramaMovies = movies.filter(elm => elm.genere.includes('Drama'))
  //     const dramaAgv = dramaMovies.reduce((acc, elm) => {
  //     return acc + parseFloat(dramaMovies.rate)
  //     }, 0)
  //     return parseFloat((dramaAgv/dramaMovies.length).toFixed(2))
  //      }




// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG

const steven = movies.filter((movies) => movies.director ==='Steven Spielberg')

// Order by title and print the first 20 titles


// Best yearly rate average
