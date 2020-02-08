/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(inputArray){

    let newArray = inputArray.slice()
    let orderMovies = newArray.sort(function (a, b) {

        if(a.year > b.year ) {
            return 1
        }
        else if (a.year < b.year ){
            return -1
        } 
        else if (a.year == b.year){
            return (a.title.localeCompare(b.title))
        }
    })

    return orderMovies
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(inputArray){
 
    let filteredDirectors = inputArray.filter(movie => movie.director.includes('Steven Spielberg'))
    
    let finalFilter = filteredDirectors.filter(item => item.genre.includes('Drama'))
      
    return finalFilter.length
  }



// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(inputArray){
    // let movieTitles = inputArray.map(movie => movie.title) 
    
    // if(movieTitles.length < 20){return movieTitles}
    


    let movieTitles =  inputArray.slice()
    
    let sortedTitles = movieTitles.sort((a, b) => {
        if(a.title > b.title){
            return 1
        }else{
            return -1
        }
    });

    let titles= sortedTitles.map(movie=>{
        return movie.title
    })

    
    let  firstTwenty= titles.slice(0,20)
    
    // let firstTwenty = []
    // for(let i=0; i<20; i++){
    //   firstTwenty.push(sortedTitles[i])
    // }
    
    //let sortedTitles = firstTwenty.sort();
    
    
    return firstTwenty
    
  }

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(inputArray){

    if(inputArray.length == 0){
        return 0
    }

    let ratings = inputArray.map(movie => movie.rate); 
    let sumReviews = ratings.reduce((sum, movie) => sum + movie);
    let avgReview = sumReviews/ratings.length;
    let roundedRatings = Math.round(avgReview * 100) / 100;
    
    return roundedRatings
  }


// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(inputArray){
  
    let dramaMovies = inputArray.filter(movie => movie.genre.includes('Drama'));
    
    return ratesAverage(dramaMovies)
  }


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(inputArray){
  
    let timeStrings = inputArray.map(movie => movie.duration);
    let timeArrays = timeStrings.map(time => time.split(" "));
    
    
    
    let timeUnits = timeArrays.map(function(unit){

      
      let hours = 0;
      let minutes =0;
      
      if(unit.length == 1){
        
        if(unit[0].includes('min')){
            minutes = parseInt(unit[0].substr(0,2), 10)
          }
          else{
            hours = parseInt(unit[0].substr(0,1), 10)
          }
  
        
      } else{

        
        hours = parseInt(unit[0].substr(0,1), 10)
        minutes = parseInt(unit[1].substr(0,2), 10)
        
      }
      
      let totalMinutes = (hours*60)+ minutes
      
      return totalMinutes
    });
    
   
    let newArray = [];
    
    for(let i=0; i<inputArray.length; i++){
      
      let newMovie = {
      title: inputArray[i].title,
      director: inputArray[i].director,
      genre: inputArray[i].genre,
      rate: inputArray[i].rate,
      year: inputArray[i].year,
      duration: timeUnits[i]
      }
      
      newArray.push(newMovie)
      
    }
      
    
    return newArray;
  }

// BONUS Iteration: Best yearly rate average - Best yearly rate average
