/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 


// function ratesAverage(arr){
//     let sum = (acc, currVal) => Number(acc) + Number(currVal.rate);
//     return arr.reduce(sum,0)/arr.length;
// }

//récupère la moyenne des rates d'un array
function ratesAverage(arr){
    let sum = (accumulator,currentValue) => Number(accumulator) + Number(currentValue.rate);  
    return Number((arr.reduce(sum,0)/arr.length).toFixed(2));
}

  

// Iteration 2: Drama movies - Get the average of Drama Movies


function dramaMoviesRate (arr){
    const dram = arr.filter((movie) => movie.genre.includes('Drama') === true);
    if (dram.length === 0){
        return 0;
    }
    return ratesAverage(dram);
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)



// function orderByDuration(arr){
//     return arr.sort((a,b) => {
//       if (a.duration < b.duration) {
//         return -1;
//       }
//       else if (b.duration < a.duration) {
//         return 1;
//       }
//       else {
//       return 0;
//       }
//       });
//   }

// }

function orderByDuration(arr){
    return arr.sort((a,b) => {
     if (a.duration < b.duration) return -1;
     if (b.duration < a.duration) return 1;
     if (a.title < b.title) return -1;
     if (b.title < a.title) return 1;
     return 0;
    });
}

// pour le souvenir
//     return arr.sort((a,b) => {
  
//       if (a.duration == b.duration){
//         return arr.sort((a,b) => {
//           if (a.title < b.title){
//             return -1;
//             }
//           else if (b.title < a.title){
//             return 1;
//             }
//           else {
//             return 0;
//             }
//         });
//       }
//       else if (a.duration < b.duration) {
//         return -1;
//       }
//       else {
//         return 1;
//       }
//     });
//   }
  



// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(arr){
    const dramSh = arr.filter((arr) => arr.genre.includes('Drama') === true).filter((arr) => arr.director === 'Steven Spielberg');
    return dramSh.length;    
  }


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr){

    let firstTwenty = arr.sort((a,b)=> {
      if (a.title < b.title) return -1;
      if (b.title < a.title) return 1;
      if (a.title == b.title) return 0;
    });
    let final = firstTwenty.splice(0,20);
    return final.map(movie => movie.title);
}


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr){

    let nouv_arr =[];

    arr.forEach((item)=> {
      const newObj = Object.assign({},item);
      nouv_arr.push(newObj)
    });


    nouv_arr.forEach((item)=> {
      const newObj = Object.assign({},item);

      let h_en_min = 0;
      let min = 0;

      // get hours in minutes
      item.duration[1] == "h" ? h_en_min = Number(item.duration[0])*60 : h_en_min = 0;

      // get minutes
      item.duration.includes("min") ? min = Number(item.duration[item.duration.indexOf('min')-2]+Number(item.duration[item.duration.indexOf('min')-1])):min = 0;

      item.duration = h_en_min+min;

      newObj.duration = item.duration;

      return newObj
        });
        return nouv_arr;
}


  // object assign //

    

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(arr){
  
    let all_checks = {};
  
    for (let y = 1900 ; y < 2019 ; y++){
      for (let i = 0 ; i < arr.length ; i++){
        let check = [];
        if (arr[i].year == y) {
        check.push(Number(arr[i].rate));
        all_checks[y] = ratesAverage(check);
      }
    }
    }
    
    return all_checks;
  }
  
  
  console.log(bestYearAvg(movies));
  
  
  
  
  
  
  function ratesAverage(arr){
      let sum = (accumulator,currentValue) => Number(accumulator) + Number(currentValue);  
      return Number((arr.reduce(sum,0)/arr.length).toFixed(2));
  }
  
   