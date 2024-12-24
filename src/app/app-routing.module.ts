import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContextComponent } from './context/context.component'; // Adjust the import as necessary
import { EcritureComponent } from './ecriture/ecriture.component';

const routes: Routes = [
  { path: 'context', component: ContextComponent },
  { path: 'rp/:id', component: EcritureComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }