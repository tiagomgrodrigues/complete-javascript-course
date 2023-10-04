const country = "Portugal";
const continent = "Europe";
let population = 11_000_000;

console.log(country);
console.log(continent);
console.log(population);

const isIsland = false;
const language = "Portuguese";

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

console.log(population / 2);
population++;
console.log(population);

console.log(population > 6_000_000);

console.log(population < 33_000_000);

const description =
    country +
    " is in " +
    continent +
    ", and its " +
    population +
    " million people speak " +
    language;

console.log(description);
