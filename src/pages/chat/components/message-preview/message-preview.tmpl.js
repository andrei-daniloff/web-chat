export const messagePreviewTmpl = `
    <div class="message-preview">
        <div class="message-preview__wrapper">
            <img class="message-preview__image" src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg" alt="message preview">
            <div class="message-preview__description">
                <span class="message-preview__name">
                    {{this.name}}
                </span>
                <span class="message-preview__content">
                    {{this.content}}
                </span>
            </div>
        </div>
        <div class="additional-info">
            <span class="additional-info__time">
                {{this.time}}
            </span>
            {{#if this.count}}
                <span class="additional-info__count">
                    {{this.count}}
                </span>
            {{/if}}
        </div>
    </div>
`