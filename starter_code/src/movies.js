/*eslint no-restricted-globals: 'off'*/
/*let movies = [{
        title: 'The Shawshank Redemption',
        year: '1994',
        director: 'Steven Spielberg',
        duration: '3h 22min',
        genre: ['Crime', 'Drama'],
        rate: '9.3'
    },
    {
        title: 'The Godfather',
        year: '1972',
        director: 'Francis Ford Coppola',
        duration: '2h 55min',
        genre: ['Crime', 'Drama'],
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
        title: 'Bacheha-Ye aseman',
        year: '1997',
        director: 'Majid Majidi',
        duration: '1h 29min',
        genre: ['Drama', 'Family'],
        rate: '8.4'
    },
    {
        title: 'The Great Escape',
        year: '1963',
        director: 'John Sturges',
        duration: '2h 52min',
        genre: ['Adventure', 'Drama', 'History', 'Thriller', 'War'],
        rate: '8.2'
    },
    {
        title: 'Ikiru',
        year: '1952',
        director: 'Akira Kurosawa',
        duration: '2h 23min',
        genre: ['Drama'],
        rate: '8.3'
    },
    {
        title: 'Chinatown',
        year: '1974',
        director: 'Roman Polanski',
        duration: '2h 10min',
        genre: ['Drama', 'Mystery', 'Thriller'],
        rate: '8.2'
    },
    {
        title: 'El laberinto del fauno',
        year: '2006',
        director: 'Guillermo del Toro',
        duration: '1h 58min',
        genre: ['Drama', 'Fantasy', 'War'],
        rate: '8.2'
    },
    {
        title: 'Tonari no Totoro',
        year: '1988',
        director: 'Hayao Miyazaki',
        duration: '1h 26min',
        genre: ['Animation', 'Family', 'Fantasy'],
        rate: '8.2'
    },
    {
        title: 'Incendies',
        year: '2010',
        director: 'Denis Villeneuve',
        duration: '2h 11min',
        genre: ['Drama', 'Mystery', 'War'],
        rate: '8.2'
    },
    {
        title: 'Ran',
        year: '1985',
        director: 'Akira Kurosawa',
        duration: '2h 42min',
        genre: ['Action', 'Drama'],
        rate: '8.2'
    },
    {
        title: 'The Gold Rush',
        year: '1925',
        director: 'Charles Chaplin',
        duration: '1h 35min',
        genre: ['Adventure', 'Comedy', 'Drama', 'Family'],
        rate: '8.2'
    },
    {
        title: 'El secreto de sus ojos',
        year: '2009',
        director: 'Juan José Campanella',
        duration: '2h 9min',
        genre: ['Drama', 'Mystery', 'Romance', 'Thriller'],
        rate: '8.2'
    },
    {
        title: 'Inside Out',
        year: '2014',
        director: 'Pete Docter',
        duration: '1h 35min',
        genre: ['Animation', 'Adventure', 'Comedy', 'Drama', 'Family', 'Fantasy'],
        rate: '8.2'
    },
    {
        title: 'Judgment at Nuremberg',
        year: '1961',
        director: 'Stanley Kramer',
        duration: '3h 6min',
        genre: ['Drama', 'War'],
        rate: '8.3'
    },
    {
        title: 'On the Waterfront',
        year: '1954',
        director: 'Elia Kazan',
        duration: '1h 48min',
        genre: ['Crime', 'Drama', 'Thriller'],
        rate: '8.2'
    },
    {
        title: 'Hauru no ugoku shiro',
        year: '2004',
        director: 'Hayao Miyazaki',
        duration: '1h 59min',
        genre: ['Animation', 'Adventure', 'Family', 'Fantasy'],
        rate: '8.2'
    },
    {
        title: 'The Bridge on the River Kwai',
        year: '1957',
        director: 'David Lean',
        duration: '2h 41min',
        genre: ['Adventure', 'Drama', 'War'],
        rate: '8.2'
    },
    {
        title: 'Room',
        year: '2015',
        director: 'Lenny Abrahamson',
        duration: '1h 58min',
        genre: ['Drama'],
        rate: '8.2'
    },
    {
        title: 'Det sjunde inseglet',
        year: '1957',
        director: 'Ingmar Bergman',
        duration: '1h 36min',
        genre: ['Drama', 'Fantasy'],
        rate: '8.2'
    },
    {
        title: 'Lock, Stock and Two Smoking Barrels',
        year: '1998',
        director: 'Guy Ritchie',
        duration: '1h 47min',
        genre: ['Comedy', 'Crime'],
        rate: '8.2'
    },
    {
        title: 'Mr. Smith Goes to Washington',
        year: '1939',
        director: 'Frank Capra',
        duration: '2h 9min',
        genre: ['Comedy', 'Drama'],
        rate: '8.2'
    },
    {
        title: 'Blade Runner',
        year: '1982',
        director: 'Ridley Scott',
        duration: '1h 57min',
        genre: ['Sci-Fi', 'Thriller'],
        rate: '8.2'
    },
    {
        title: 'Casino',
        year: '1995',
        director: 'Martin Scorsese',
        duration: '2h 58min',
        genre: ['Crime', 'Drama'],
        rate: '8.2'
    },
    {
        title: 'A Beautiful Mind',
        year: '2001',
        director: 'Ron Howard',
        duration: '2h 15min',
        genre: ['Biography', 'Drama'],
        rate: '8.2'
    },
    {
        title: 'The Elephant Man',
        year: '1980',
        director: 'David Lynch',
        duration: '2h 4min',
        genre: ['Biography', 'Drama'],
        rate: '8.2'
    },
    {
        title: 'Smultronstället',
        year: '1957',
        director: 'Ingmar Bergman',
        duration: '1h 31min',
        genre: ['Drama', 'Romance'],
        rate: '8.2'
    },
    {
        title: 'V for Vendetta',
        year: '2005',
        director: 'James McTeigue',
        duration: '2h 12min',
        genre: ['Action', 'Drama', 'Thriller'],
        rate: '8.2'
    },
    {
        title: 'The Wolf of Wall Street',
        year: '2013',
        director: 'Martin Scorsese',
        duration: '3h',
        genre: ['Biography', 'Comedy', 'Crime', 'Drama'],
        rate: '8.2'
    },
    {
        title: 'The General',
        year: '1926',
        director: 'Clyde Bruckman',
        duration: '1h 7min',
        genre: ['Action', 'Adventure', 'Comedy', 'Drama', 'War', 'Western'],
        rate: '8.2'
    },
    {
        title: 'Warrior',
        year: '2011',
        director: 'Gavin O\'Connor',
        duration: '2h 20min',
        genre: ['Drama', 'Sport'],
        rate: '8.2'
    }
];*/

