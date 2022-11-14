import './css/styles.css';
import fetchCountries from './api-servise'
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
const refs = {
    input: document.querySelector('#search-box'),
}


refs.input.addEventListener('input',debounce(inInput, DEBOUNCE_DELAY) );

function inInput(e) {
    let name = e.target.value;
    console.log(Boolean(name));
    if (name) {
        fetchCountries(name).then((data) => {
            const countries = data.map((countrie) => {
                countrie.flag
            })
            console.log(countries)

        } );
    }

}


// fetchCountries(Ukraine);
// https://restcountries.com/v2/all