function n(n){return n&&n.__esModule?n.default:n}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function e(n){return fetch(`https://restcountries.com/v2/name/${n}?fields=name,capital,population,flags,languages`).then((n=>n.json()))}var i,o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt,a="object"==typeof t&&t&&t.Object===Object&&t,s="object"==typeof self&&self&&self.Object===Object&&self,f=a||s||Function("return this")(),p=Object.prototype.toString,d=Math.max,g=Math.min,m=function(){return f.Date.now()};function y(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function v(n){if("number"==typeof n)return n;if(function(n){return"symbol"==typeof n||function(n){return!!n&&"object"==typeof n}(n)&&"[object Symbol]"==p.call(n)}(n))return NaN;if(y(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=y(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(o,"");var e=l.test(n);return e||u.test(n)?c(n.slice(2),e?2:8):r.test(n)?NaN:+n}i=function(n,t,e){var i,o,r,l,u,c,a=0,s=!1,f=!1,p=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function b(t){var e=i,r=o;return i=o=void 0,a=t,l=n.apply(r,e)}function h(n){return a=n,u=setTimeout(_,t),s?b(n):l}function T(n){var e=n-c;return void 0===c||e>=t||e<0||f&&n-a>=r}function _(){var n=m();if(T(n))return j(n);u=setTimeout(_,function(n){var e=t-(n-c);return f?g(e,r-(n-a)):e}(n))}function j(n){return u=void 0,p&&i?b(n):(i=o=void 0,l)}function $(){var n=m(),e=T(n);if(i=arguments,o=this,c=n,e){if(void 0===u)return h(c);if(f)return u=setTimeout(_,t),b(c)}return void 0===u&&(u=setTimeout(_,t)),l}return t=v(t)||0,y(e)&&(s=!!e.leading,r=(f="maxWait"in e)?d(v(e.maxWait)||0,t):r,p="trailing"in e?!!e.trailing:p),$.cancel=function(){void 0!==u&&clearTimeout(u),a=0,i=c=o=u=void 0},$.flush=function(){return void 0===u?l:j(m())},$};const b={input:document.querySelector("#search-box"),list:document.querySelector(".country-list"),info:document.querySelector(".country-info")};function h(n){if(console.log(n.length),1===n.length){console.log(n);const t=n.map((n=>`\n        <li class = "country-list__item">\n            <img class = "country-list__img" src = "${n.flags.svg}" width="50" >\n            <p class = "country-list__article">${n.name}</p>\n        </li>\n        <p>Capital:${n.capital}</p>\n        <p>Population:${n.population}</p>\n        <p>Capital:${n.languages.name}</p>\n        `)).join("");b.list.innerHTML=" ",b.info.innerHTML=t}else{const t=n.map((n=>`\n        <li class = "country-list__item">\n            <img class = "country-list__img" src = "${n.flags.svg}" width="50" >\n            <p class = "country-list__article">${n.name}</p>\n        </li>\n        `)).join("");b.list.innerHTML=t,b.info.innerHTML=" "}}console.log(b.list),b.input.addEventListener("input",n(i)((function(n){let t=n.target.value.trim();console.log(Boolean(t)),t?e(t).then(h).catch((n=>{console.log(n),b.info.innerHTML=" ",b.list.innerHTML=" "})):b.list.innerHTML=" "}),300));
//# sourceMappingURL=index.6ac38d78.js.map
