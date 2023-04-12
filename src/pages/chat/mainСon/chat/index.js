import  tpl from './tpl.hbs';
import './style.css'
import incomingMessage from "../../../../components/incomingMessage";


import sentMessage from "../../../../components/sentMessage";
import inputMessage from "../../../../components/inputMessage";
import photoMessage from "../../../../components/photoMessage";
import * as clip from '../../../../../static/clip.svg';
import * as settings from '../../../../../static/settings.svg';


import * as noAvatar from '../../../../../static/noAvatar.svg';
import * as sentArrow from '../../../../../static/sentArrow.svg';


const data = {
    photo: false,
    noAvatar: noAvatar,
    name: 'Владимир',
    settingsSvg: settings,
    date: '5 april',
    clipSvg: clip,
    sent: sentArrow,
    incomingMessage,
    photoMessage,
    sentMessage,
    inputMessage,
};

const chat = () => {
    return tpl(data);
};

export default chat;
