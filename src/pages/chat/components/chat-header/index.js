import Handlebars from "handlebars";
import {burgerMenuTmpl} from "../../../../components/burger-menu/burger-menu.tmpl";
import {chatHeaderTmpl} from "./chat-header.tmpl";

Handlebars.registerPartial('burger-menu', burgerMenuTmpl);

const chatHeaderTmpl = Handlebars.compile(chatHeaderTmpl)

export default chatHeaderTmpl