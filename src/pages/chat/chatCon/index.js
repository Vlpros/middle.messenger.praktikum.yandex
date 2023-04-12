import tpl from './tpl.hbs';
import './style.css';
import * as arrowRight from '../../../../static/Right.svg';
import inputSearchComp from "../../../components/inputSearch";
import messItem from "./chatsItem";

const data = {
    profile: 'Профиль',
    type: 'button',
    valueButton: '',
    arrowRight: arrowRight,
    inputSearchComp,
    chatItem: messItem,
}

const chatsSection = () => {
    return tpl(data);
}

export default chatsSection;
