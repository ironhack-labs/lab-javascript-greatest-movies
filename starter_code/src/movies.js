/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
const turnHoursToMinutes = (arr) => {
    let newArr = []
    let minutes
    let str
    for(let i = 0; i<arr.length; i++){
      newArr.push(arr[i])
    }
    //console.log('1 auqi')
    for(let i =0; i<newArr.length; i++){
      str = newArr[i].duration
      minutes = parseInt(str.slice(0,1))*60+parseInt(str.slice(2,5))
     
      //console.log(minutes)
      
    }
    //console.log('2 auqi')
    for(let i=0; i<newArr.length; i++){
      newArr[i].duration = minutes
    }
    //console.log('ya no debio pasar nada')
    console.log(newArr, arr)
    
    return newArr
    //console.log(newArr)
  }


// Get the average of all rates with 2 decimals 
const ratesAverage = (arr) => {
    let numRate
    let suma = 0
    for(let i = 0; i<arr.length; i++){
        numRate = arr[i].rate
        numRate = parseFloat(numRate).toFixed(2)
        numRate = parseFloat(numRate)
        suma += numRate
    }
    suma = suma/arr.length
    //console.log(suma)
    return suma
  }

// Get the average of Drama Movies
const dramaMoviesRate = ( arr ) => {
    let numRate 
    let suma =0
    let numeroElementos = 0
    for(let i = 0; i<arr.length; i++){
        if(arr[i].genre.includes('Drama')){
            if(arr[i].rate === undefined || null || 0){
            numRate = 0
        }else{
            numRate = arr[i].rate
            numeroElementos ++
        }
        numRate = parseFloat(numRate).toFixed(2)
        numRate = parseFloat(numRate)
        suma += numRate 
        }
    }
    if(suma == 0){
        suma = undefined
    }else{
        suma = suma/numeroElementos 
        suma = suma.toFixed(2)
        suma = parseFloat(suma) 
    }
    //console.log(suma)
    return suma
}

// Order by time duration, in growing order
const orderByDuration = ( arr ) => {
    let newArr = []
    for(let i = 0; i<arr.length; i++){
        newArr.push(arr[i])
    }
    newArr.sort((a,b) => {
        if (a.duration > b.duration) {
          return 1;
        }
        if (a.duration < b.duration) {
          return -1;
        }
        else if(a.duration === b.duration){
            newArr.sort((a,b) => {
                if(a.title > b.title) {
                    return 1
                }
                else if(a.title < b.title){
                    return -1
                }
                else{
                    return 0
                }
            })
            
        }
        else{
            return 0
        }
    });
    return newArr
}

// How many movies did STEVEN SPIELBERG
const howManyMovies = ( arr ) => {
    let countOfMovies = 0
    let statementOfMovies
    if(arr.length ==0){
        return undefined
    }else{
        for(let i = 0; i<arr.length; i++){
            if(arr[i].director === 'Steven Spielberg' && arr[i].genre.includes('Drama')){
                countOfMovies ++
                statementOfMovies = `Steven Spielberg directed ${countOfMovies} drama movies!`
            }else {
                statementOfMovies = `Steven Spielberg directed ${countOfMovies} drama movies!`
            }
        }
        countOfMovies.toString()
        return statementOfMovies
    }
    
}

// Order by title and print the first 20 titles
const orderAlphabetically = ( arr ) => {
    let newArr = []
    let lengthArr = arr.length
    for(let i = 0; i<lengthArr; i++){
        if(arr.length>20){
            lengthArr = 20
        }
        newArr.push(arr[i].title)
    }
    newArr.sort( (a,b) => {
        if ( a > b ){
            return 1
        }else if ( a < b ){
            return -1
        }else {
            return 0
        }

    })
    return newArr
}

// Best yearly rate average
const bestYearAvg = ( arr ) => {
    let newArr = []
    let sum = 0
    let obj = {}
    if( arr.length == 0){
        return undefined
    }else{
        for(let i = 0; i<arr.length; i++){

            if(newArr.includes(arr[i].year)==false){
                newArr.push(arr[i].year)
            }
        }
        return sum
    }

}