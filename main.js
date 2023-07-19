"use strict"

const numberOfFilms = +prompt ("How many films have you already seen?", " ")

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for ( let i = 0; i < 2; i++){
      const a = prompt ("What was the last film you have seen?", " "),
            b = +prompt ("Rate the film", " ");
    if (a != null && b != null && a != "" && b!= "" && a.length <50){
        personalMovieDB.movies[a]=b;
        console.log("done");
    } else{
        console.log("error");
        i--
    }
}     

if(personalMovieDB.count < 10){
    console.log("There are not many watched movies");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("You are the perfect client");
} else if (personalMovieDB.count >= 30){
    console.log("You are film adicted person");
} else {
    console.log("There is an error");
}

console.log(personalMovieDB);