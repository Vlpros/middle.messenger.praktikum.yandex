import tpl from './tpl.hbs';
import './style.css';

const data = {
    text: 'Выберите чат',
};

const noChat = () => {
    return tpl(data);
};

export default noChat;
