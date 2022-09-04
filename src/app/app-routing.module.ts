import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RT_APP } from './app-routes';



const RAPP = new RT_APP();
const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    redirectTo: RAPP.TEST
  },
  {
    path: RAPP.TEST , 
    loadChildren: () => import('./test/test.module').then(x => x.TestModule)
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
