import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

@Component({
  selector: "app-career-page",
  templateUrl: "./career-page.component.html",
  styleUrls: ["./career-page.component.scss"],
  animations: [
    trigger("balloonEffect", [
      state(
        "open",
        style({
          transform: "scaleY(1)",
          opacity: 1
        })
      ),
      state(
        "closed",
        style({
          transform: "scaleY(0)",
          opacity: 0,
          height: 0
        })
      ),
      transition("open <=> closed", animate("500ms ease-out"))
    ])
  ]
})
export class CareerPageComponent implements OnInit {
  showState: boolean[] = [false, false, false, false];
  jobs: number[] = [1];
  constructor() {}

  ngOnInit() {}
}
