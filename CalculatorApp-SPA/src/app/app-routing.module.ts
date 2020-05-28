import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CalculateComponent } from './calculate/calculate.component';
import { ViewComponent } from './view/view.component';
import { InfoComponent } from './info/info.component';


const routes: Routes = [
  { path: "", redirectTo: "about", pathMatch: "full" },
  { path: "about", component: AboutComponent },
  { path: "info", component: InfoComponent },
  { path: "calculate", component: CalculateComponent},
  { path: "view", component: ViewComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
