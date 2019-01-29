/* eslint no-restricted-globals: 'off' */
function turnHoursToMinutes(movies){
    return movies.map(peli => {
      // se hace copia del objeto para evitar que se modigique el objeto original
      let nuevaPeli = Object.assign({}, peli);
      // se invoca funcion para convertir duracion a minutos
      nuevaPeli.duration = convertDuration(nuevaPeli.duration);
      return nuevaPeli;
    })
  }
  
  // funcion auxiliar para convertir duracion a minutos
  function convertDuration (par){
    // se divide la cadena por un espacio, para tener una o dos partes,
    // una con la de horas y otra con la de minutos
    var hrmin = par.split(" ");
  
    // se genera un nuevo arreglo donde ya se ha recuperado la cantidad de 
    // minutos de las horas y los minutos como tal
    var hrminnumber = hrmin.map (function (item){ 
    
    // si la cadena tiene 'h', se hace split para elminar la h 
    // y recuperar el numero  
    if (item.includes('h'))
      return parseInt(item.split('h'))*60
  
    // si la cadena tiene 'min', se hace split para elminar el min
    // y recuperar el numero  
    if (item.includes('min'))
      return parseInt(item.split('min'))
  
    }) 
  
    // despues de tener el nuevo arreglo, se reduce para devolver una suma
    return hrminnumber.reduce (function(acc,val){
        return acc += val    
    },0);
  }

// Get the average of all rates with 2 decimals 

//Crear un arreglo que reciba un objeto de arreglos para que los vaya reduciendo a un unico valor

function ratesAverage(array){
    //se crea la variable que reducira cada elemento del arreglo de objetos para saber las tarifas promedio
    var sumsingle = array.reduce(function(a, single){
    //se llama a la funcion atraves de un return para que atravez de un parsefloat devuelva un numero ya procesado
    // tenemos que convertir la cadena a numero
        return a + parseFloat(single.rate);
    }, 0);
    //  para obtener el promedio , tenemos que sumar los valores y dividirlos por el numero de valores
    average = sumsingle/ array.length;
    //lamamos al promedio de las mejores tarifas    
    return average;
  }
  


// Get the average of Drama Movies

function dramaMoviesRate(movies){
    // se filtra el arreglo de entrada por solo aquellas peliculas cuyo genero sea drama
    let dramaMovies = movies.filter(peli => peli.genre.includes('Drama'));
  
    // si no hay ninguna pelicula de drama, se devuelve undefined
    if (dramaMovies.length === 0) return undefined;
  
    // aplicamos funcion reduce para hacer suma de la calificacion de cada pelicula de drama
    let promedio = dramaMovies.reduce(function (acc, drama){
      // si la propiedad rate esta indefinida o es igual a una cadena vacia, se toma como cero
      if (drama.rate === undefined || drama.rate === "") return acc+= 0;
      // de otro modo, se acumula su valor despues de convertirlo a un float
        return acc += parseFloat(drama.rate);
    },0) / dramaMovies.length;
    
    // Se usa metodo toFixed para solo devolver los ultimos decimales, sin 
    // embargo este metodo devuelve un String por lo que se vuelve a usar
    // parseFloat para convertirlo de vuelta a un Float y devolverlo
    return parseFloat(promedio.toFixed(2));
  }


// Order by time duration, in growing order
  







// How many movies did STEVEN SPIELBERG

function howManyMovies (movies){
    // se devuelve undefined si el arreglo esta vacio
    if (movies.length === 0) return undefined;
  
    // se filtra el arreglo de entrada por solo aquellas peliculas cuyo
    // director sea Spilberg y que sean peliculas de drama
    let spielbergMovies = movies.filter(peli => peli.director == 'Steven Spielberg' && peli.genre.includes('Drama'));
  
    if (spielbergMovies.length === 0) return 'Steven Spielberg directed 0 drama movies!';
  
    return "Steven Spielberg directed " + spielbergMovies.length + " drama movies!";
  
  }


// Order by title and print the first 20 titles
//Se crea una funcion que tendra un arreglo el codigo para obtener el orden alfabetico de los titulos
function orderAlphabetically(array){
//se crea la variable para un definir el parametro
//esta tiene que cambiar el orden de duracion 
  var titleArray = [];
  //se crea usa un for each para hace run llamado a un arreglo
  array.forEach(function(elem){
    //con un push se  nos devolvera la longitud del arreglo
    titleArray.push(elem.title);
  });
  //y sort comparara y clasificara la secuencia de los valores 
  titleArray.sort();
  //y con el lenght revisamos la una cantidad especifica a medir
  if (titleArray.length >= 20){
    titleArray = titleArray.slice(0,20);
  }
  //regresamos que se ejecute por cada titulo
  return titleArray;
}


// Best yearly rate average
