// /* eslint no-restricted-globals: 'off' */

// let movies = [
//     {
//       title: 'The Shawshank Redemption',
//       year: '1994',
//       director: 'Frank Darabont',
//       duration: '2h 22min',
//       genre: ['Crime', 'Drama'],
//       rate: '9.3'
//     },
//     {
//       title: 'The Godfather',
//       year: '1972',
//       director: 'Francis Ford Coppola',
//       duration: '2h 55min',
//       genre: ['Crime', 'Drama'],
//       rate: '9.2'
//     },
//     {
//       title: 'The Godfather: Part II',
//       year: '1974',
//       director: 'Francis Ford Coppola',
//       duration: '3h 22min',
//       genre: ['Crime', 'Drama'],
//       rate: '9.0'
//     },
//     {
//       title: 'The Dark Knight',
//       year: '2008',
//       director: 'Christopher Nolan',
//       duration: '2h 32min',
//       genre: ['Action', 'Crime', 'Drama', 'Thriller'],
//       rate: '9.0'
//     },
//     {
//       title: '12 Angry Men',
//       year: '1957',
//       director: 'Sidney Lumet',
//       duration: '1h 36min',
//       genre: ['Crime', 'Drama'],
//       rate: '8.9'
//     },
//     {
//       title: 'Schindler\'s List',
//       year: '1993',
//       director: 'Steven Spielberg',
//       duration: '3h 15min',
//       genre: ['Biography', 'Drama', 'History'],
//       rate: '8.9'
//     },
//     {
//       title: 'Pulp Fiction',
//       year: '1994',
//       director: 'Quentin Tarantino',
//       duration: '2h 34min',
//       genre: ['Crime', 'Drama'],
//       rate: '8.9'
//     },
//     {
//       title: 'The Lord of the Rings: The Return of the King',
//       year: '2003',
//       director: 'Peter Jackson',
//       duration: '3h 21min',
//       genre: ['Adventure', 'Drama', 'Fantasy'],
//       rate: '8.9'
//     },
//     {
//       title: 'Il buono, il brutto, il cattivo',
//       year: '1966',
//       director: 'Sergio Leone',
//       duration: '3h 2min',
//       genre: ['Western'],
//       rate: '8.9'
//     },
//     {
//       title: 'Fight Club',
//       year: '1999',
//       director: 'David Fincher',
//       duration: '2h 19min',
//       genre: ['Drama'],
//       rate: '8.8'
//     },
//     {
//       title: 'The Lord of the Rings: The Fellowship of the Ring',
//       year: '2001',
//       director: 'Peter Jackson',
//       duration: '2h 58min',
//       genre: ['Adventure', 'Drama', 'Fantasy'],
//       rate: '8.8'
//     },
//     {
//       title: 'Forrest Gump',
//       year: '1994',
//       director: 'Robert Zemeckis',
//       duration: '2h 22min',
//       genre: ['Comedy', 'Drama', 'Romance'],
//       rate: '8.8'
//     },
//     {
//       title: 'Star Wars: Episode V - The Empire Strikes Back',
//       year: '1980',
//       director: 'Irvin Kershner',
//       duration: '2h 4min',
//       genre: ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
//       rate: '8.8'
//     },
//     {
//       title: 'Inception',
//       year: '2010',
//       director: 'Christopher Nolan',
//       duration: '2h 28min',
//       genre: ['Action', 'Adventure', 'Sci-Fi', 'Thriller'],
//       rate: '8.8'
//     },
//     {
//       title: 'The Lord of the Rings: The Two Towers',
//       year: '2002',
//       director: 'Peter Jackson',
//       duration: '2h 59min',
//       genre: ['Adventure', 'Drama', 'Fantasy'],
//       rate: '8.7'
//     },
//     {
//       title: 'One Flew Over the Cuckoo\'s Nest',
//       year: '1975',
//       director: 'Milos Forman',
//       duration: '2h 13min',
//       genre: ['Drama'],
//       rate: '8.7'
//     },
//     {
//       title: 'Goodfellas',
//       year: '1990',
//       director: 'Martin Scorsese',
//       duration: '2h 26min',
//       genre: ['Crime', 'Drama'],
//       rate: '8.7'
//     },
//     {
//       title: 'The Matrix',
//       year: '1999',
//       director: 'Lana Wachowski',
//       duration: '2h 16min',
//       genre: ['Action', 'Sci-Fi'],
//       rate: '8.7'
//     },
//     {
//       title: 'Shichinin no samurai',
//       year: '1954',
//       director: 'Akira Kurosawa',
//       duration: '3h 27min',
//       genre: ['Adventure', 'Drama'],
//       rate: '8.7'
//     },
//     {
//       title: 'Star Wars',
//       year: '1977',
//       director: 'George Lucas',
//       duration: '2h 1min',
//       genre: ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
//       rate: '8.7'
//     },
//     {
//       title: 'Cidade de Deus',
//       year: '2002',
//       director: 'Fernando Meirelles',
//       duration: '2h 10min',
//       genre: ['Crime', 'Drama'],
//       rate: '8.7'
//     },
//     {
//       title: 'Se7en',
//       year: '1995',
//       director: 'David Fincher',
//       duration: '2h 7min',
//       genre: ['Crime', 'Drama', 'Mystery', 'Thriller'],
//       rate: '8.6'
//     },
//     {
//       title: 'The Silence of the Lambs',
//       year: '1991',
//       director: 'Jonathan Demme',
//       duration: '1h 58min',
//       genre: ['Crime', 'Drama', 'Thriller'],
//       rate: '8.6'
//     },
//     {
//       title: 'It\'s a Wonderful Life',
//       year: '1946',
//       director: 'Frank Capra',
//       duration: '2h 10min',
//       genre: ['Drama', 'Family', 'Fantasy'],
//       rate: '8.6'
//     },
//     {
//       title: 'La vita è bella',
//       year: '1997',
//       director: 'Roberto Benigni',
//       duration: '1h 56min',
//       genre: ['Comedy', 'Drama', 'War'],
//       rate: '8.6'
//     },
//     {
//       title: 'The Usual Suspects',
//       year: '1995',
//       director: 'Bryan Singer',
//       duration: '1h 46min',
//       genre: ['Crime', 'Drama', 'Mystery', 'Thriller'],
//       rate: '8.6'
//     },
//     {
//       title: 'Léon',
//       year: '1988',
//       director: 'Luc Besson',
//       duration: '1h 50min',
//       genre: ['Crime', 'Drama', 'Thriller'],
//       rate: '8.6'
//     },
//     {
//       title: 'Saving Private Ryan',
//       year: '1998',
//       director: 'Steven Spielberg',
//       duration: '2h 49min',
//       genre: ['Drama', 'War'],
//       rate: '8.6'
//     },
//     {
//       title: 'Sen to Chihiro no kamikakushi',
//       year: '2001',
//       director: 'Hayao Miyazaki',
//       duration: '2h 5min',
//       genre: ['Animation', 'Adventure', 'Family', 'Fantasy', 'Mystery'],
//       rate: '8.6'
//     },
//     {
//       title: 'American History X',
//       year: '1998',
//       director: 'Tony Kaye',
//       duration: '1h 59min',
//       genre: ['Crime', 'Drama'],
//       rate: '8.5'
//     },
//     {
//       title: 'C\'era una volta il West',
//       year: '1968',
//       director: 'Sergio Leone',
//       duration: '2h 44min',
//       genre: ['Western'],
//       rate: '8.6'
//     },
//     {
//       title: 'Interstellar',
//       year: '2014',
//       director: 'Christopher Nolan',
//       duration: '2h 49min',
//       genre: ['Adventure', 'Drama', 'Sci-Fi'],
//       rate: '8.6'
//     },
//     {
//       title: 'Psycho',
//       year: '1960',
//       director: 'Alfred Hitchcock',
//       duration: '1h 49min',
//       genre: ['Horror', 'Mystery', 'Thriller'],
//       rate: '8.5'
//     },
//     {
//       title: 'The Green Mile',
//       year: '1999',
//       director: 'Frank Darabont',
//       duration: '3h 9min',
//       genre: ['Crime', 'Drama', 'Fantasy', 'Mystery'],
//       rate: '8.5'
//     },
//     {
//       title: 'Casablanca',
//       year: '1942',
//       director: 'Michael Curtiz',
//       duration: '1h 42min',
//       genre: ['Drama', 'Romance', 'War'],
//       rate: '8.5'
//     },
//     {
//       title: 'City Lights',
//       year: '1931',
//       director: 'Charles Chaplin',
//       duration: '1h 27min',
//       genre: ['Comedy', 'Drama', 'Romance'],
//       rate: '8.6'
//     },
//     {
//       title: 'Intouchables',
//       year: '2011',
//       director: 'Olivier Nakache',
//       duration: '1h 52min',
//       genre: ['Biography', 'Comedy', 'Drama'],
//       rate: '8.6'
//     },
//     {
//       title: 'Modern Times',
//       year: '1936',
//       director: 'Charles Chaplin',
//       duration: '1h 27min',
//       genre: ['Comedy', 'Drama', 'Family', 'Romance'],
//       rate: '8.5'
//     },
//     {
//       title: 'Raiders of the Lost Ark',
//       year: '1981',
//       director: 'Steven Spielberg',
//       duration: '1h 55min',
//       genre: ['Action', 'Adventure'],
//       rate: '8.5'
//     },
//     {
//       title: 'The Pianist',
//       year: '2002',
//       director: 'Roman Polanski',
//       duration: '2h 30min',
//       genre: ['Biography', 'Drama', 'Music', 'War'],
//       rate: '8.5'
//     },
//     {
//       title: 'The Departed',
//       year: '2006',
//       director: 'Martin Scorsese',
//       duration: '2h 31min',
//       genre: ['Crime', 'Drama', 'Thriller'],
//       rate: '8.5'
//     },
//     {
//       title: 'Rear Window',
//       year: '1954',
//       director: 'Alfred Hitchcock',
//       duration: '1h 52min',
//       genre: ['Mystery', 'Thriller'],
//       rate: '8.5'
//     },
//     {
//       title: 'Terminator 2: Judgment Day',
//       year: '1991',
//       director: 'James Cameron',
//       duration: '2h 17min',
//       genre: ['Action', 'Sci-Fi', 'Thriller'],
//       rate: '8.5'
//     },
//     {
//       title: 'Back to the Future',
//       year: '1985',
//       director: 'Robert Zemeckis',
//       duration: '1h 56min',
//       genre: ['Adventure', 'Comedy', 'Sci-Fi'],
//       rate: '8.5'
//     },
//     {
//       title: 'Whiplash',
//       year: '2014',
//       director: 'Damien Chazelle',
//       duration: '1h 47min',
//       genre: ['Drama', 'Music'],
//       rate: '8.5'
//     },
//     {
//       title: 'Gladiator',
//       year: '2000',
//       director: 'Ridley Scott',
//       duration: '2h 35min',
//       genre: ['Action', 'Adventure', 'Drama'],
//       rate: '8.5'
//     },
//     {
//       title: 'The Prestige',
//       year: '1994',
//       director: 'Christopher Nolan',
//       duration: '2h 10min',
//       genre: ['Drama', 'Mystery', 'Sci-Fi', 'Thriller'],
//       rate: '8.5'
//     },
//     {
//       title: 'The Lion King',
//       year: '1994',
//       director: 'Roger Allers',
//       duration: '1h 28min',
//       genre: ['Animation', 'Adventure', 'Drama', 'Family', 'Musical'],
//       rate: '8.5'
//     },
//     {
//       title: 'Memento',
//       year: '2000',
//       director: 'Christopher Nolan',
//       duration: '1h 53min',
//       genre: ['Mystery', 'Thriller'],
//       rate: '8.5'
//     },
//     {
//       title: 'Apocalypse Now',
//       year: '1979',
//       director: 'Francis Ford Coppola',
//       duration: '2h 27min',
//       genre: ['Drama', 'War'],
//       rate: '8.5'
//     },
//     {
//       title: 'Alien',
//       year: '1979',
//       director: 'Ridley Scott',
//       duration: '1h 57min',
//       genre: ['Horror', 'Sci-Fi'],
//       rate: '8.5'
//     },
//     {
//       title: 'The Great Dictator',
//       year: '1940',
//       director: 'Charles Chaplin',
//       duration: '2h 5min',
//       genre: ['Comedy', 'Drama', 'War'],
//       rate: '8.5'
//     },
//     {
//       title: 'Sunset Blvd.',
//       year: '1950',
//       director: 'Billy Wilder',
//       duration: '1h 50min',
//       genre: ['Drama', 'Film-Noir'],
//       rate: '8.5'
//     },
//     {
//       title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
//       year: '1964',
//       director: 'Stanley Kubrick',
//       duration: '1h 35min',
//       genre: ['Comedy'],
//       rate: '8.5'
//     },
//     {
//       title: 'Nuovo Cinema Paradiso',
//       year: '1988',
//       director: 'Giuseppe Tornatore',
//       duration: '2h 35min',
//       genre: ['Drama'],
//       rate: '8.5'
//     },
//     {
//       title: 'Das Leben der Anderen',
//       year: '2006',
//       director: 'Florian Henckel von Donnersmarck',
//       duration: '2h 17min',
//       genre: ['Drama', 'Thriller'],
//       rate: '8.5'
//     },
//     {
//       title: 'Hotaru no haka',
//       year: '1988',
//       director: 'Isao Takahata',
//       duration: '1h 29min',
//       genre: ['Animation', 'Drama', 'War'],
//       rate: '8.5'
//     },
//     {
//       title: 'Blade Runner 2049',
//       year: '2017',
//       director: 'Denis Villeneuve',
//       duration: '2h 44min',
//       genre: ['Mystery', 'Sci-Fi', 'Thriller'],
//       rate: '8.5'
//     },
//     {
//       title: 'Paths of Glory',
//       year: '1957',
//       director: 'Stanley Kubrick',
//       duration: '1h 28min',
//       genre: ['Drama', 'War'],
//       rate: '8.4'
//     },
//     {
//       title: 'Django Unchained',
//       year: '2012',
//       director: 'Quentin Tarantino',
//       duration: '2h 45min',
//       genre: ['Drama', 'Western'],
//       rate: '8.4'
//     },
//     {
//       title: 'The Shining',
//       year: '1980',
//       director: 'Stanley Kubrick',
//       duration: '2h 26min',
//       genre: ['Drama', 'Horror'],
//       rate: '8.4'
//     },
//     {
//       title: 'WALL·E',
//       year: '2008',
//       director: 'Andrew Stanton',
//       duration: '1h 38min',
//       genre: ['Animation', 'Adventure', 'Family', 'Sci-Fi'],
//       rate: '8.4'
//     },
//     {
//       title: 'American Beauty',
//       year: '1999',
//       director: 'Sam Mendes',
//       duration: '2h 2min',
//       genre: ['Drama', 'Romance'],
//       rate: '8.4'
//     },
//     {
//       title: 'The Dark Knight Rises',
//       year: '2012',
//       director: 'Christopher Nolan',
//       duration: '2h 44min',
//       genre: ['Action', 'Thriller'],
//       rate: '8.4'
//     },
//     {
//       title: 'Mononoke-hime',
//       year: '1997',
//       director: 'Hayao Miyazaki',
//       duration: '2h 14min',
//       genre: ['Animation', 'Adventure', 'Fantasy'],
//       rate: '8.4'
//     },
//     {
//       title: 'Oldeuboi',
//       year: '2003',
//       director: 'Chan-wook Park',
//       duration: '2h',
//       genre: ['Action', 'Drama', 'Mystery', 'Thriller'],
//       rate: '8.4'
//     },
//     {
//       title: 'Aliens',
//       year: '1986',
//       director: 'James Cameron',
//       duration: '2h 17min',
//       genre: ['Action', 'Adventure', 'Sci-Fi', 'Thriller'],
//       rate: '8.4'
//     },
//     {
//       title: 'Witness for the Prosecution',
//       year: '1957',
//       director: 'Billy Wilder',
//       duration: '1h 56min',
//       genre: ['Crime', 'Drama', 'Mystery', 'Thriller'],
//       rate: '8.4'
//     },
//     {
//       title: 'Once Upon a Time in America',
//       year: '1984',
//       director: 'Sergio Leone',
//       duration: '3h 49min',
//       genre: ['Crime', 'Drama'],
//       rate: '8.4'
//     },
//     {
//       title: 'Das Boot',
//       year: '1981',
//       director: 'Wolfgang Petersen',
//       duration: '2h 29min',
//       genre: ['Adventure', 'Drama', 'Thriller', 'War'],
//       rate: '8.4'
//     },
//     {
//       title: 'Citizen Kane',
//       year: '1941',
//       director: 'Orson Welles',
//       duration: '1h 59min',
//       genre: ['Drama', 'Mystery'],
//       rate: '8.4'
//     },
//     {
//       title: 'Dangal',
//       year: '2016',
//       director: 'Nitesh Tiwari',
//       duration: '2h 41min',
//       genre: ['Action', 'Biography', 'Drama', 'Sport'],
//       rate: '8.6'
//     },
//     {
//       title: 'Vertigo',
//       year: '2001',
//       director: 'Alfred Hitchcock',
//       duration: '2h 8min',
//       genre: ['Mystery', 'Romance', 'Thriller'],
//       rate: '8.4'
//     },
//     {
//       title: 'North by Northwest',
//       year: '1959',
//       director: 'Alfred Hitchcock',
//       duration: '2h 16min',
//       genre: ['Action', 'Adventure', 'Mystery', 'Thriller'],
//       rate: '8.4'
//     },
//     {
//       title: 'Star Wars: Episode VI - Return of the Jedi',
//       year: '1983',
//       director: 'Richard Marquand',
//       duration: '2h 11min',
//       genre: ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
//       rate: '8.4'
//     },
//     {
//       title: 'Braveheart',
//       year: '1995',
//       director: 'Mel Gibson',
//       duration: '2h 58min',
//       genre: ['Biography', 'Drama', 'History', 'War'],
//       rate: '8.4'
//     },
//     {
//       title: 'Reservoir Dogs',
//       year: '1992',
//       director: 'Quentin Tarantino',
//       duration: '1h 39min',
//       genre: ['Crime', 'Drama', 'Thriller'],
//       rate: '8.3'
//     },
//     {
//       title: 'M',
//       year: '1931',
//       director: 'Fritz Lang',
//       duration: '1h 57min',
//       genre: ['Crime', 'Drama', 'Mystery', 'Thriller'],
//       rate: '8.4'
//     },
//     {
//       title: 'Requiem for a Dream',
//       year: '2000',
//       director: 'Darren Aronofsky',
//       duration: '1h 42min',
//       genre: ['Drama'],
//       rate: '8.3'
//     },
//     {
//       title: 'Le fabuleux destin d\'Amélie Poulain',
//       year: '2001',
//       director: 'Jean-Pierre Jeunet',
//       duration: '2h 2min',
//       genre: ['Comedy', 'Romance'],
//       rate: '8.4'
//     },
//     {
//       title: 'Taare Zameen Par',
//       year: '2007',
//       director: 'Aamir Khan',
//       duration: '2h 45min',
//       genre: ['Drama', 'Family'],
//       rate: '8.5'
//     },
//     {
//       title: 'A Clockwork Orange',
//       year: '1971',
//       director: 'Stanley Kubrick',
//       duration: '2h 16min',
//       genre: ['Crime', 'Drama', 'Sci-Fi'],
//       rate: '8.3'
//     },
//     {
//       title: 'Kimi no na wa.',
//       year: '2016',
//       director: 'Makoto Shinkai',
//       duration: '1h 46min',
//       genre: ['Animation', 'Drama', 'Fantasy', 'Romance'],
//       rate: '8.5'
//     },
//     {
//       title: 'Lawrence of Arabia',
//       year: '1962',
//       director: 'David Lean',
//       duration: '3h 36min',
//       genre: ['Adventure', 'Biography', 'Drama', 'History', 'War'],
//       rate: '8.3'
//     },
//     {
//       title: 'Double Indemnity',
//       year: '1944',
//       director: 'Billy Wilder',
//       duration: '1h 47min',
//       genre: ['Crime', 'Drama', 'Film-Noir', 'Mystery', 'Thriller'],
//       rate: '8.3'
//     },
//     {
//       title: 'Amadeus',
//       year: '1984',
//       director: 'Milos Forman',
//       duration: '2h 40min',
//       genre: ['Biography', 'Drama', 'History', 'Music'],
//       rate: '8.3'
//     },
//     {
//       title: 'Eternal Sunshine of the Spotless Mind',
//       year: '2004',
//       director: 'Michel Gondry',
//       duration: '1h 48min',
//       genre: ['Drama', 'Romance', 'Sci-Fi'],
//       rate: '8.3'
//     },
//     {
//       title: 'Taxi Driver',
//       year: '1976',
//       director: 'Martin Scorsese',
//       duration: '1h 53min',
//       genre: ['Crime', 'Drama'],
//       rate: '8.3'
//     },
//     {
//       title: 'To Kill a Mockingbird',
//       year: '1962',
//       director: 'Robert Mulligan',
//       duration: '2h 9min',
//       genre: ['Crime', 'Drama'],
//       rate: '8.3'
//     }
//   ];
  
