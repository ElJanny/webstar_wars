import { AuthGuard } from './core/guard/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'charSelect', loadChildren: () => import('./modules/character-select/character-select.module').then(m => m.CharacterSelectModule), canActivate: [AuthGuard]},
  { path: '**', redirectTo: 'charSelect'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
