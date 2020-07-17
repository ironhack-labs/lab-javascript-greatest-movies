// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(array){

    const newArray = array.map(function(item){
        return item.director; 
     });

    return newArray;
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. 
//How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array){
    //var numbers = [1, 2, 3, 4, 5, 6];
 
    const newArray = array.filter(function(item){
      return item.director === 'Steven Spielberg' && item.genre.indexOf('Drama')>=0 ;
    });
     
    
    let numMovie = newArray.length;

   // console.log(numMovie);

    return numMovie;

}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array){

    const total = array.reduce(function (sum, item) {
        if (typeof item.rate === 'number')
        {
            return sum + item.rate;
        }else {
            return sum + 0;
        }
        
      },0);
    
    let avgTotal = 0;
    
    if (array.length === 0){
        return 0
    }

    avgTotal = total / array.length;
      
    return parseFloat(avgTotal.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array){

    const somaTotal = array.reduce(function (sum, item) {
        if (item.genre.indexOf('Drama')>=0){

            if (typeof item.rate === 'number')
            {
                return sum + item.rate;
            }else {
                return sum + 0;
            }

        }else{
            return sum + 0;
        }
      },0);

      const contDrama = array.reduce(function (cont, item) {
        if (item.genre.indexOf('Drama')>=0){
            return cont + 1;
        }else{
            return cont + 0;
        }
      },0);      
    
    let avgTotal = 0;
    
    if (contDrama === 0){
        return 0
    }

    avgTotal = somaTotal / contDrama;
      
    return parseFloat(avgTotal.toFixed(2));
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array){

  
    array.sort(function (a, b) {
    if (a.year > b.year) return 1; //  1 here (instead of -1 for ASC)
    if (a.year < b.year) return -1; // -1 here (instead of  1 for ASC)
    //if (a.year === b.year) return 0;
    if (a.year === b.year) {
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
        if (a.title === b.title) return 0;
        }
    });

    const newArray = Array.from(array)

    return newArray;

}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array){

    const newArray = Array.from(array);

    newArray.sort(function (a, b) {
            if (a.title > b.title) return 1;
            if (a.title < b.title) return -1;
            if (a.title === b.title) return 0;
        });
    
    const newArray2 = [];

    for (i=0; i<newArray.length && i<20; i++){
        newArray2.push(newArray[i]['title']);
    }
    //const newArray = Array.from(array)
    //console.log(newArray2);

    return newArray2;

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array){

    //const newArray = Array.from(array);
    const newArray = JSON.parse(JSON.stringify( array ));

    for(i = 0; i < newArray.length; i++){ 

        let hourOriginal = newArray[i]['duration'];
        let posHora = hourOriginal.indexOf('h');
        let posMin = hourOriginal.indexOf('min');

        let totHoras = 0;

        if (posHora>=0){
            totHoras += parseInt(hourOriginal.substr(0,1))*60;

            if (posMin>=0){
                totHoras += parseInt(hourOriginal.substr(3,2));
            }            
        }else {
            if (posMin>=0){
                totHoras += parseInt(hourOriginal.substr(0,2));
            }            
        }

        newArray[i]['duration'] = totHoras;
        //console.log(totHoras);
    }
    //console.log(newArray);
    return newArray;
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(array){

    if(array.length ===0){
        return null;
    }
    //[{year: xxxx, sum: nnnnn, count: xxxx}] objeto
    //varre o array principal para pegar o ano e o total
    const arrayAno = []
    for(i=0; i<array.length;i++){

        //varre o array do ano para achar o ano
        let lachou = false;
        for (j=0;j<arrayAno.length;j++){
            if (arrayAno[j]['year']===array[i]['year']){
                //soma no ano
                arrayAno[j]['sum'] =  arrayAno[j]['sum'] + array[i]['rate'];
                arrayAno[j]['count'] += 1 ;
                lachou = true;
            }
        }
        //se não achou insere o ano no array
        if (!lachou){
            arrayAno.push({'year': +array[i]['year'], 'sum': +array[i]['rate'], 'count': 1})
        }
    }

    //calcular a média de cada ano
    let maiorMedia = 0;
    let anoMaiorMedia = 0;

    for(i=0;i<arrayAno.length;i++){
        let media = 0;
        //atualiza a média no array
        media = arrayAno[i]['sum'] / arrayAno[i]['count'];
        arrayAno[i]['media'] = media;

        //verifica se a média é a maior e tiver média igual, pega o mais velho
        if (media > maiorMedia){
            maiorMedia = media;
            anoMaiorMedia = arrayAno[i]['year'] ;
        } else if(media === maiorMedia){ 
            if (anoMaiorMedia > arrayAno[i]['year']){
                maiorMedia = media;
                anoMaiorMedia = arrayAno[i]['year'] ; 
            }
        }
    }

    let strRetorno  = `The best year was `+anoMaiorMedia+` with an average rate of `+maiorMedia;
    
    
    console.log(strRetorno);

    return strRetorno ;

}
