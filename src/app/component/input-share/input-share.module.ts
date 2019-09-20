import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputShareComponent } from './input-share.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [InputShareComponent],
  imports: [
    // tslint:disable-next-line: deprecation
    CommonModule, RouterModule
    // EffectsModule.forFeature([MasterdataEffects]),
  ],
  providers: [],
  exports : [InputShareComponent]
})

export class InputShareModules {}