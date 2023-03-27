import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './notes.component';

import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [{ path: '', component: NotesComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class NotesModule { }
