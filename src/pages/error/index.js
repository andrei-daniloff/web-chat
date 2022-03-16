import Handlebars from "handlebars";
import {errorTmpl} from "./error.tmpl";

const template = Handlebars.compile(errorTmpl)({
    code: "404",
    description: "Вы не туда попали"
});

document.body.insertAdjacentHTML("beforeend", template)