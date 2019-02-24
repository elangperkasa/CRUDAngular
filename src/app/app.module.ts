import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { IndexComponent } from './components/index/index.component';
import {HttpClientModule} from '@angular/common/http';
import { GameService } from './game.service';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'index',
    component: IndexComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    EditComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule, HttpClientModule,ReactiveFormsModule
  ],


  providers: [GameService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
