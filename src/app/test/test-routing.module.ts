import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RT_TEST } from './test-routes';
import { TestComponent } from './test.component';

const RTEST = new RT_TEST();
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: RTEST.TEST
  },
  {
    path: RTEST.TEST,
    component: TestComponent,
  },
  {
    path: '**',
    loadChildren: () => import('./../not-found/not-found.module').then(x => x.NotFoundModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
