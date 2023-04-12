import tpl from './tpl.hbs';
import './style.css';
import chatsSection from "./chatCon";
import mainContainer from "./mainСon";

const components = {
    chatsSection,
    mainSection: mainContainer
}

const chattingPage = () => {
    return tpl(components);
};

export default chattingPage;