// Iteration 1: All rates average - Get the average of all rates with 2 decimals 


function ratesAverage (arrMovie){
   let sumValue = sumArray(arrMovie);
   let total = calcAverage(sumValue, arrMovie.length)
   return total;
};

function calcAverage(totalValue, numberElements){
    let avarageValue = Number((totalValue / numberElements).toFixed(2));
    if(isNaN(avarageValue))
    {
        return 0;
    }
    return avarageValue;

};

function sumArray(arrMovie){
    let sumValue = arrMovie.reduce((sumValue, movies)=> sumValue + Number(movies.rate), 0);   
        
          return sumValue;
};

 
// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arrMovie){

    let dataFiltred = filterArrayGenre(arrMovie,"Drama"); 
    let averageDrama = ratesAverage(dataFiltred);
     
      return averageDrama;

    };

    function filterArrayGenre(arrMovie,textFilter){
        let dataFiltred = arrMovie.filter((item) => {       
            return item.genre.includes(textFilter);
          });
          return dataFiltred;
    }

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByDuration (moviesArray){

    let newOrder = moviesArray.sort(function (a, b) {
        if (a.duration < b.duration) {return -1;} //a é menor que b em algum critério de ordenação
        else if (a.duration > b.duration) {return 1;} //a é maior que b em algum critério de ordenação
        else if (a.title < b.title) {return -1;} 
        else if (a.title > b.title) {return 1;} 
        return 0;
    });


    return newOrder;


}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(arrMovies){
    let dataFiltred = filterArrayGenre(arrMovies,"Drama");
    let dataFiltredDirector = filterArrayDirector(dataFiltred,"Steven Spielberg"); 

    return dataFiltredDirector.length;

}

