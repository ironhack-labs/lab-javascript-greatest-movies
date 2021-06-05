const names = ["Benjamin", "GiGi", "Joao", "Vitor", "Tiago", "Beatriz"];
//1. Use filter to return only the names that start with B

const bNames = names.filter((nomes) => nomes.startsWith("B"))

console.log(bNames)

function organize(){
    console.log("-=".repeat(25))
}

organize()

function howManyMovies(movies) {
    const dramasMovies = movies.filter((drama)=>{
      return drama.genre.includes("Drama")
    })
    return dramasMovies
  }

  const movies = [
    {
      title: 'The Shawshank Redemption',
      year: 1994,
      director: 'Frank Darabont',
      duration: '2h 22min',
      genre: ['Crime', 'Drama'],
      score: 9.3
    },
    {
      title: 'The Godfather',
      year: 1972,
      director: 'Francis Ford Coppola',
      duration: '2h 55min',
      genre: ['Crime'],
      score: 9.2
    },
    {
      title: 'The Godfather: Part II',
      year: 1974,
      director: 'Francis Ford Coppola',
      duration: '22min',
      genre: ['Crime', 'Drama'],
      score: 9
    }]

    console.log(howManyMovies(movies))

    organize()



const students = ["Stefano", "Luis", "Danilo", "Tiago", "Joao"];

students.sort(); //Organizar por ordem alfabética

console.log(students)


organize()

function getAllDirectors(movies) {
    const directors = movies.map((dir) => {
      return dir.director
    })
    return directors
  }
  

  organize()






  console.log(turnHoursToMinutes(movies))