function turnHoursToMinutes(movies) {

  var returnNewMovies = movies.map((element) => {


    switch (true) {
      case element.duration.includes('h') && element.duration.includes('min'):
        var elementSeparado = element.duration.split(' ');
        newDuration = parseInt(elementSeparado[0]) * 60 + parseInt(elementSeparado[1]);
        break;
      case element.duration.includes('h') && !element.duration.includes('min'):
        newDuration = parseInt(element.duration) * 60;
        break;
      default:
        newDuration = parseInt(element.duration);
        break;
    }

    return { duration: newDuration };

  });
  return returnNewMovies;
}



function ratesAverage(movies) {
  var somaRate = movies.reduce((a, b) => ({ rate: parseFloat(a.rate) + parseFloat(b.rate) }));
  return somaRate.rate / movies.length;
}


function dramaMoviesRate(movies) {

  // console.log( movies[0].rate )

  if (movies.length === 1) return movies[0].rate * 1;


  let resultAverage = 0;

  let drama = movies.filter(function (movie) {
    return !movie.genre.indexOf("Drama");
  });
  if (drama.length === 0) return;
  drama.forEach(function (item) {

    if (item.rate) resultAverage += parseFloat(item.rate);

  });

  return parseFloat((resultAverage / drama.length).toFixed(2));
}

function orderByDuration(movies) {

  let movies2 = movies.sort(function (a, b) {

    if (a.duration > b.duration) {

      return 1
    }

    if (a.duration < b.duration) {
      return -1
    } else {
      if (a.title < b.title) {
        return -1

      } else {

        return 1
      }
    }
  })
  return movies2
}


function orderAlphabetically(movies) {

  var Ordenado = movies.sort(function (a, b) {


    return a.title > b.title ? 1 : -1;

  });


  var titulo = Ordenado.map(function (a) {
    return a.title;
  });

  //console.log("titulo", titulo)

  //retornar os 20 objetos 
  return titulo.slice(0, 20);
}



function bestYearAvg(movies) {

  //console.log(movies)

  if (movies != "") {

      grupos = {}
      agrupados = [];

    movies.forEach(function (obj) {
      //console.log("passando por cada objeto")
      //   console.log(obj)

      if (!grupos[obj.year]) {

        
        grupos[obj.year] = [];
        agrupados.push({ year: obj.year, rate: grupos[obj.year] });
      }
      //console.log("groups[obj.year]",groups[obj.year])
      grupos[obj.year].push(obj.rate);
    });

    var gruposOraganizados = agrupados.sort(function (a, b) {

      return a.year > b.year ? 1 : -1;

    });

    var reduceGrupos = gruposOraganizados.map(function (group) {

     // console.log(reduceGroups)

      var novoGrupo = group.rate;
      var totalGrupos= novoGrupo.reduce(function (a, b) {
        return a += (b * 1);
      }, 0);
      var media = (totalGrupos / novoGrupo.length).toFixed(2) * 1;
      return { year: group.year, rate: media };

    });

    var ordenaAnos = reduceGrupos.sort(function (a, b) {
      return b.rate - a.rate;
    });


    return "The best year was " + ordenaAnos[0].year + " with an average rate of " + ordenaAnos[0].rate;
  } else {
    return undefined;
  }
}
function howManyMovies(movies) {


  if (movies != "") {

    var filter = movies.filter(function (element) {

      return element.director == "Steven Spielberg" && element.genre.indexOf('Drama') != -1;


    });

    return "Steven Spielberg directed " + filter.length + " drama movies!";

  } else {

    return undefined;
  }

}
