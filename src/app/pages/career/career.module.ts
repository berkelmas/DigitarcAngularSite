import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CareerPageComponent } from "./career-page/career-page.component";
import { CareerRoutingModule } from "./career-routing.module";

@NgModule({
  declarations: [CareerPageComponent],
  imports: [CommonModule, CareerRoutingModule]
})
export class CareerModule {}
