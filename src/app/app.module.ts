import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddressesComponent } from './addresses/addresses.component';
import { EditableComponent } from './editable/editable.component';
import { OrderMarkComponent } from './order-mark/order-mark.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressesComponent,
    EditableComponent,
    OrderMarkComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
