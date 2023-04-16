import tpl from './tpl.hbs';
import './style.css';
import * as cameraPhoto from '../../../static/camera.png';


const data = {
    photo: cameraPhoto,
    time: '12:56',
};

const photoMessage = () => {
    return tpl(data);
};

export default photoMessage;
