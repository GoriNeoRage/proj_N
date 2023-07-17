const numberOfFilms = +prompt ("How many films have you already seen?", " ")

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt ("What was the last film you have seen?", " "),
      b = +prompt ("Rate the film", " "),
      c = prompt ("What was the last film you have seen?", " "),
      d = +prompt ("Rate the film", " ")



personalMovieDB.movies [a] = b;
personalMovieDB.movies [c] = d;

console.log(personalMovieDB);