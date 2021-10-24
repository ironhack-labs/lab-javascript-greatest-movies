// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
  const result = movies.map(({director}) => director)
  return result
}
getAllDirectors(movies)

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const directors = ['Frank Darabont', 'Francis Ford Coppola', 'Francis Ford Coppola', 'Christopher Nolan', 'Sidney Lumet', 'Steven Spielberg', 'Quentin Tarantino', 'Peter Jackson', 'Sergio Leone', 'David Fincher', 'Peter Jackson', 'Robert Zemeckis', 'Irvin Kershner', 'Christopher Nolan', 'Peter Jackson', 'Milos Forman', 'Martin Scorsese', 'Lana Wachowski', 'Akira Kurosawa', 'George Lucas', 'Fernando Meirelles', 'David Fincher', 'Jonathan Demme', 'Frank Capra', 'Roberto Benigni', 'Bryan Singer', 'Luc Besson', 'Steven Spielberg', 'Hayao Miyazaki', 'Tony Kaye', 'Sergio Leone', 'Christopher Nolan', 'Alfred Hitchcock', 'Frank Darabont', 'Michael Curtiz', 'Charles Chaplin', 'Olivier Nakache', 'Charles Chaplin', 'Steven Spielberg', 'Roman Polanski', 'Martin Scorsese', 'Alfred Hitchcock', 'James Cameron', 'Robert Zemeckis', 'Damien Chazelle', 'Ridley Scott', 'Christopher Nolan', 'Roger Allers', 'Christopher Nolan', 'Francis Ford Coppola', 'Ridley Scott', 'Charles Chaplin', 'Billy Wilder', 'Stanley Kubrick', 'Giuseppe Tornatore', 'Florian Henckel von Donnersmarck', 'Isao Takahata', 'Denis Villeneuve', 'Stanley Kubrick', 'Quentin Tarantino', 'Stanley Kubrick', 'Andrew Stanton', 'Sam Mendes', 'Christopher Nolan', 'Hayao Miyazaki', 'Chan-wook Park', 'James Cameron', 'Billy Wilder', 'Sergio Leone', 'Wolfgang Petersen', 'Orson Welles', 'Nitesh Tiwari', 'Alfred Hitchcock', 'Alfred Hitchcock', 'Richard Marquand', 'Mel Gibson', 'Quentin Tarantino', 'Fritz Lang', 'Darren Aronofsky', 'Jean-Pierre Jeunet', 'Aamir Khan', 'Stanley Kubrick', 'Makoto Shinkai', 'David Lean', 'Billy Wilder', 'Milos Forman', 'Michel Gondry', 'Martin Scorsese', 'Robert Mulligan', 'Christopher Nolan', 'Stanley Kubrick', 'Stanley Kubrick', 'Stanley Donen', 'Lee Unkrich', 'John Lasseter', 'George Roy Hill', 'Rajkumar Hirani', 'Vittorio De Sica', 'Quentin Tarantino', 'Charles Chaplin', 'Guy Ritchie', 'Terry Gilliam', 'Gus Van Sant', 'Thomas Vinterberg', 'Sergio Leone', 'Curtis Hanson', 'Brian De Palma', 'Billy Wilder', 'Fritz Lang', 'Asghar Farhadi', 'Akira Kurosawa', 'Steven Spielberg', 'Joseph L. Mankiewicz', 'Akira Kurosawa', 'Çagan Irmak', 'Pete Docter', 'Christopher Nolan', 'Billy Wilder', 'John Huston', 'Clint Eastwood', 'Oliver Hirschbiegel', 'John McTiernan', 'Martin Scorsese', 'Michael Mann', 'Carol Reed', 'Majid Majidi', 'John Sturges', 'Akira Kurosawa', 'Roman Polanski', 'Guillermo del Toro', 'Hayao Miyazaki', 'Denis Villeneuve', 'Akira Kurosawa', 'Charles Chaplin', 'Juan José Campanella', 'Pete Docter', 'Stanley Kramer', 'Elia Kazan', 'Hayao Miyazaki', 'David Lean', 'Lenny Abrahamson', 'Ingmar Bergman', 'Guy Ritchie', 'Frank Capra', 'Ridley Scott', 'Martin Scorsese', 'Ron Howard', 'David Lynch', 'Ingmar Bergman', 'James McTeigue', 'Martin Scorsese', 'Clyde Bruckman', 'Gavin O"Connor', 'Danny Boyle', 'Alfred Hitchcock', 'Clint Eastwood', 'F.W. Murnau', 'Victor Fleming', 'Andrei Tarkovsky', 'Michael Cimino', 'Joel Coen', 'M. Night Shyamalan', 'John Carpenter', 'Ethan Coen', 'Joel Coen', 'Yavuz Turgul', 'Andrew Stanton', 'Yasujirô Ozu', 'Paul Thomas Anderson', 'Stuart Rosenberg', 'Alfred Hitchcock', 'Mel Gibson', 'Damien Chazelle', 'Elem Klimov', 'Quentin Tarantino', 'Rakeysh Omprakash Mehra', 'Dean DeBlois', 'Carl Theodor Dreyer', 'Adam Elliot', 'David Fincher', 'Sean Penn', 'Martin Scorsese', 'James Mangold', 'Frank Capra', 'Terry Jones', 'Damián Szifron', 'Neeraj Pandey', 'Oliver Stone', 'Terry George', 'Henri-Georges Clouzot', 'Sidney Lumet', 'Ron Howard', 'Jim Sheridan', 'Rob Reiner', 'Ingmar Bergman', 'William Wyler', 'Wes Anderson', 'François Truffaut', 'Joon-ho Bong', 'Steve McQueen', 'George Miller', 'Steven Spielberg', 'Tom McCarthy', 'Clint Eastwood', 'Andrei Tarkovsky', 'George Roy Hill', 'Alejandro González Iñárritu', 'Peter Weir', 'Lasse Hallström', 'John Huston', 'Hayao Miyazaki', 'Rob Reiner', 'Richard Linklater', 'Federico Fellini', 'Peter Bogdanovich', 'Denis Villeneuve', 'David Yates', 'John Ford', 'John G. Avildsen', 'Steven Spielberg', 'Orson Welles', 'Henri-Georges Clouzot', 'Richard Attenborough', 'Richard Kelly', 'Rajkumar Hirani', 'Pete Docter', 'J.J. Abrams', 'Woody Allen', 'James Cameron', 'Stanley Kubrick', 'Paul Greengrass', 'Victor Fleming', 'Harold Ramis', 'Mathieu Kassovitz', 'Federico Fellini', 'Steven Spielberg', 'Terry Gilliam', 'William Wyler', 'Wai-Keung Lau', 'Wim Wenders', 'Tate Taylor', 'Kar-Wai Wong', 'Ramesh Sippy', 'Gary Trousdale', 'Gillo Pontecorvo', 'Chan-wook Park', 'Gore Verbinski', 'Rajkumar Hirani', 'Sidney Lumet', 'Peter Weir' ];
const unique = [...new Set(directors)];
console.log(unique)

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
// to filter the array for 1) director: Steven Spielberg AND && 2) genre: drama 
// return a number -> check length of the returned array

