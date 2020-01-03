import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CareerPageComponent } from "./career-page/career-page.component";

const routes: Routes = [
  {
    path: "",
    component: CareerPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareerRoutingModule {}
