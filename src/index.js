import './css/styles.css';
import fetchCountries from './api-servise'
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import "notiflix/dist/notiflix-3.2.5.min.css"

const DEBOUNCE_DELAY = 300;
const refs = {
    input: document.querySelector('#search-box'),
    list: document.querySelector('.country-list'),
    info: document.querySelector('.country-info'),
}
 console.log(refs.list)

refs.input.addEventListener('input',debounce(inInput, DEBOUNCE_DELAY) );

function inInput(e) {
    let name = e.target.value.trim();
    if (name) {
        fetchCountries(name).then(chekLengthOfArray).catch(onErorr);  
    } else {
        refs.list.innerHTML = ' ';
    };

}
function createMarkup(data) {
    console.log(data)
    if (data.length === 1) {
        let coutrieLanguages = data.map(({ languages }) => languages.flatMap((language) => language.name).join(','));
        console.log(coutrieLanguages);
        const markupCountrieInfo = data.map(({flags, name, capital, population, languages}) => `
        <li class = "country-list__item">
            <img class = "country-list__img" src = "${flags.svg}" width="50" >
            <p class = "country-list__article"><b>${name}</b></p>
        </li>
        <p><b>Capital</b>: ${capital}</p>
        <p><b>Population</b>: ${population}</p>
        <p><b>Language</b>: ${coutrieLanguages}</p>
        `).join('');
        refs.list.innerHTML = ' ';
        refs.info.innerHTML = markupCountrieInfo;
    } else {
        const markupList = data.map(({flags, name}) => `
        <li class = "country-list__item">
            <img class = "country-list__img" src = "${flags.svg}" width="50" >
            <p class = "country-list__article">${name}</p>
        </li>
        `).join('');
        refs.list.innerHTML = markupList;
        refs.info.innerHTML = ' ';
    }
    
};
function onErorr() {
    refs.info.innerHTML = ' ';
    refs.list.innerHTML = ' ';
    Notify.failure('Oops, there is no country with that name');
}
function chekLengthOfArray(data) {
    if (data.length >= 10) {
        refs.list.innerHTML = ' ';
        Notify.info('Too many matches found. Please enter a more specific name.');
    } else {
        createMarkup(data);
    }
};

