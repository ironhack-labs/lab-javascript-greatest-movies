![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | Greatest Movies of All Time

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_1561a196c2e3852533bad64d9b0d4e9f.gif)

## Introduction

We've just learned some super useful methods, that will help us a lot to manipulate __objects and arrays__. In this exercise, we will focus on practicing them, and this being said, it is mandatory to implement at least one of them in each iteration.

Best way to practice is to work with real data. In the __`src/data.js`__ file you will find an array of info about __the best 250 movies of all times__ according to [IMDB Ranking](http://www.imdb.com/chart/top?ref_=nv_mv_250_6) and you have to process it to display what each iteration ask! :muscle:

## Requirements

- Fork this repo
- Clone this repo
- Practice JavaScript advanced methods (`map`, `reduce`, `filter` and `sort` to manipulate arrays)

## Submission

- Upon completion, run the following commands:

  ```
  git add .
  git commit -m "done"
  git push origin master
  ```

- Create Pull Request so your TAs can check up your work.

## Starter code

The `src/data.js` contains an array of 250 movies. We are talking about the array of 250 _objects_ containing the info about each movie. Here is one example of how the data is displayed:

```javascript
{
  "title":"The Shawshank Redemption",
  "year":1994,
  "director":"Frank Darabont",
  "duration":"2h 22min",
  "genre":["Crime","Drama"],
  "rate":9.3
}
```

In the next a couple of iterations, you will be using your JS knowledge to manipulate with this data.

## Instructions

You will be digging deeper into some "facts" that this set of data has in it. We see all this raw data, but that doesn't tell us a lot. For example, if we want to see which is the most popular movie, what is the average duration of the movie, list of movies by some director, etc. we wouldn't find the answers just by observing this array.
Well, there comes your challenge. Read each iteration description carefully and let's start working on the solutions.

You have to work on the `src/movies.js` file.

### Tests

Ohh yes! We have our beloved tests, and you already know how this works. Open the `SpecRunner.html` file on your browser and start coding to pass the test. Remember to focus on one test at a time and read carefully the instructions to understand what you have to do.

### Iteration 1: Order by year

We need to sort the movies in ascending order by their release year. This should be easy using one of the __methods__ we've just learned. :wink:
Create a function `orderByYear()` that receives an array as parameter and returns a _sorted array_.

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_3db351079827c0acba42cf1e397dd8a3.gif)

If two movies have the same year, order them in alphabetical order by their title! :heavy_check_mark:

__:bulb: Make sure not to mutate the original array :wink:__

### Iteration 2: Steven Spielberg. The best?

One of the most famous directors in cinema is __[Steven Spielberg](https://en.wikipedia.org/wiki/Steven_Spielberg)__, and he has some really awesome drama movies that are on our list, but we want to know how many of them are there.

Go ahead and create a `howManyMovies()` function that receives an array as a parameter and `filter` :eyes: the array so we can have only the __drama__ movies where __Steven Spielberg__ is the director.

### Iteration 3: Alphabetic order

Another popular way to order the movies is to sort them alphabetically using the `title` key. However, in this case, we only need to print the title of the first 20. Easy peasy for an expert like you. :wink:

Create a `orderAlphabetically()` function, that receives an array and returns an array of first 20 titles, alphabetically ordered. Return only the title of each movie, and if the array you receive has less than 20 movies, return all of them.

### Iteration 4: All rates average

These are the best movies based on their rates, so supposedly all of them have a remarkable rate. In this iteration, we want to know the average rate of all of them and display it on the console. Create a `ratesAverage()` function that receives an array as a parameter and solves the challenge.

The rate must be returned rounded to 2 decimals!

__:bulb: Maybe you want to _"reduce"_ the data to a single value. :wink:__

### Iteration 5: Drama movies

Drama is the genre that repeats the most on our `array`. Apparently, people love drama! :eyes:

Create a `dramaMoviesRate()` function that receives an array as a parameter to get the average rate of all drama movies! Let's see if it is better than the general average.

Again, rounded to 2 decimals!

### Iteration 6: Time format

We get the info from the __IMDB__ web page, but the duration info was saved in a format that difficult us a lot to compare movies.

Finding the longest movie is almost impossible using that format, so let's change it!

<!-- **:bulb: Remember we have a methods o create a new array from another one!** -->

- Create a `turnHoursToMinutes()` function that receives an array as parameter, and with some _magic_ implemented by you - replaces the duration info of each of the movies for its equivalent in minutes. For example:

```javascript
{
  "title":"The Shawshank Redemption",
  "year":1994,
  "director":"Frank Darabont",
  "duration":"2h 22min",
  "genre":["Crime","Drama"],
  "rate":9.3
}
```

Should be:

```javascript
{
  "title":"The Shawshank Redemption",
  "year":1994,
  "director":"Frank Darabont",
  "duration":142,
  "genre":["Crime","Drama"],
  "rate":9.3
}
```

__Keep in mind__, you have to return a new array with all the info about movies, meaning, you shouldn't modify the original array. :white_check_mark:

### BONUS: Best yearly rate average

We always hear so much about classic movies, but we want to know which year has the best average rate, so we can declare the __BEST YEAR FOR CINEMA__ officially!

Go ahead and find which year have the best average rate for the movies that were released on that year!
Create `bestYearAvg()` function that receives an array of movies and gives us an answer which year was the best year for cinema and what was its average rate.

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_dfc3fe557576abca4dba274e3aabe9a3.gif)

__Happy coding!__ :heart:
