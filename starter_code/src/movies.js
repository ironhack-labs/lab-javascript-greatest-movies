/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(movies){
    
    let totalSum = movies.reduce(function(acc, val){
        if (val.rate)
        acc+= parseFloat(val.rate);
        return acc;
    },0);
   
    let average= totalSum / movies.length;
    // console.log(average)
    return parseFloat(average.toFixed(2));
}


// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){

    // let dramaMovie= movies.forEach(i => {
    //    let drama= i.genre.filter(function(j){
    //        return j==="Drama";
    //     }); return drama;
    // });

let dramaMovie=movies.filter(function(movie){
    // return movie.genre.includes("Drama");
    return movie.genre.indexOf("Drama")!==-1;
});

if (dramaMovie.length===0) return 0;

return ratesAverage(dramaMovie);
    
}


// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByDuration(movies){
let sorted=movies.sort(function(a,b){
if (a.duration===b.duration){
    return a.title.localeCompare(b.title);
}
    return a.duration-b.duration;
});
// console.log(sorted);
return sorted;
}; 

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(movies){
    let spielberg=movies.filter(function(i){
 return (i.director==="Steven Spielberg" && i.genre.indexOf("Drama")!==-1);
    }) 
   
    return spielberg.length;
};


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies){
let sortTitle=movies.sort(function(a,b){
return a.title-b.title;
}) 

let title20 = sortTitle.slice(0,20);

let titleArr=[];
title20.forEach(function(i){
    titleArr.push(i.title);
})
return titleArr;
};

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies){
let newTime=movies.map(function(i){
    let timeArr=i.duration.split(" ");

if ((timeArr[1]=== false) && (timeArr[0].slice(-2)==="min")){
    let hour= 0;
let minute= parseFloat(timeArr[0]);
}else if ((timeArr[1]=== false) && (timeArr[0].slice(-1)==="h")){
    let hour= (parseFloat(timeArr[0]))*60;
let minute= 0;
}else{

    let hour= (parseFloat(timeArr[0]))*60;
let minute= parseFloat(timeArr[1]);
}
let totalTime=parseFloat(hour+minute);
return i.duration=totalTime;
})
return newTime;
};

// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(movies){
let uniqueYears=movies.filter(function(value,index,arr){
return value.year.indexOf(value.year[index])===index;
})

let averageByYear= uniqueYears.forEach(function(i){
    if (i.year===movies[i].year){
    return ratesAverage(movies), i.year;
    }
})

let highestAvg=averageByYear[0];
for (let i=1; i<averageByYear.length;i++){
    if (highestAvg<averageByYear[i]){
        highestAvg=averageByYear[i];
    }
    return highestAvg;
}

return highestAvg;

};