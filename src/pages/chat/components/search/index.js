import Handlebars from "handlebars";
import {burgerMenuTmpl} from "../../../../components/burger-menu/burger-menu.tmpl";
import {searchTmpl} from "./search.tmpl";

Handlebars.registerPartial('burger-menu', burgerMenuTmpl);

const searchTemplate = Handlebars.compile(searchTmpl)

export default searchTemplate