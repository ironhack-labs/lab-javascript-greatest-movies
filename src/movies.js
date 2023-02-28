

    // Iteration 1: All directors? - Get the array of all directors.
    // _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
    // How could you "clean" a bit this array and make it unified (without duplicates)?
    function getAllDirectors(moviesArray) {
       const directors = moviesArray.map((currentmovie) => 
         currentmovie.director
       )
       return directors;
    }
    
    
    
    // Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
    function howManyMovies(moviesArray) {
    
       const totalMovies = moviesArray.filter(function (currentMovie) {
        if(currentMovie.director === "Steven Spielbeg" && currentMovie.genre.includes("Drama")) {
             return true;
        } else {
            return false;
        } 
        
       });
    
       return totalMovies.length;
    }
    
    
    // Iteration 3: All scores average - Get the average of all scores with 2 decimals
    function scoresAverage(moviesArray) {
        const totalScore = moviesArray.reduce(function(accumulator, currentMovie) {
            const newAccumulator = accumulator + currentMovie.score;
     
            return newAccumulator;
        }, 0);
     
        return averageScore = totalScore / moviesArray.length;
    }
       
    
    
    
    
    // Iteration 4: Drama movies - Get the average of Drama Movies
    function dramaMoviesScore(moviesArray) {
        const averageScoreDrama = moviesArray.reduce(function(acc, currentDrama) {
            const newAcc = acc + currentDrama.score;
            if (movies.genre.includes("Drama")) {
              
                return true;
            } else {
                return false;
            }
            
            
        }, 0);
    
        return averageScoreDrama;
    }
    
    