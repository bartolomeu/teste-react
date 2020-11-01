function getPeople() {
  return fetch("https://swapi.dev/api/people/");
}

export default {
  getPeople
};
