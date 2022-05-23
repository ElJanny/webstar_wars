import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterSelectComponent } from './character-select.component';

const routes: Routes = [{ path: '', component: CharacterSelectComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterSelectRoutingModule { }
