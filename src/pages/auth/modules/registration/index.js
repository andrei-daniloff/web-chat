import Handlebars from "handlebars";
import {formTmpl} from "../../../../components/form/form.tmpl";

const template = Handlebars.compile(formTmpl)({
    title: "Регистрация",
    inputs: [
        {
            placeholder: "Введите имя*",
            type: "text",
            required: true,
            name: "first_name"
        },
        {
            placeholder: "Введите фамилию*",
            type: "text",
            required: true,
            name: "second_name"
        },
        {
            placeholder: "Введите логин*",
            type: "text",
            required: true,
            name: "login"
        },
        {
            placeholder: "Введите почту*",
            type: "email",
            required: true,
            name: "email"
        },
        {
            placeholder: "Введите телефон*",
            type: "phone",
            required: true,
            name: "phone"
        },
        {
            placeholder: "Введите пароль*",
            type: "password",
            required: true,
            name: "password"
        },
        {
            placeholder: "Повторите пароль*",
            type: "password",
            required: true,
            name: "repeat_password"
        }
    ],
    submitBtn: {
        text: "Зарегистрироваться"
    },
    additionalBtn: {
        text: "Войти"
    }
});

document.body.insertAdjacentHTML("beforeend", template)