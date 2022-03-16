export const chatTmpl = `
    <div class="chat">
        <div class="header">
        {{> search}}
        {{> chatHeader}}
        </div>
        <div class="message-list">
            {{#each messages}}
                {{> messagePreview this}}
            {{/each}}
        </div>
    </div>
`