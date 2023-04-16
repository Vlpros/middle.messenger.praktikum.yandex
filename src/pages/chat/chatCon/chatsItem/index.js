import tpl from  './tpl.hbs';
import './style.css';
import {data} from './data';

const messItem = () => {
    return tpl(data);
};

export default messItem;
