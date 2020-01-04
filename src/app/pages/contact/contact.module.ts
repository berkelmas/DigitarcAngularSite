import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ContactPageComponent } from "./contact-page/contact-page.component";
import { ContactRoutingModule } from "./contact-routing.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [ContactPageComponent],
  imports: [CommonModule, ContactRoutingModule, HttpClientModule, FormsModule]
})
export class ContactModule {}
