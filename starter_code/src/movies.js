/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
var movies = [
  {
    title: 'The Shawshank Redemption',
    year: '1994',
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    rate: '9.3'
  },
  {
    title: 'The Godfather',
    year: '1972',
    director: 'Francis Ford Coppola',
    duration: '3h',
    genre: ['Crime', 'Drama'],
    rate: '9.2'
  }
]

var turnHoursToMinutes = function (){
for(i = 0; i < movies.length ; i++){
var hour = movies[i].duration.split(' ')
//console.log(hour.length)
if(hour.length <=1){
    hour.push("0min")
}
var minutes = function(hour){

  hour[0].split('')
  var minuteChar = hour[1].split('')
  var minuteNum = minuteChar.join('')
  //minuteChar[0] + minuteChar[1]
   return minuteNum = parseInt(minuteNum);

 }
var horas = function(hour){

  hour[0].split('')
  var hourChar = hour[0].split('')
  var hourNum = hourChar[0]
   return hourNum = parseInt(hourNum)*60;
 }
 //console.log(minutes(hour) + horas(hour) + "min");
 var res =  minutes(hour) + horas(hour)
  movies[i].duration=res
}
}

turnHoursToMinutes ()
//##console.log(movies)




//var movieSplit = movies[0].duration.split(' ')

//console.log(movies[0].title)

var arrayComparativo = [movies[0].title,movies[0].duration]

console.log(arrayComparativo)
var arrayDuration = []
  var arrayTitle = []

for(e = 0; e < movies.length; e++){
  
  arrayDuration.push(movies[e].duration)
  arrayTitle.push(movies[e].title)
}

console.log(arrayTitle)
console.log(arrayDuration)

console.log(arrayTitle[0] + arrayDuration[0])

var arrayMaster= [arrayTitle[0] , arrayDuration[0]]

console.log(arrayMaster)

// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
