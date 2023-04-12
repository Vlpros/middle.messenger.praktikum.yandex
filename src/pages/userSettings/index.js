import tpl from './tpl.hbs';
import './style.css';
import secContainer from "./secCon";
import mainContainer from "./firstCon";
import buttonSettings from "../../components/buttonSettings";
import * as noAvatar from '../../../static/noAvatar.svg';
import inputSettings from "../../components/inputSettings";
import simpleButton from "../../components/simpleButton";

const buttons = {
    buttons: [
        {
            name: 'Изменить данные',
            color: '#3369F3',
            href: '/userSettings'
        },
        {
            name: 'Изменить пароль',
            color: '#3369F3',
            href: '/userSettings'
        },
        {
            name: 'Выйти',
            color: '#FF0000',
            href: '/'
        },
    ]
};

const defaultButtons = {
    name: 'Сохранить',
    type: 'submit',
}

const inputs = {
    inputs: [
        {
            label: 'Почта',
            name: 'email',
            value: 'pochta@yandex.ru',
            type: 'text',
            disable: true,
        },
        {
            label: 'Логин',
            name: 'login',
            value: 'VladimirProsvirin',
            type: 'text',
            disable: true,
        },
        {
            label: 'Имя',
            name: 'first_name',
            value: 'Владимир',
            type: 'text',
            disable: true,
        },
        {
            label: 'Фамилия',
            name: 'second_name',
            value: 'Просвирин',
            type: 'text',
            disable: true,
        },
        {
            label: 'Имя в чате',
            name: 'display_name',
            value: 'Vovany4',
            type: 'text',
            disable: true,
        },
        {
            label: 'Телефон',
            name: 'phone',
            value: '+7 (999) 999-99-11',
            type: 'text',
            disable: true,
        },
    ]
}

const inputsChange = {
    inputsChange: [
        {
            label: 'Почта',
            name: 'email',
            value: 'pochta@yandex.ru',
            type: 'text',
            disable: false,
        },
        {
            label: 'Логин',
            name: 'login',
            value: 'VladimirProsvirin',
            type: 'text',
            disable: false,
        },
        {
            label: 'Имя',
            name: 'first_name',
            value: 'Владимир',
            type: 'text',
            disable: false,
        },
        {
            label: 'Фамилия',
            name: 'second_name',
            value: 'Просвирин',
            type: 'text',
            disable: false,
        },
        {
            label: 'Имя в чате',
            name: 'display_name',
            value: 'Vovany4',
            type: 'text',
            disable: false,
        },
        {
            label: 'Телефон',
            name: 'phone',
            value: '+7 (999)-999-77-11',
            type: 'text',
            disable: false,
        },
    ],
};

const inputsChangePassword = {
    inputsChangePassword: [
        {
            label: 'Старый пароль',
            name: 'oldPassword',
            value: 'oldPassword',
            type: 'password',
            disable: false,
        },
        {
            label: 'Новый пароль',
            name: 'newPassword',
            value: 'newPassword',
            type: 'password',
            disable: false,
        },
        {
            label: 'Повторите новый пароль',
            name: 'newPassword',
            value: 'newPassword',
            type: 'password',
            disable: false,
        },
    ],
};

const dataSection = {
    photo: false,
    noAvatar: noAvatar,
    name: 'Владимир',
    normal: true,
    buttonSettings: buttonSettings(buttons),
    input: inputSettings(inputs),
    change: false,
    inputChange: inputSettings(inputsChange),
    changePassword: false,
    inputsChangePassword: inputSettings(inputsChangePassword),
    simpleButton: simpleButton(defaultButtons),
};

const data = {
    backSection: secContainer,
    mainSection: mainContainer(dataSection),
};

const settingsPage = () => {
    return tpl(data);
};

export default settingsPage;
