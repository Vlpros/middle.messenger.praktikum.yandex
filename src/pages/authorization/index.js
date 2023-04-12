import tpl from './tpl.hbs';
import './style.css';
import inputLoginAuth from "../../components/inputLoginAuth";
import blueButton from "../../components/blueButton";
import hrefReg from "../../components/hrefReg";

const inputsSignIn = {
    inputsSignIn: [
        {
            label: 'Логин',
            name: 'login',
            type: 'text',
            value: 'vladimirAdmin',
        },
        {
            label: 'Пароль',
            name: 'password',
            type: 'password',
            value: 'qwerty',
        },
    ],
};

const inputsSignUp = {
    inputsSignUp: [
        {
            label: 'Почта',
            name: 'email',
            type: 'email',
            value: 'vlprosvirin@gmail.com',
        },
        {
            label: 'Логин',
            name: 'login',
            type: 'text',
            value: 'parol',
        },
        {
            label: 'Имя',
            name: 'first_name',
            type: 'text',
            value: 'Владимир',
        },
        {
            label: 'Фамилия',
            name: 'second_name',
            type: 'text',
            value: 'Просвирин',
        },
        {
            label: 'Телефон',
            name: 'phone',
            type: 'text',
            value: '+7 (999)999-99-11',
        },
        {
            label: 'Пароль',
            name: 'password',
            type: 'password',
            value: 'parol',
        },
        {
            label: 'Пароль (ещё раз)',
            name: 'password',
            type: 'password',
            value: 'parol',
        },
    ],
};

export const dataAuthorization = {
    titleSignIn: 'Вход',
    inputLoginAuth: inputLoginAuth(inputsSignIn),
    signIn: true,
    blueButtonSignIn: blueButton({value: 'Авторизоваться'}),
    hrefRegSignIn: hrefReg({href: '/sign-up', value: 'Нет аккаунта?'}),
};

export const dataRegistration = {
    titleSignUp: 'Регистрация',
    inputLoginReg: inputLoginAuth(inputsSignUp),
    signUp: true,
    blueButtonSignUp: blueButton({value: 'Зарегистрироваться'}),
    hrefRegSignUp: hrefReg({href: '/sign-in', value: 'Войти'}),
}

const authorizationPage = (data) => {
    return tpl(data);
}

export default authorizationPage;
