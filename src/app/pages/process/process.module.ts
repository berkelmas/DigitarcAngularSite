import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProcessPageComponent } from "./process-page/process-page.component";
import { ProcessRoutingModule } from "./process-routing.module";

@NgModule({
  declarations: [ProcessPageComponent],
  imports: [CommonModule, ProcessRoutingModule]
})
export class ProcessModule {}
