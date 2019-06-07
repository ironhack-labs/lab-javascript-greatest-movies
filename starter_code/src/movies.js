/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function fnIncludes(str, i , newArr){
   return newArr[i].duration.includes(str)
}
function turnHoursToMinutes  (arr) {
    const newArr = arr.slice();
    for(i=0; i< newArr.length; i++){
      if( fnIncludes("h",i,newArr ) && fnIncludes("min",i,newArr) ){
        let tempArr = newArr[i].duration.split(" ")
        let mins =(parseInt(tempArr[0][0]) *60)+ parseInt(tempArr[1].replace("min",''))
        newArr[i].duration = mins
      }
      else if(fnIncludes("h",i,newArr)){
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
function roundToTwo(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
}
const dramaMoviesRate = (arr) => {
    let sum = 0
    let count=0
    
    for(i=0; i<arr.length; i++){
        if (arr[i].genre.includes("Drama")&& arr[i].rate === '' ){
            count++
            
        }
        else if(arr[i].genre.includes("Drama")){
            count++
            sum += parseInt(arr[i].rate)
        }
    }
    if( count === 0){
        return undefined;
    }
    else{
    let final=roundToTwo(sum/count)
    console.log(final)
    //console.log(sum/count)
    return final
    }}
// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG
const howManyMovies = (arr) =>{
    let count = 0;
    if (arr.length !== 0){
        for(i = 0; i< arr.length; i++){
    if (arr[i].director === "Steven Spielberg"  && arr[i].genre.includes("Drama")){
        count++
    }}
     return `Steven Spielberg directed ${count} drama movies!`
        }
    else return undefined;
    }

// Order by title and print the first 20 titles


// Best yearly rate average
