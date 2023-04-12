import tpl from './tpl.hbs';
import './style.css';
import inputLoginAuth from "../../components/inputLoginAuth";
import Button from "../../components/button";
import hrefReg from "../../components/hrefReg";

const signIn = {
    inputsSignIn: [
        {
            label: 'Логин',
            name: 'login',
            type: 'text',
            value: 'vladimir',
        },
        {
            label: 'Пароль',
            name: 'password',
            type: 'password',
            value: 'parol',
        },
    ],
};

const signUp = {
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
            value: 'vladimir',
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
            value: '+7 (999) 999-99-11',
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
    inputLoginAuth: inputLoginAuth(signIn),
    signIn: true,
    blueButtonSignIn: Button({value: 'Авторизоваться'}),
    hrefRegSignIn: hrefReg({href: '/sign-up', value: 'Нет аккаунта?'}),
};

export const dataRegistration = {
    titleSignUp: 'Регистрация',
    inputLoginReg: inputLoginAuth(signUp),
    signUp: true,
    blueButtonSignUp: Button({value: 'Зарегистрироваться'}),
    hrefRegSignUp: hrefReg({href: '/sign-in', value: 'Войти'}),
}

const authPage = (data) => {
    return tpl(data);
}

export default authPage;
