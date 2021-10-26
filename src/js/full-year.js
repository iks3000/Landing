import { fullYear } from './query-selectors';

const year = () => {
    fullYear.innerHTML = new Date().getFullYear();
    fullYear.setAttribute('datetime', new Date().getFullYear());
}

export { year };