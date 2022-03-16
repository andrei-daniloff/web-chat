export const editUserSettingsTmpl = `
 <div class="user-settings">
        <div class="avatar">
            <div class="avatar__wrapper">
                <img class="avatar__image" 
                    src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg" 
                    alt="user-image">
                <input title="" type="file" class="avatar__input" alt="avatar">
            </div>
                <span class="avatar__user-name">Андрей</span>
        </div>
        <form class="form">
        
        {{#each inputs}}
            <div class="inputs">
                <label for="{{this.name}}" class="inputs__name">
                    {{this.label}}
                </label>
                <input class="inputs__input" 
                        type="text" 
                        value="{{this.value}}"
                        id="{{this.name}}"
                        name="{{this.name}}"
                        required
                />
            </div>
            {{#each errors}}
                    <span class="form__error">{{this}}</span>
            {{/each}}
        {{/each}}
            <div class="actions">
                <button class="actions__save" type="submit">Сохранить</button>
                <button class="actions__cancel" type="button">Отмена</button>
            </div>
        </form>
    </div>`