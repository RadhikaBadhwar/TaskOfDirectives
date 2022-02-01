import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestrictFirstCharacterZeroDirective } from './restrict-first-character-zero.directive';
import { FirstCharacterSpaceRestrictDirective } from './first-character-space-restrict.directive';
import { RestrictNegativeNumberDirective } from './restrict-negative-number.directive';
import { OnlyNumbersDirective } from './only-numbers.directive';
import { OnlyAlphabetesDirective } from './only-alphabetes.directive';
import { RestrictTwoNumbersAfterDecimalDirective } from './restrict-two-numbers-after-decimal.directive';
import { RestrictInputLengthWithSpecificNumberDirective } from './restrict-input-length-with-specific-number.directive';
import { SpecificColorDirective } from './specific-color.directive';
import { RestrictDecimalDirective } from './restrict-decimal.directive';

@NgModule({
  declarations: [
    AppComponent,
    RestrictFirstCharacterZeroDirective,
    FirstCharacterSpaceRestrictDirective,
    RestrictNegativeNumberDirective,
    OnlyNumbersDirective,
    OnlyAlphabetesDirective,
    RestrictTwoNumbersAfterDecimalDirective,
    RestrictInputLengthWithSpecificNumberDirective,
    SpecificColorDirective,
    RestrictDecimalDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
