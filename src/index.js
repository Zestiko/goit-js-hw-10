import './css/styles.css';
import fetchCountries from './api-servise'
import debounce from 'lodash.debounce';

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
    console.log(Boolean(name));
   if (name) {
       fetchCountries(name).then(createMarkup).catch(eroro => {
           console.log(eroro)
           refs.info.innerHTML = ' ';
           refs.list.innerHTML = ' ';
    });
    
   } else {
       refs.list.innerHTML = ' ';
       
   }

}

function createMarkup(data) {
    console.log(data.length)
    if (data.length === 1) {
     console.log(data)
        const markupCountrieInfo = data.map((coutrie) => `
        <li class = "country-list__item">
            <img class = "country-list__img" src = "${coutrie.flags.svg}" width="50" >
            <p class = "country-list__article">${coutrie.name}</p>
        </li>
        <p>Capital:${coutrie.capital}</p>
        <p>Population:${coutrie.population}</p>
        <p>Capital:${coutrie.languages.name}</p>
        `).join('');
        refs.list.innerHTML = ' ';
        refs.info.innerHTML = markupCountrieInfo;
    } else {
        const markupList = data.map((coutrie) => `
        <li class = "country-list__item">
            <img class = "country-list__img" src = "${coutrie.flags.svg}" width="50" >
            <p class = "country-list__article">${coutrie.name}</p>
        </li>
        `).join('');
        
        refs.list.innerHTML = markupList;
        refs.info.innerHTML = ' ';
        
    }
    
}


// fetchCountries(Ukraine);
// https://restcountries.com/v2/all