function filterArrayDirector(arrMovie,textFilter){
    let dataFiltred = arrMovie.filter((item) => {       
        return item.director.includes(textFilter);
      });
      return dataFiltred;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arrMovies){
    let newOrder = arrMovies.sort(function(a,b){
        if(a.title < b.title){return -1}
        else if (a.title > b.title){return 1}
        else return 0
    });
    if(newOrder.length > 20){
        return newOrder.splice(0,20).map(eachmovie => eachmovie.title);
    }
    else
    return newOrder.map(eachmovie => eachmovie.title);

}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function convertHours(duration) {
    let totalTime = 0;
    let hours = 0; 
    let minutes = 0;

    const time = duration.split(" ");
;
  
    if (time.length >= 2) {
        hours = parseInt(time[0]);
        minutes = parseInt(time[1])
    } else {
        if (time[0].indexOf("min") !== -1) {
            minutes = parseInt(time[0])
        } else if (time[0].indexOf("h") !== -1) {
            hours = parseInt(time[0]);
        }
    }
    totalTime = hours * 60 + minutes;
    return totalTime;
}

function turnHoursToMinutes(movies) {
    const newMovies = movies.map(function (movie) {
        const newMovie = { ...movie };
 
        newMovie.duration = convertHours(movie.duration);
        return newMovie;
    });
    return newMovies;
};

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies){


 
    let newArray = [];
    let sumYear = 0;
    let numbersMoviesYear = 0
    let year = 0;
    let maxAverage = 0;
    let yerMaxAverage = 0;

   let avarege = 0;    


    for (var i = 0; i < movies.length; i++) {
       if (newArray.indexOf(movies[i].year) == -1) {
        newArray.push(movies[i].year);
       }
    }

    for (var cont = 0; cont < newArray.length; cont += 1){
        sumYear = 0;
        numbersMoviesYear = 0;
        year = newArray[cont];
        numbersMoviesYear = 0;
        avarege = 0;
       

       for (var conta = 0; conta < movies.length; conta += 1){
     
          
           if (movies[conta].year == year){
          
            sumYear += Number(movies[conta].rate)
            numbersMoviesYear += 1;              
           }
        }      
        avarege = calcAverage(sumYear, numbersMoviesYear);
  
        if(avarege > maxAverage){
            maxAverage = avarege;
            yerMaxAverage = year;
        }
      
}


let arrayReturn = {
    year: yerMaxAverage,
    average: maxAverage
}
console.log(`The best year was ${yerMaxAverage} with an average rate of ${maxAverage}`)
return `The best year was ${yerMaxAverage} with an average rate of ${maxAverage}`
//console.log(arrayReturn);
 
}

// bestYearAvg(movies)


