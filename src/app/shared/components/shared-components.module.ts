import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { InputBadComponent } from './input-bad/input-bad.component';
import { InputBetterComponent } from './input-better/input-better.component';
import { InputBestComponent } from './input-best/input-best.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { RadioComponent } from './radio/radio.component';

@NgModule({
  declarations: [
    InputBadComponent,
    InputBetterComponent,
    InputBestComponent,
    DropdownComponent,
    RadioComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  exports: [
    InputBadComponent,
    InputBetterComponent,
    InputBestComponent,
    DropdownComponent,
    RadioComponent,
  ],
})
export class SharedComponentsModule {}
