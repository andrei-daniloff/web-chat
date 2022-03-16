import Handlebars from "handlebars";
import {formTmpl} from "../../../../components/form/form.tmpl";

const template = Handlebars.compile(formTmpl)({
    inputs: [
        {
            placeholder: "Введите логин*",
            type: "text",
            required: true,
            name: "login"
        },
        {
            placeholder: "Введите пароль*",
            type: "password",
            required: true,
            name: "password"
        }
    ],
    submitBtn: {
        text: "Войти"
    },
    additionalBtn: {
        text: "Регистрация"
    }
});

document.body.insertAdjacentHTML("beforeend", template)