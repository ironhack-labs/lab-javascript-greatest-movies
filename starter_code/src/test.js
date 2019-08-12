
// var time="2h 30mins";

// var temp=time.split(" ");

//     let  converted=(parseInt(temp[0],10))*60+ parseInt(temp[1],10);
//     console.log(converted);





movieArray=[{
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
    duration: '2h 55min',
    genre: ['Crime', 'Drama'],
    rate: '9.2'
  },
  {
    title: 'The Godfather: Part II',
    year: '1974',
    director: 'Francis Ford Coppola',
    duration: '3h 22min',
    genre: ['Crime', 'Drama'],
    rate: '9.0'
  },
  {
    title: 'The Dark Knight',
    year: '2008',
    director: 'Christopher Nolan',
    duration: '2h 32min',
    genre: ['Action', 'Crime', 'Drama', 'Thriller'],
    rate: '9.0'
  },
  {
    title: '12 Angry Men',
    year: '1957',
    director: 'Sidney Lumet',
    duration: '1h 36min',
    genre: ['Crime', 'Drama'],
    rate: '8.9'
  }]

  function turnHoursToMinutes (movieArray){
    movieArrayCopy = movieArray.map((x) => x);
      var temp=[];
        movieArrayCopy.forEach(function(movie){
           temp= movie.duration.split('h') ;
           if (temp[1]==="") return temp[0];
           movie.duration=(parseInt(temp[0],10))*60+ parseInt(temp[1],10);
        })
        return movieArrayCopy;     
    }

  console.log(turnHoursToMinutes(movieArray))  ;

