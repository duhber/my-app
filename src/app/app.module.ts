import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import { UserComponent }  from './components/user.components';
import {KeyUpComponent} from './components/keyup.components';
import {LoopbackComponent} from './components/loopback.components';
import {HeroFormComponent} from './components/hero-form.component';

@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent,
    UserComponent,
    KeyUpComponent,
    LoopbackComponent,
    HeroFormComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
