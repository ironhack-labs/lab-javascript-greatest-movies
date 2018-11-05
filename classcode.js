const movies = [
  {
  "title":"The Shawshank Redemption",
  "year":"1994",
  "director":"Frank Darabont",
  "duration":"2h 22min",
  "genre":["Crime","Drama"],
  "rate":"9.3"
},
{
  "title":"The Shawshank Redemption",
  "year":"1994",
  "director":"Frank Darabont",
  "duration":"2h 3min",
  "genre":["Crime","Drama"],
  "rate":"9.3"
},
{
  "title":"The Shawshank Redemption",
  "year":"1994",
  "director":"Frank Darabont",
  "duration":"1h 57min",
  "genre":["Crime","Drama"],
  "rate":"9.3"
}
]






function turnHoursToMinutes(movieArray){

  return movieArray.map((movieObject)=>{

  let durationArray = movieObject.duration.split(' ');
  let hours = durationArray[0][0]
  let howManyDigitsMinutes =  durationArray[1].length - 3
  let minutes = durationArray[1].substr(0, howManyDigitsMinutes)
  let totalDuration =  Number(hours)*60 + Number(minutes)
  let newMovie = movieObject;
  newMovie.duration =  totalDuration.toString();

  return newMovie;

  })
}


// function turnHoursToMinutes(movieArray){
//   return movieArray.map(hoursToMinutes);
// }

turnHoursToMinutes(movies)
