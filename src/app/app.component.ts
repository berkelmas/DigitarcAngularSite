import {
  Component,
  OnInit,
  HostListener,
  AfterViewInit,
  PLATFORM_ID,
  Inject
} from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import AOS from "aos";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, AfterViewInit {
  mobileState: boolean;
  navbarState: boolean;
  todayDate: number = new Date().getFullYear();
  @HostListener("window:scroll", ["$event.target"]) handleResize(doc) {
    if (window.pageYOffset > 100) {
      this.navbarState = true;
    } else {
      this.navbarState = false;
    }
  }

  constructor(@Inject(PLATFORM_ID) private platform: any) {}

  ngOnInit() {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platform)) {
      AOS.init();
    }
  }

  handleMobile() {
    this.mobileState = !this.mobileState;
  }
}
