const movie = {
  movie: 'Matrix',
  year: 1999,
  rate: 99,
  bestActor: 'keano Reaves',
};

console.log('movie:', movie);

const { bestActor: onlyTheBestActor } = movie;

console.log('onlyTheBestActor:', onlyTheBestActor);

const newMovie = {
  capa: 'Carros',
  ...movie,
};

console.log('newMovie', newMovie);

console.log();

const changeMovieProp = {
  ...movie,
  movie: 'Armagedon',
  time: 2000,
};
console.log(changeMovieProp);
