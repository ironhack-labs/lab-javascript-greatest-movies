/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function hourtominute(time){
    let filtered = time.split("").filter(item => ["m","i","n"," ","h"].includes(item) == false)
    return(Number(filtered.splice(0,1))*60 + Number(filtered.join(""))) ;
  }
  
  function turnHoursToMinutes(arr){
    for(i of arr){
      i.duration = hourtominute(i.duration)
    }
    return(arr)
  }

// Get the average of all rates with 2 decimals 

function ratesAverage(arr){
  return(arr.reduce((a, b) => ({rate: Number(a.rate) + Number(b.rate)})).rate/movies.length)
}


// Get the average of Drama Movies
function dramaMoviesRate(arr){
  let filtered = arr.filter( (movie) => movie.genre.includes('Drama'));
  return(ratesAverage(filtered))
  }

// Order by time duration, in growing order

function compare(a,b) {
  if (hourtominute(a.duration) < hourtominute(b.duration))
    return -1;
  if (hourtominute(a.duration) > hourtominute(b.duration))
    return 1;
  return 0;
}

function orderByDuration(arr){
return(arr.sort(compare));
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(arr){
  let filtered = arr.filter( (movie) => movie.director == 'Steven Spielberg');
return(filtered.length)
}


// Order by title and print the first 20 titles
function compareAlph(a,b) {
  if (a.title < b.title)
    return -1;
  if (a.title > b.title)
    return 1;
  return 0;
}



function orderAlphabetically(arr){
  let res = []
  let sorted = arr.sort(compareAlph)
  console.log()
  for(let i=0; i<20; i++){
    res.push(arr.sort(compareAlph)[i].title)
  }
  return(res);
}


// Best yearly rate average


//its not beautiful and I'm not proud of it but it gets the job done! Are there any more elegant solutions?


function bestYearAvg(obj){
  let byYear = {}
  let allyears = []
  let res = []

  for(let i = 0; i<obj.length; i++){
    if(byYear[obj[i].year] == undefined){
        byYear[obj[i].year] = [Number(obj[i].rate)]
        allyears.push(obj[i].year)
    }else{
      byYear[obj[i].year].push(Number(obj[i].rate))
    }
  }

for(let j = 0; j<allyears.length; j++){
  res.push( 
    byYear[allyears[j]].reduce((a, b) => a + b, 0) / byYear[allyears[j]].length
  )

}
return(allyears[res.indexOf(Math.max(...res))])
}