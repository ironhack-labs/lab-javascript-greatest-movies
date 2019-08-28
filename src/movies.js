/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
const ratesAverage = arr => {
    return parseFloat((arr.reduce((sum, current) => {  return sum += current.rate; }, 0)/arr.length).toFixed(2));
}
 
// Iteration 2: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = arr => {
    let filtered = arr.filter(movie => movie.genre.includes('Drama'));
    if(filtered.length == 0){return 0}
    return parseFloat((filtered.reduce((sum, current) => {  return sum += current.rate; }, 0)/filtered.length).toFixed(2));
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
const orderByDuration = arr => {
    return arr.sort((a,b)=>{
        if (a.duration > b.duration) return 1;
        if (a.duration < b.duration) return -1;
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
    })
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
const howManyMovies = arr => {
    return arr.filter(movie => {
        if(movie.director.includes("Spielberg") && movie.genre.includes("Drama")){
            return movie;
        }
    }).length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = arr => {
    let sortedArr = arr.sort((a,b)=>{
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
    });
    let limit = [];
    sortedArr.forEach(movie => {
        if(limit.length < 20){
            limit.push(movie.title);
        }
    })
    return limit;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes = arr => {
    let convertHours = arr.map(el => {
        if (!el.duration.slice(0, 1) ||
            el.duration.slice(0, 1) === 0 ||
            !el.duration.slice(0, 2).includes("h")){
                return 0; 
            } else return parseInt(el.duration.slice(0, 1) * 60)
    });
    let convertMinutes = arr.map(el => {
        let minutes = el.duration.slice(-5, -3);
        if (!minutes) return 0;
        else {
            minutes = minutes.replace(" ", 0);
            return parseInt(minutes);
        }
    });
    let conversionNumber = [];
    for(let i = 0; i < convertMinutes.length; i++){
        conversionNumber.push(
            {duration: parseInt(convertHours[i] + convertMinutes[i])}
        );
    } return conversionNumber;
}

// My Original Draft:
//
// const turnHoursToMinutes = arr => {
//     return arr.map(el => {
//         if(el.duration.includes("h") && el.duration.includes("min")){
//         let hrs = el.duration.split("h")[0];
//         let mins = el.duration.split(" ")[1].split("min")[0];
//         if(mins == 0){
//             el.duration = Number(hrs) * 60;
//             console.log(el.duration)
//         } else if(hrs == 0){
//             el.duration = Number(mins);
//         } else {
//             el.duration = (Number(hrs) * 60) + Number(mins);
//         }
//         return el;
//         } else if (el.duration.includes("h")){
//             let hrs = el.duration.split("h")[0];
//             el.duration = Number(hrs) * 60;
//         } else if (el.duration.includes("min")){
//             let mins = el.duration.split(" ")[1].split("min")[0];
//             el.duration = Number(mins);
//         }
//         return el;
//     });
// }

// Andres' Advanced Scripting:
//
// const turnHoursToMinutes = arr => {
//     let minuteArr = arr.map(el => {
//         let newArr = Object.assign({}, el);
//         newArr.duration = newArr.duration.split(' ').reduce((total, current) => total += (current.includes('h')) ? parseInt(current.replace(/h/g, '')) * 60 : parseInt(current.replace(/min/g, '')), 0);
//         return newArr;
//     })
//     return minuteArr;
// }

// BONUS Iteration: Best yearly rate average - Best yearly rate average
