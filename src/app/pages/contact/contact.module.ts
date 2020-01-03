import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContactPageComponent } from "./contact-page/contact-page.component";
import { ContactRoutingModule } from "./contact-routing.module";

@NgModule({
  declarations: [ContactPageComponent],
  imports: [CommonModule, ContactRoutingModule]
})
export class ContactModule {}
