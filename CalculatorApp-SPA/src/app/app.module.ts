import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import {HttpClientModule} from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { CalculateComponent } from './calculate/calculate.component';
import { ViewComponent } from './view/view.component';
import { InfoComponent } from './info/info.component';
import { MenuItem } from 'primeng/api'; 
import { MenuModule } from 'primeng/menu'; // <p-menu>
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast'; // <p-toast>
import { PanelModule } from 'primeng/panel'; // <p-panel>
import { MessageModule } from 'primeng/message'; // <p-message>
import { ChartModule } from 'primeng/chart'; // <p-chart type="">
import { ReactiveFormsModule } from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
import { FieldsetModule } from 'primeng/fieldset';
import {RadioButtonModule} from 'primeng/radiobutton';
import {ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';
import {SelectButtonModule} from 'primeng/selectbutton';



@NgModule({
   declarations: [
      AppComponent,
      ValueComponent,
      AboutComponent,
      CalculateComponent,
      ViewComponent,
      InfoComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      MenuModule,
      BrowserAnimationsModule,
      ToastModule,
      PanelModule,
      MessageModule,
      ReactiveFormsModule,
      HttpClientModule,
      FieldsetModule,
      RadioButtonModule,
      ButtonModule,
      FormsModule,
      SelectButtonModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
