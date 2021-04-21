import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './cv/cv/cv.component';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';
import { TodoComponent } from './todo/todo/todo.component';
import { ColorComponent } from './components/color/color.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { FirstComponent } from './first/first.component';
import { AddPersonneComponent } from './cv/add-personne/add-personne.component';
import { FrontComponent } from './components/front/front.component';
import { BackComponent } from './components/back/back.component';
import { NF404Component } from './pages/nf404/nf404.component';
/* cv/5 */
const routes: Routes = [
  { path: '', redirectTo: 'cv', pathMatch: 'full' },
  {
    path: 'cv',
    children: [
      { path: '', component: CvComponent },
      { path: 'add', component: AddPersonneComponent },
      { path: ':id', component: DetailsCvComponent },
    ],
  },
  { path: 'color/:couleur', component: ColorComponent },

  {
    path: '',
    component: FrontComponent,
    children: [{ path: 'word', component: MiniWordComponent }],
  },
  {
    path: 'admin',
    component: BackComponent,
    children: [{ path: 'todo', component: TodoComponent }],
  },
  { path: '**', component: NF404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
