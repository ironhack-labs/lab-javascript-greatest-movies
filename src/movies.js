// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies){

    const newArr = movies.map(movies => movies.director);
    return newArr;

}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct? 
    function howManyMovies(movies){
        let newArr = [];
        if(!movies.length) return 0;
        for(i = 0;i < movies.length;i++){
            for(j = 0;j < (movies[i].genre).length;j++){
           let test = (movies[i].genre[j]).includes("Drama");
           let test2 = (movies[i].director).includes("Steven Spielberg");
            if(test === true && test2 === true){
            newArr.push(movies[i]);
            
          }
        }
        }
        
        return newArr.length;
      }
   


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies){
    if(!movies.length) return 0;
    let newArr = [];
    for(i=0;i<movies.length;i++){
    newArr.push(movies[i].rate);
    }
    let test = newArr.reduce((som, newArr)=> som += newArr, 0) / newArr.length;

    return Number(test.toFixed(2));
 }

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){
    let newArr = [];

    for(i = 0;i < movies.length;i++){
        for(j = 0;j < (movies[i].genre).length;j++){
            let test = (movies[i].genre[j]).includes("Drama");
            if(test === true){
                newArr.push(movies[i]);
                
              }
        }
    }
    
    const num = newArr.reduce((acc, end) => acc + end.rate, 0)
     let avg = num / newArr.length;
    return parseFloat(avg)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies){
    const newArr = movies.map((movies) => movies);
    newArr.sort((a, b)=>{
        if(a.year > b.year){
            return 1;
        }else if(b.year > a.year){
            return -1;
        }else{
            if(a.title > b.title){
                return 1;
            }else if(b.title > a.title){
                return -1;
            }
            return 0;
        }
        });

        return newArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies){
    let newArr = [];
    movies.forEach(function(movies){
      newArr.push(movies.title);
    });

    return newArr.sort();

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
