import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CareerPageComponent } from "./career-page/career-page.component";
import { SingleCareerPageComponent } from "./single-career-page/single-career-page.component";

const routes: Routes = [
  {
    path: "",
    component: CareerPageComponent
  },
  {
    path: "career-apply/:careerid",
    component: SingleCareerPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareerRoutingModule {}
