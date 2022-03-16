import Handlebars from "handlebars";
import {changePasswordTmpl} from "./change-password.tmpl";

const template = Handlebars.compile(changePasswordTmpl)({
    inputs: [
        {
            label: "Старый пароль",
            name: "oldPassword"
        },
        {
            label: "Новый пароль",
            name: "newPassword"
        },
        {
            label: "Повторите новый пароль",
            name: "repeatNewPassword",
            errors: [
                "Пароли не совпадают"
            ]
        }
    ]
});

document.body.insertAdjacentHTML("beforeend", template)