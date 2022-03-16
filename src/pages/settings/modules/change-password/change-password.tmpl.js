export const changePasswordTmpl = `
       <div class="change-password">
        <form class="form">
             {{#each inputs}}
                <div class="inputs">
                    <label for="{{this.name}}" class="inputs__name">
                        {{this.label}}
                    </label>
                    <input class="inputs__input" 
                            type="password" 
                            id="{{this.name}}"
                            name="{{this.name}}"
                            placeholder="******"
                            required
                    />
                </div>
                {{#each errors}}
                    <span class="form__error">{{this}}</span>
                 {{/each}}
            {{/each}}
            <button class="form__action" type="submit">Сохранить</button>
            <button class="form__action" type="button">Отмена</button>
        </form>
       </div>
`