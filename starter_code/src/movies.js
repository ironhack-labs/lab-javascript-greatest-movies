/* eslint no-restricted-globals: 'off' */
// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (array) => {
        newArray = array.map(obj => obj)
        return newArray.sort((a, b) => a.year - b.year || a.title.localeCompare(b.title))
    }
    // Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
const howManyMovies = array => {
        let counter = 0;
        const newArr = array.filter(elem => elem.director === "Steven Spielberg")
        newArr.forEach(element => element.genre.forEach(ele => {
            if (ele === "Drama") { counter++ }
        }))
        return counter;

    }
    // Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = array => {
        return newArr = array.map(obj => obj.title).sort().slice(0, 20)

    }
    // Iteration 4: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = array => {
        if (array.length > 0) {
            let acum = 0
            newArr = array.map(obj => obj.rate)
            newArr.forEach(element => {
                if (element) acum += element
            });
            return Number(parseFloat(acum / newArr.length).toFixed(2))
        } else return 0
    }
    // Iteration 5: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = array => {
        let counter = 0,
            rate = 0;
        newArray = array.map(obj => obj)
        newArray.forEach(element => element.genre.forEach(ele => {
            if (ele === "Drama") {
                counter++
                rate += element.rate
            }
            return 0
        }))
        return Number(parseFloat(rate / counter).toFixed(2))
    }
    // Iteration 6: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = (array) => {
        newArray = array.map(obj => obj)
        newArray.forEach(n1 => n1.duration = n1.duration.split(' '))
        newArray.forEach(n1 => n1.duration = (parseInt(n1.duration[0]) * 60) + parseInt(n1.duration[1]))
        return newArray
    }
    // BONUS Iteration: Best yearly rate average - Best yearly rate average