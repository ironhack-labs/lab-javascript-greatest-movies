// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies){
       //code
       let answer = movies.map((movie)=>{
           return movie.director;
       })
       return answer;
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies){
    let dramaAndSteven;
    let answer = movies.filter((movie)=>{
        for(let i=0; i<movie.genre.length; i++){
            dramaAndSteven = movie.genre[i] == "Drama" && movie.director == 'Steven Spielberg';
          if(dramaAndSteven){break;}
        }
        return dramaAndSteven;
    })
    console.log(answer);
    return answer.length;
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies){
    if(movies==0){return 0}
    else{
        let avrg;
        let count = 0;
        let answer = movies.reduce((acc, elem)=>{
            if(elem!=0){
                return acc + elem.rate;
            }
        },0)
        avrg = answer/movies.length;
        return parseFloat(avrg.toFixed(2));
   }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){
    let dmSp;
    let dramaMovies = movies.filter((movie)=>{
        for(let i=0; i<movie.genre.length; i++){
        dmSp = movie.genre[i] == "Drama";
          if(dmSp){break;}
        }
        return dmSp;
    })
    return ratesAverage(dramaMovies);
  
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies){
    let byYear = movies.sort((a,b)=>{
        if(a.year>b.year){return 1;}
        else if(a.year<b.year){return -1;}
        else{
            if(a.title>b.title){return 1;}
            else if(a.title<b.title){return -1;}
            else{return 0;}
        }
    });
    return byYear;
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies){
    let the20first=[];
    let titlesInAlphabeticalOrder = movies.sort((a,b)=>{
        if(a.title>b.title){return 1;}
        else if(a.title<b.title){return -1;}
        else{return 0;}
    });
    let arrOftitlesInAlphabeticalOrder = titlesInAlphabeticalOrder.map((elem,index)=>{
      return elem.title;
    });
    for(let i=0; i<20; i++){
        the20first.push(arrOftitlesInAlphabeticalOrder[i]);
    }
  return the20first;
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
