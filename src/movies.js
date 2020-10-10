// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies){
    const arrayOfDirectors = movies.map((objeto)=>objeto.director);
    return arrayOfDirectors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function cleanArrayDirectors(directors){
    const directorsClean = directors.filter(directorDuplicado);
    return directorsClean;
}

function directorDuplicado(director, indice, array){ //Callback para comprobar si el director se encuentra ya en los elementos previos al índice actual
for(let i=0; i<indice;i++){
  if(array[i]===director)return false;
}
return true;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    const arrayOfDirectors = movies.filter((objeto)=>(objeto.director==="Steven Spielberg" && objeto.genre.includes("Drama")));
    return arrayOfDirectors.length;
  }

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies){
    let average = movies.reduce((acc, next)=>{
        return next.rate? acc + next.rate : acc + 0; //sumamos 0 si no existe puntuación

    },0);
    average = (average/movies.length) || 0; // media es igual a 0 si no hay películas
    return Number.parseFloat(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){
    let dramaMovies = movies.filter((value,index,array)=> value.genre.includes("Drama"));
    return ratesAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies){
    let nuevaArray = movies.slice(); //copia del array
    return nuevaArray.sort((a,b) =>{
        return a.year===b.year ? a.title.localeCompare(b.title) : a.year-b.year;
    });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies){
    let nuevaArray = movies.slice();
    nuevaArray.sort((a,b) =>{ //ordenamos alfabéticamente los objetos en función de title
        return a.title.localeCompare(b.title);
    });
    return nuevaArray.slice(0,20).map(value => value.title); //cortamos los 20 primeros elementos y mapeamos por title
    
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function conversion(horas){ //función auxiliar para hacer la conversión
    let indiceH = horas.indexOf("h"); //calculamos posición de la h en el formato de la duración
    let indiceM = horas.indexOf("m"); //calculamos posición de la m en el formato de la duración

    let h;
    let m;

    if(indiceH===-1){//en el caso de que solo nos pasen minutos
        m = horas.slice(0,indiceM);
        return  Number(m);
    }else{
        let h = horas.slice(0,indiceH);
        let m = horas.slice(indiceH+1,indiceM);
    
        return Number(h)*60 + Number(m);
    }
}

function turnHoursToMinutes(movies){
    let nuevaArray = movies.slice(); //copia del array

    return nuevaArray.map((objeto)=>{
        objeto.duration = conversion(objeto.duration); //utilizamos la función auxiliar de conversión en el mapeo
        return objeto;
    });
}



// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies){

    if(movies[0]){ //comprobamos que el array no sea vacío
    let newArray = [];
    
    movies.forEach(elem=>{
        if(!newArray.includes(elem.year)) newArray.push(elem.year);//creamos newArray con los años que sean distintos para luego aplicar un filtro
      });

      let mejorAverage =0;
      let mejorAño = 0;
      let rate = 0;
      let times = 0;
      let avg =0;

      for(let i=0;i<newArray.length;i++){ 
        rate = movies.reduce((acc, current)=>{ //sumamos los rates que coincidan con el año de la iteración actual sobre newArray
            if(current.year===newArray[i]){ 
                times++;
                return acc + current.rate;
                
            }else return acc;
        },0);
        avg = rate/times;
        if(avg>mejorAverage){ //actualizamos la mejor rate si es mayor que la guardada previamente
            mejorAño = newArray[i];
            mejorAverage = avg;
        }else if(avg===mejorAverage){ //en el caso de rates iguales comprobamos si el nuevo año del array es más antiguo que el guardado la última vez
            if(mejorAño-newArray[i]>0)mejorAño = newArray[i];
        }
        rate =0;
        times =0;
      }
    return `The best year was ${mejorAño} with an average rate of ${mejorAverage}`;
    }else return null;
}

