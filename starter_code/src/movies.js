
/* eslint no-restricted-globals: 'off' */
//Turn duration of the movies from hours to minutes 
// function turnHoursToMinutes(myArray){
//   // let newArray = [...myArray];
//   const newArray = myArray.map(el => {
//   // el.duration = el.duration.split(' ')
//   console.log(typeof el.duration)
//   let newDuration = [...el.duration]
//   if(newDuration.length == 2){
//   newDuration = parseFloat(newDuration[0])*60 + parseFloat(newDuration[1])}
//   else{
//   if (newDuration[0].includes('h')) {
//   newDuration = parseFloat(newDuration[0])*60}
//   else { newDuration = parseFloat(newDuration[0])}
//   }
//   el.duration = newDuration
//   return el;
//   })
//   return newArray
//   }

function turnHoursToMinutes(myArray){
  // let newArray = [...myArray];
  const newArray = myArray.map(el => {
  let newDuration = el.duration.split(' ')
  if(newDuration.length == 2){
    newDuration = parseFloat(newDuration[0])*60 + parseFloat(newDuration[1])}
    else{
    if (newDuration[0].includes('h')) {
    newDuration = parseFloat(newDuration[0])*60}
    else { newDuration = parseFloat(newDuration[0])}
    }
    el.duration = newDuration;
  return el;
  })
return newArray
}
// function turnHoursToMinutes(monArray){
//     const newArray = monArray.map(el => {
//     let durationArray =  el.duration.split(' ');
//     let newDuration = parseFloat(durationArray[0])*60  +parseFloat(durationArray[1]);
//     el.duration = newDuration;
//     return el;
//     })
//     return newArray;
//   }


// Get the average of all rates with 2 decimals 
function ratesAverage(myArray){
  const averageRate = myArray.reduce((acc, currentEl) => acc + Number(currentEl.rate),0)
  return parseFloat((averageRate/myArray.length).toFixed(2));
  };
  


// Get the average of Drama Movies
function dramaMoviesRate(myArray) {
let trackScore = 0;
let compterElementDrama = 0;
myArray.forEach(element => {
if(element.genre.includes('Drama')){
trackScore +=  Number(element.rate);
compterElementDrama++;
}
})
if(compterElementDrama == 0){
  return undefined;
}
return parseFloat((trackScore/compterElementDrama).toFixed(2));
}

// Order by time duration, in growing order
function orderByDuration(myArray){
function compare(a,b) {
  if(a.duration > b.duration) return 1;
  if(a.duration < b.duration) return -1;
  if(a.duration == b.duration) {
    if(a.title > b.title) return 1;
    if(a.title < b.title) return -1}
  };
return myArray.sort(compare)}

// How many movies did STEVEN SPIELBERG
function howManyMovies(myArray) {
  if(myArray.length === 0) return undefined
const newArray = myArray.filter(el => (el.director === "Steven Spielberg" && el.genre.includes('Drama')))
return `Steven Spielberg directed ${newArray.length} drama movies!`;}

// Order by title and print the first 20 titles

function orderAlphabetically(myArray){
  const newArray = myArray.sort((a,b)=> {
    if(a.title > b.title) return 1;
    if(a.title < b.title) return -1;
  })
   return newArray.map(el => el.title).slice(0,20)
}

// Best yearly rate average
  function bestYearAvg(myArray){
  if(myArray.length === 0) return undefined

  //Convert all rate (string) to number
    const rateNum = myArray.map(el => {
      const newRate = Number(el.rate);
      el.rate =newRate;
      return el
    }) 
  //newObjMov ={year : [all rate]}
    const newObjMov = rateNum.reduce((acc,currObj) => {
      acc[currObj.year] = acc[currObj.year] || []; 
      acc[currObj.year].push(currObj.rate);
      return acc;
    },{}) 
  //Convert newObjMov to arraytransf Array = [{year: 1992, averageRate}]
    const arraytransf = Object.keys(newObjMov).map(el => 
      { const arrLength = newObjMov[el].length;
      return { year:el,averageRate:newObjMov[el].reduce((acc,currVal)=>  acc + currVal ,0) / arrLength }
      }
      );
  
  // find a year with best average rate
    const bestYear = arraytransf.reduce((acc,currVal) =>{
    return (acc.averageRate >= currVal.averageRate) ? acc : currVal
      })
    return `The best year was ${bestYear.year} with an average rate of ${bestYear.averageRate}`;
    };