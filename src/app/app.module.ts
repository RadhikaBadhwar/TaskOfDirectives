import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstCharacterSpaceRestrictDirective } from './first-character-space-restrict.directive';
import { RestrictNegativeNumberDirective } from './restrict-negative-number.directive';
import { OnlyNumbersDirective } from './only-numbers.directive';
import { OnlyAlphabetesDirective } from './only-alphabetes.directive';
import { RestrictTwoNumbersAfterDecimalDirective } from './restrict-two-numbers-after-decimal.directive';
import { RestrictInputLengthWithSpecificNumberDirective } from './restrict-input-length-with-specific-number.directive';
import { SpecificColorDirective } from './specific-color.directive';
import { RestrictDecimalDirective } from './restrict-decimal.directive';
import { RestrictSpaceDirective } from './restrict-space.directive';

@NgModule({
  declarations: [
    AppComponent,
    FirstCharacterSpaceRestrictDirective,
    RestrictNegativeNumberDirective,
    OnlyNumbersDirective,
    OnlyAlphabetesDirective,
    RestrictTwoNumbersAfterDecimalDirective,
    RestrictInputLengthWithSpecificNumberDirective,
    SpecificColorDirective,
    RestrictDecimalDirective,
    RestrictSpaceDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
