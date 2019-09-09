/*eslint no-restricted-globals: 'off'*/

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(arr) {
    let sum = 0;
    sum = arr.reduce((total, item) => total += item.rate, 0);
    return parseFloat((sum / arr.length).toFixed(2))
};

// Iteration 2: Drama movies - Get the average of Drama Movies
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

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
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

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
    let durationMin = [];
    let movieTime = 0;
    //forma de fazer a cópia criando um novo array sem referenciar
    const newArr = JSON.parse(JSON.stringify(arr));
    durationMin = newArr.map(function (item, index) {
        //verificar se existe parâmetro de horas.
        //Se tiver, o indexOf vai retornar um valor acima de -1.
        //Se tiver o h, pegar o valor do inicio até o indice do h, que são as horas, e multiplica por 0.
        if (item.duration.indexOf('h') >= 0) {
            movieTime += item.duration.slice(0, item.duration.indexOf('h')) * 60;
            //se tiver minutos, pega o valor entre o espaço e o m e converte em numero, com a multiplicação por 1
            if (item.duration.indexOf('m') >= 0) {
                movieTime += 1 * item.duration.slice(item.duration.indexOf(' '), item.duration.indexOf('m'));
            }
        } else {
            // se nao tiver h, o valor do inicio até o indice de m será os minutos.
            // o 1* é pra converter rapidamente a string em numero.
            movieTime += 1 * item.duration.slice(0, item.duration.indexOf('m'));
        }
        //atribui o valor calculado para a duraçao de cada objeto
        item.duration = movieTime;
        //retorna o objeto, ou seja, o item.
        return item;
    });
    return durationMin;
 }
console.log(turnHoursToMinutes(movies))

// BONUS Iteration: Best yearly rate average - Best yearly rate average