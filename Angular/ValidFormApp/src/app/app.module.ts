import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import {Routes, RouterModule} from '@angular/router';
 
import { AppComponent }   from './app.component';
import { AboutComponent }   from './about.component';
import { HomeComponent }   from './home.component';
import { NotFoundComponent }   from './not-found.component';
 
// определение маршрутов
const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: '**', component: NotFoundComponent }
];
 
@NgModule({
    imports:      [ BrowserModule, RouterModule.forRoot(appRoutes)],
    declarations: [ AppComponent, HomeComponent, AboutComponent, NotFoundComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }