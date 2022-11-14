function fetchCountries(name) {
    fetch(`https://restcountries.com/v2/${name}?fields=name.official,capital,population,flags.svg,languages`).then(data => data.json());
}

export default { fetchCountries };