import tpl from './tpl.hbs';
import './style.css';
import noChat from "./noneChat/index";
import chat from './chat/index';


const components = {
    chat,
    noChat
};

const mainContainer = () => {
    return tpl(components)
};

export default mainContainer;
