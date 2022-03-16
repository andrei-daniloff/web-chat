import Handlebars from "handlebars";
import {editUserSettingsTmpl} from "./edit-user-settings.tmpl";

const template = Handlebars.compile(editUserSettingsTmpl)({
    inputs: [
        {
            label: "Имя",
            value: "Андрей",
            name: "first_name"
        },
        {
            label: "Фамилия",
            value: "Данилов",
            name: "second_name"
        },
        {
            label: "Телефон",
            value: "89029084758",
            name: "phone"
        },
        {
            label: "Почта",
            value: "adan0220@ya.ru",
            name: "email"
        },
        {
            label: "Логин",
            value: "Andy Anderson",
            name: "display_name"
        }
    ]
});

document.body.insertAdjacentHTML("beforeend", template)