/*var movies = [
    { title: "aab" },
    { title: "aaa" },
    { title: "abc" },
    { title: "acb" },
    { title: "abb" }
];*/

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(arr) {
    let sum = 0;
    sum = arr.reduce((total, item) => total += item.rate, 0);
    return parseFloat((sum / arr.length).toFixed(2))
};


function dramaMoviesRate(arr) {
    let sum = 0;
    let dramaMovie = [];
    dramaMovie = arr.filter(item => item.genre.includes("Drama"));
    if (dramaMovie.length === 0) {
        return 0
    }
    sum = dramaMovie.reduce((total, item) => {
        if (item.rate === '') {
            total += 0
        } else {
            total += parseFloat(item.rate)
        } //console.log(item.rate)
        return total
    }, 0); //console.log('sum',sum)
    return parseFloat((sum / dramaMovie.length).toFixed(2));
};

// Iteration 2: Drama movies - Get the average of Drama Movies
function orderByDuration(arr) {
    let orderMovie = [];
    orderMovie = [...arr];
    orderMovie.sort((a, b) => {
        if (a.duration > b.duration) {
            return 1;
        } else if (a.duration < b.duration) {
            return -1;
        } else {
            let k = a.title;
            let j = b.title;
            let comp = 0;
            return (k).localeCompare(j);
        }
    })
    return orderMovie;
}
//console.log(orderByDuration(movies));

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function turnHoursToMinutes(arr) {
    let durationMin = [];
    let durMinutesS = [];
    let movieTime = 0;
    let newArr = [];
    newArr = arr.map(function (item) {
        let durationOriginal = item.duration;
        durationMin = durationOriginal.split('h ');
        movieTime = parseInt(durationMin[0]) * 60;
        durMinutesS = durationMin[1].split('min');
        movieTime += parseInt(durMinutesS[0]);
        item.duration = movieTime;
        return item;
    });
    return newArr;
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(arr) {
    let dramaMovie = [];
    dramaMovie = arr.filter(item => item.genre.includes("Drama")).filter(item => item.director.includes("Steven Spielberg"));
    return dramaMovie.length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
    
    let orderArr = [];
    let total = 0;
    arr.sort((a, b) => {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    });
    if (arr.length < 20) {
        total = arr.length;
    } else {
        total = 20;
    }
    for (let i = 0; i < total; i += 1) {
        orderArr.push(arr[i].title);
    }
    //console.log(orderArr)
    return orderArr;
}
console.log(orderAlphabetically(movies))
/*console.log(movies.sort((a, b) => {
    if (a.title < b.title) {
        return -1;
    }
    if (a.title > b.title) {
        return 1;
    }
    return 0;
}));*/


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average