function howManyMovies(movies) {
  const spielberg = movies.filter (function(movie) { 
    if(movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')) 
    return movie
  })
  return spielberg.length
}
howManyMovies(movies)

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
// 1) return only movies.score, 2) sum of movies.score with reduce method 3) devide by movies.length with 2 decimals 4) return Number

function scoresAverage(movies) {
  let scores = movies.map(movie => movie.score)
  let totalScore = scores.reduce(function (result, score){
    return result + score
  })
  return Number((totalScore / scores.length).toFixed(2))
  }
  scoresAverage(movies)

// Iteration 4: Drama movies - Get the average of Drama Movies
// new array with only genre includes drama, then same as previous iteration but with new drama array

function dramaMoviesScore(movies) {
  let dramaMovies = movies.filter(movie => movie.genre.includes('Drama'))
  let scores = dramaMovies.map(movie => movie.score)
  let totalScore = scores.reduce(function (result, score){
    return result + score
  })
  return Number((totalScore / scores.length).toFixed(2))
  }
  dramaMoviesScore(movies)

  // Iteration 5: Ordering by year - Order by year, ascending (in growing order)
  // new array that is sorted by movies.year in ascending order -> sorting an array of objects by property values
// function orderByYear(movies) {} ----> could not figure out how to put the below statement in the function!!!

const orderByYear = (movies) => {return movies.sort(function(a, b){
  return new Date(a.year) - new Date(b.year);
});
}
console.log(orderByYear(movies))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  const sorted = movies.map((item) => {
    return item.title;
});
sorted.sort ((a,b) => {
  return a.localeCompare(b);
});
return sorted.slice(0,20);
}

orderAlphabetically(movies)

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
