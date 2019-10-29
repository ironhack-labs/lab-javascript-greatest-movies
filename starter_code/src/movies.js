/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

function ratesAverage(array){

    let finalValue = array.reduce((total, current)=>{
      
        return total + Number(current.rate);
        
        }, 0)/array.length;
    
        return Number(finalValue.toFixed(2));
}

// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array){

  let dramas = array.filter((each)=>{

      for(i = 0; i < each.genre.length; i++){
        if(each.genre[i] === 'Drama'){
          return true;
        }
      }
    });

    if(dramas.length === 0){
        return 0;
    }else {
        return ratesAverage(dramas);
    }

}


// Iteration 3: Ordering by year - Order by year, ascending (in growing order)
function turnHoursToMinutes(array){
    let realArr = array.map((each)=>{
        return {
        title: each.title,
        year: each.year,
        director: each.director,
        duration: each.duration,
        genre: each.genre,
        rate: each.rate
        }
    })
    realArr.forEach(each => {
        let time = 0;
        let otherTime = "";
        //Fixes hours
        if (each.duration.match("h")){
        time += Number(each.duration.substr(0, each.duration.indexOf("h")))*60;
        }
      
        //Removes m and turns to a number
        if(each.duration.match("m")){
          otherTime = each.duration.substr(each.duration.indexOf(' ')+1);
          otherTime = Number(otherTime.substr(0, otherTime.indexOf("m")));
      
          //Adds minutes to the time
          time += otherTime;
          }
          
          each.duration = time;
      })
    
        return realArr.sort((a,b)=>{
        if(a.duration > b.duration){
            return -1;
        }else if(b.duration > a.duration){
            return 1;
        }else{
            return 0;
        }
    }, 0);
}

//Sort by year


function orderByYear(array){
    return array.sort((a,b)=>{
        if(a.year < b.year){
            return -1;
        }else if(b.year < a.year){
            return 1;
        }else{
            return array.sort((a,b)=>{
                if(a.title > b.title){
                    return -1;
                }else if(b.title > a.title){
                    return 1;
                }else{
                    return 0;
                }
        }, 0);
        }
    }, 0);
}



// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function dramaCheck(movie){
    for(i = 0; i < movie.genre.length; i++){
        if(movie.genre[i] === 'Drama'){
            return true;
        }
    }
}

function howManyMovies(array){

    let filteredArray = array.filter((movie)=>{

        if(movie.director === "Steven Spielberg" && dramaCheck(movie) === true){
            return 1;
        }else{
            return 0;
        }
    },0);

    return filteredArray.length;
}


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array){

    let firstArray = array.sort((a,b)=>{

        if(a.title < b.title){
            return -1;
        }else if(b.title < a.title){
            return 1;
        }else{
            return 0;
        }
    });

    let titlesArray = firstArray.map((each)=>{
        return each.title;
    })

    titlesArray.splice(20);
    return titlesArray;

}


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function yearlyAvg(array, yr){
    let sum = 0;
    let counter = 0;
    for(i = 0; i < array.length; i++){
        if(yr === array[i].year){
            sum += Number(array[i].rate);
            counter++;
        }
    }
    return sum/counter;

}

function bestYearAvg(movies){

    let tempAvgArray = [];
    let finalArray = [];
    let yearsArray = movies.map((each)=>{

        return each.year;

    });

    onlyYearsArray = [...new Set(yearsArray)];
    console.log(onlyYearsArray);


    for(i = 0; i < onlyYearsArray.length; i++){
        
        if(movies[i].year === onlyYearsArray[i]){
            tempAvgArray.push(yearlyAvg(movies, onlyYearsArray[i]));
            console.log(onlyYearsArray[i]);
            console.log(yearlyAvg(movies, onlyYearsArray[i]));
            console.log(tempAvgArray);
        }

    }

}