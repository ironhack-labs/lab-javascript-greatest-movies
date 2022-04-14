// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {

    const spielbergMovies = array.filter => (el.director === "Steven Spielberg" && el.genre.includes('Drama'));
    
    return spielbergMovies.length
      }

      function orderAlphabetically(array) {

        let twentyArray =[];
        
          array.sort((a, b) => {
            if (a.title < b.title) return -1;
            if (a.title > b.title) return 1;
            if (a.title === b.title) return 0;
          });
          return (twentyArray = [...array]).slice(0,19)
        }
        
        console.log (orderAlphabetically(movies))