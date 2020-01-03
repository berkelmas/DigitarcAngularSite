import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CareerPageComponent } from "./career-page/career-page.component";
import { CareerRoutingModule } from "./career-routing.module";
import { SingleCareerPageComponent } from './single-career-page/single-career-page.component';

@NgModule({
  declarations: [CareerPageComponent, SingleCareerPageComponent],
  imports: [CommonModule, CareerRoutingModule]
})
export class CareerModule {}
