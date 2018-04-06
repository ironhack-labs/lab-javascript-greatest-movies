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
    title: 'The Shawshank Redemption',
    year: '1994',
    director: 'Frank Darabont',
    duration: '1h 22min',
    genre: ['Crime', 'Drama'],
    rate: '9.3'
  },
  {
    title: 'The Shawshank Redemption',
    year: '1994',
    director: 'Frank Darabont',
    duration: '3h 33min',
    genre: ['Crime', 'Drama'],
    rate: '9.3'
  }
  ]
  //split on letter "h" and return hours * 60
  
  function calculateHours(hours){
    var minutesFromHours = hours.split("h")
    return minutesFromHours[0]*60
  }
  // console.log(calculateHours("3h"))
  
  
  //splitting on minutes
  function calculateMinutes(minutes){
    var minutesFromMinutes = minutes.split("min")
    return minutesFromMinutes[0]
  }
    // console.log(calculateMinutes("42min"))

    //Create a turnHoursToMinutes method that receive an array as parameter, 
  // duration: "2h 44min"
  function turnHoursToMinutes(duration){
    
    var timeChunks = duration.split(" ");
    var a = calculateHours(timeChunks[0]);
    var b = calculateMinutes(timeChunks[1])
    // console.log(b)
}

//replace the duration info of each of the movies for it equivalent in minutes. For example:


//loop through every movie

// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
