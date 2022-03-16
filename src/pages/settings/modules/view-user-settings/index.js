import Handlebars from "handlebars";
import {viewUserSettingsTmpl} from "./view-user-settings.tmpl";

const template = Handlebars.compile(viewUserSettingsTmpl)({
    avatar: {
        image: "",
        name: "Андрей"
    },
    info: [
        {
            value: "Andrey",
            name: "Имя",
        },
        {
            value: "Danilov",
            name: "Фамилия",
        },
        {
            value: "89027409821",
            name: "Телефон",
        },
        {
            value: "adan0220@ya.ru",
            name: "Почта",
        },
        {
            value: "Andy Anderson",
            name: "Логин"
        }
    ]
});

document.body.insertAdjacentHTML("beforeend", template)