/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (array) => {
    const newArray = [...array] //guarda array nueva
    const sorted = newArray.sort((a,b)=> {
        if (a.year === b.year){
            // newArray.sort((a,b =>
        } else {

        }
        a.year-b.year
    })

    return sorted
    // (a,b) => a-b)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
const howManyMovies = array => { const newArray = array.filter(obj => {
    if (obj.director.includes('Steven Spielberg') && obj.genre.includes('Drama')){
}})
    return newArray.length
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = array => {
    return array.map(obj => obj.title).sort().slice(0,20)
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = array => {
    let counter = 0;
    array.forEach(value => {
    if(value.rate != null){
        counter += value.rate;
    }
})
    if (array.length === 0){
        return 0
    } else {
        return Number(parseFloat(counter/array.length).toFixed(2))
    }
}
// Iteration 5: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = array => {
    let counter = 0;
    const newArr = array.filter(value => value.genre.includes('Drama'))
    newArr.forEach(obj => counter += obj.rate)
    if (array.length === 0){
        return 0
    } else {
        return Number((counter/array.length).toFixed(2))
    }
}



// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes = array => {
    let hours = 0;
    let minutes = 0;
    const newArr = array.map(obj => { //Aqui mapeamos para generar un nuevo arreglo con los valores
        for(i=0; i<obj.duration.length; i++){ //Hacemos un for que saca los numeros del texto duration
            if(obj.duration[i].parseInt() === Number){
              hours += obj.duration //agrega el string de numeros a variable horas
            }
        }
        if(obj.duration.includes('h')){ //si es h multiplica el primer numero del string por 60 y le suma lo demas
            minutes = hours[0].parseInt()*60 + hours.slice(1).parseInt() //guarda minutes en variable minutes
        } else {
            minutes = obj.duration.parseInt()
            console.log(minutes)
        }
        obj["duration"] = minutes //cambia el valor de obl.duration
        return obj //regresa el objeto con el cambio, y se va guardando en un nuevo array que es el que se regresa al final
    })
    return newArr //aqui regresamos arreglo con objetos
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
