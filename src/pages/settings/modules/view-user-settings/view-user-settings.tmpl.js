export const viewUserSettingsTmpl = `
    <div class="user-settings">
        <div class="avatar">
            <img class="avatar__image" src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg" alt="avatar">
            <span class="avatar__user-name">Андрей</span>
        </div>
        {{#each info}}
            <div class="info">
                <span class="info__name">
                    {{this.name}}
                </span>
                <span class="info__value">
                    {{this.value}}
                </span>
            </div>
        {{/each}}
        <div class="actions">
            <button class="actions__change-info">Изменить данные</button>
            <button class="actions__change-info">Изменить пароль</button>
            <button class="actions__change-info">Выйти</button>
        </div>
    </div>
`