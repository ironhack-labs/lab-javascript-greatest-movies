// const movies = [{
//     title: 'The Shawshank Redemption',
//     year: '1994',
//     director: 'Frank Darabont',
//     duration: '2h 55min',
//     genre: ['Crime'],
//     rate: '9.3'
//     },
//     {
//       title: 'The Godfather',
//       year: '1972',
//       director: 'Francis Ford Coppola',
//       duration: '2h 55min',
//       genre: ['Crime', 'Drama'],
//       rate: '9.2'
//     },
// ];

const timeStringToNumber = (string) => {

    if (Number.isInteger(string)) {
        return string;
    }

    const hour_result = /([0-9]*)h/.exec(string);
    const min_result = /([0-9]*)min/.exec(string);

    return (!!hour_result ? +hour_result[1] * 60 : 0) + (!!min_result ? +min_result[1] : 0);
};

const turnHoursToMinutes = (array) => array.map(movie => ({...movie, duration: timeStringToNumber(movie.duration)}));


const ratesAverage = (array) => !!array.length
    ? Math.floor(Math.round(100 * array.reduce((acc, val) => acc + +val.rate, 0) / array.length)) / 100 
    : undefined;

const filterDramaMovies = (array) => array.filter(movie => !!movie.genre.filter(genre => genre === 'Drama').length)

const dramaMoviesRate = (array) => ratesAverage(filterDramaMovies(array));

const orderByDuration = (array) => turnHoursToMinutes(array).sort((a, b) => {
    
    if (a.duration < b.duration) {
        return -1
    } else if (a.duration > b.duration) {
        return 1
    }

    if (a.title < b.title) {
        return -1;
    } else if (a.title > b.title) {
        return 1;
    }

    return 0;
});

const howManyMovies = (array) => {

    if (array.length === 0) return undefined;

    const count = filterDramaMovies(array).filter(movie => movie.director === 'Steven Spielberg').length;

    return `Steven Spielberg directed ${count} drama movies!`
};

const orderAlphabetically = (array) => {
    const titles = array.sort((a, b) => {
        if (a.title < b.title) return -1
        else if (a.title > b.title) return 1
        return 0
    }).map(movie => movie.title); 

    return titles.length <= 20 ? titles : titles.slice(0, 20);
};

const bestYearAvg = (array) => {

    if (array.length === 0) return undefined;

    const sifted = {};

    array.forEach(movie => {
        if (sifted.hasOwnProperty(movie.year)) {
            sifted[movie.year].push(movie)
        } else {
            sifted[movie.year] = [movie];
        }
    });

    const avgs = [];

    Object.keys(sifted).forEach(year => {
        avgs.push([year, ratesAverage(sifted[year])]);
    });

    const sorted = avgs.sort((a, b) => {
        if (a[1] < b[1]) return 1;
        else if (a[1] > b[1]) return -1;
        return 0;
    });

    return `The best year was ${sorted[0][0]} with an average rate of ${sorted[0][1]}`
};
