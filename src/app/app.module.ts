import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderButtonComponent } from './components/slider-button/slider-button.component';
import { SocialNavigatorComponent } from './components/social-navigator/social-navigator.component';
import { PageComponent } from './page/page.component';
import { SliderButtonGroupComponent } from './components/slider-button-group/slider-button-group.component';
import { SliderButtonContainerComponent } from './components/slider-button-container/slider-button-container.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SliderButtonComponent,
    SocialNavigatorComponent,
    PageComponent,
    SliderButtonGroupComponent,
    SliderButtonContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
