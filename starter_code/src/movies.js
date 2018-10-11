/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

// function turnHoursToMinutes (array){
//     return array.map(function(i){
//         var newArrayItem = {};
//         if(i.duration.includes("m") && i.duration.includes("h")){
//           console.log("1st condition");
//           newArrayItem.duration = parseInt(i.duration,10)*60+parseInt(i.duration.slice(3,6),10);
//         } else if (i.duration.includes("h")) {
//           console.log("2nd condition",typeof newArrayItem.duration)
//           newArrayItem.duration = parseInt(i.duration,10)*60
//         } else {
//           console.log("3rd condition");
//            newArrayItem.duration = parseInt(i.duration,10)
//         }
//         console.log(typeof newArrayItem.duration)
//         return newArrayItem;
//       });
// }

function turnHoursToMinutes (array){
    return array.map(function(i){
        var newArrayItem = Object.assign({}, i); 
        console.log("this is the newArrayItem in the beginning of the function:" , newArrayItem);
        if(i.duration.includes("m") && i.duration.includes("h")){
          console.log("1st condition");
          newArrayItem.duration = parseInt(i.duration,10)*60+parseInt(i.duration.slice(3,6),10);
        } else if (i.duration.includes("h")) {
          console.log("2nd condition",typeof newArrayItem.duration)
          newArrayItem.duration = parseInt(i.duration,10)*60
        } else {
          console.log("3rd condition");
           newArrayItem.duration = parseInt(i.duration,10)
        }
        console.log(typeof newArrayItem.duration)
        console.log("this is the newArrayItem after the logic:" , newArrayItem);
        return newArrayItem;
      });
}

    
// Get the average of all rates with 2 decimals 
// function round(value, decimals) {
//     return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
//   }
  function createAvg(array) {
    var result = array.map(function(a) {
      return +a.rate;});
      return result
  }
  console.log(createAvg(movies))
  
  function ratesAverage(array) {
    return parseFloat(array.reduce(function(acc, n){
      return (acc + n)
    },0)/array.length)
  }
  console.log(ratesAverage(createAvg(movies)))
  
//   round(ratesAverage(createAvg(movies)),2)

// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
