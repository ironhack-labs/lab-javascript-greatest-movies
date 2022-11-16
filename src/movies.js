// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directorsArr = moviesArray.map( movie=> movie.director);
    let result = directorsArr.filter((item,index)=>{
        return directorsArr.indexOf(item) === index;
      })
    
    return result;
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    
    const arrDrama = moviesArray.filter(movie=>{
        return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    });
    
    let count = arrDrama.length;
    
    return count;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0){
        return 0;
    }
    
    const scoresArr = moviesArray.reduce(function(acc, movie){
        if (movie.score === undefined){
            return acc;
        }else{
            return  acc += movie.score;
        }
       
    },0);
    let avg = scoresArr/moviesArray.length;
    let avgRounded = Math.round(avg * 100)/100;
    
    
    return avgRounded;
  
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const arrDrama = moviesArray.filter(movie =>{
        return movie.genre.includes('Drama')
    });
    
    let allDrama = arrDrama.reduce(function(acc,movie){
        
        
         if (movie.score === undefined){
            return acc;
        }else{
            return  acc += movie.score;
        }
       
    },0);


    let avg = allDrama/arrDrama.length;
    let avgRounded = Math.round(avg * 100)/100;
    
    if(arrDrama.length === 0){
        return 0;
    }
    return avgRounded;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const copy = [...moviesArray];
   const sortedArr = copy.sort((a,b)=>{
    if(a.year < b.year){
        return -1;
    }
    if(a.year > b.year){
        return 1;
    }
    if(a.year === b.year){
        if(a.title.toLowerCase() < b.title.toLowerCase()){
            return -1
        }
        if(a.title.toLowerCase() > b.title.toLowerCase()){
            return 1;
        }
    }
    return 0;
    
   });
   return sortedArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const copy = [...moviesArray];
    let titlesArr = copy.map(movie=> movie.title);
   
    const sortedArr = titlesArr.sort((a,b)=>{
        if(a < b){
            return -1;
        }
        if( a > b){
            return 1;
        }
        else{
            return 0;
        }
    });

    const twenty = sortedArr.slice(0, 20);
    
    return twenty;
    
 }


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function loop(newArr){
    for(let duration of newArr){
    if(duration.charAt(1) === "h" && duration.charAt(5) === "m"){
        let hours = duration.slice(0,1);
        let minutes = duration.slice(3,5);
        let numberHours = parseInt(hours);
        let numberMinutes = parseInt(minutes);
        duration = numberHours + " " + numberMinutes
        
    }
    else if(duration.charAt(1) === "h" && !duration.includes("min")){
        let hours = duration.slice(0,1);
        let numberHours = parseInt(hours);
        duration = numberHours;
    }}
    console.log(newArr)
    return newArr
}
function turnHoursToMinutes(moviesArray) {
    const copy = [...moviesArray];
    const newArr = copy.map(movie=> movie.duration);
    loop(newArr);

     

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
