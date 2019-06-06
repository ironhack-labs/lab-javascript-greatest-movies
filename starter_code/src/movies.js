/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
const turnHoursToMinutes = (arr) =>{
    const newArr = arr.slice();
    for(i=0; i< newArr.length; i++){
      if( newArr[i].duration.includes("h") && newArr[i].duration.includes("min") ){
        let tempArr = newArr[i].duration.split(" ")
        let mins =(parseInt(tempArr[0][0]) *60)+ parseInt(tempArr[1].replace("min",''))
        newArr[i].duration = mins
      }
      else if(newArr[i].duration.includes("h")){
         newArr[i].duration = (parseInt(newArr[i].duration[0]) *60)
      }
      else{
        newArr[i].duration = parseInt(newArr[i].duration.replace("min",''))
      }
    }
    return newArr
  }

// Get the average of all rates with 2 decimals 

const ratesAverage = (arr) => {
let sum = arr.reduce((acc, cv)=> acc += parseInt(cv.rate),0) 
return sum/arr.length
}
// Get the average of Drama Movies

const dramaMoviesRate = (arr) => {
    let sum = 0
    let count=0
    for(i=0; i<arr.length; i++){
        if (arr[i].genre.includes("Drama")){
            count++
            sum += parseInt(arr[i].rate)
        }
    }
    console.log(sum/count)
    }
// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
