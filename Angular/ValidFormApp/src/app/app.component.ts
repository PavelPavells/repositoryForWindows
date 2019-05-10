import { Component} from '@angular/core';
  
@Component({
    selector: 'my-app',
    template: `<div>
                    <h1>Маршрутизация в Angular 6</h1>
                    <router-outlet></router-outlet>
               </div>`
})
export class AppComponent {}