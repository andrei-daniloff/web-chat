import Handlebars from "handlebars";
import {chatHeaderTmpl} from "./components/chat-header/chat-header.tmpl";
import {chatTmpl} from "./chat.tmpl"
import searchTemplate from "./components/search";
import {messagePreviewTmpl} from "./components/message-preview/message-preview.tmpl";

Handlebars.registerPartial('search', searchTemplate);
Handlebars.registerPartial('chatHeader', chatHeaderTmpl);
Handlebars.registerPartial('messagePreview', messagePreviewTmpl);

const template = Handlebars.compile(chatTmpl)({
messages: [
    {
        name: "Жена",
        content: "Купи батон!",
        time: "4:19",
        count: 1
    },
    {
        name: "Жена",
        content: "Вы: Купи батон!",
        time: "4:19",
    },
    {
        name: "Жена",
        content: "Купи батон!",
        time: "4:19",
        count: 1
    },
    {
        name: "Жена",
        content: "Купи батон!",
        time: "4:19",
        count: 1
    },
    {
        name: "Жена",
        content: "Вы: Купи батон!",
        time: "4:19",
    },
    {
        name: "Жена",
        content: "Купи батон!",
        time: "4:19",
        count: 1
    },
    {
        name: "Жена",
        content: "Купи батон!",
        time: "4:19",
        count: 1
    },
    {
        name: "Жена",
        content: "Вы: Купи батон!!!!!!!!!!!!!!!!!!!!!",
        time: "4:19",
    },
    {
        name: "Жена",
        content: "Купи батон!",
        time: "4:19",
        count: 1
    },
    {
        name: "Жена",
        content: "Купи батон!",
        time: "4:19",
        count: 1
    },
    {
        name: "Жена",
        content: "Вы: Купи батон!",
        time: "4:19",
    },
    {
        name: "Жена",
        content: "Купи батон!",
        time: "4:19",
        count: 1
    }
]
});

document.body.insertAdjacentHTML("beforeend", template)