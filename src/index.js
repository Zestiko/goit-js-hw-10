import './css/styles.css';
import {fetchCountries} from './api-servise'
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
const refs = {
    input: document.querySelector('#search-box'),
}


refs.input.addEventListener('input',debounce(inInput, DEBOUNCE_DELAY) );

function inInput(e) {
    let name = e.target.value;
    console.log(name);
    fetchCountries(name);
}


// fetchCountries(Ukraine);
// https://restcountries.com/v2/all?fields=name,capital,currencies