export const formTmpl = `
   <div class="form__wrapper">
        {{#if title}}
         <h1 class="form__title">{{title}}</h1>
        {{/if}}
       <form class="form">
            {{#each inputs}}
                 <input class="form__input" 
                        placeholder="{{this.placeholder}}" 
                        name="{{this.name}}" 
                        type="{{this.type}}"
                        required="{{this.required}}"
                 />
                 {{#each errors}}
                    <span class="form__error">{{this}}</span>
                 {{/each}}
            {{/each}}
                <button class="form__submit" type="{{submitBtn.type}}">{{submitBtn.text}}</button>
       </form>
       <button class="form__additional" type="{{additionalBtn.type}}">{{additionalBtn.text}}</button>
   </div>
`