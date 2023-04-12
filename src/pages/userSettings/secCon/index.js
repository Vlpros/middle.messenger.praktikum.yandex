import tpl from './tpl.hbs';
import './style.css';
import * as backArrow from '../../../../static/back.svg';

const data = {
    backArrow
};

const secContainer = () => {
    return tpl(data);
};

export default secContainer;
