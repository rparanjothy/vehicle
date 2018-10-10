import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { FormsModule } from '@angular/forms';
import { AuthorComponent } from './components/author/author.component';
import { RouterModule, Routes, Router } from '@angular/router';
import { componentFactoryName } from '@angular/compiler';
import { GodwordComponent } from './components/godword/godword.component';

const appRoutes:Routes= [
  {path:'',component:CarComponent},
  {path:'author',component:AuthorComponent},
  {path:'godword',component:GodwordComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    AuthorComponent,
    GodwordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
