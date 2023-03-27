import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {path: '', redirectTo: '/sidenav', pathMatch: 'full'},
  {
    path: 'sidenav', component: LayoutComponent,
    children: [
      { path: 'notes', loadChildren: () => import('./components/notes/notes.module').then(m => m.NotesModule) },
    ],
  },

];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
