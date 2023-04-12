import tpl from './tpl.hbs';
import './style.css';
import * as searchIcon from '/static/search.svg';

const data ={
    value: 'Поиск',
    type: 'text',
    searchIcon,
}

const inputSearchComp = () => {
    return tpl(data);
}

export default inputSearchComp;
