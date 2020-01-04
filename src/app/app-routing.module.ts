import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./pages/home/home.module").then(m => m.HomeModule)
  },
  {
    path: "about",
    loadChildren: () =>
      import("./pages/about/about.module").then(m => m.AboutModule)
  },
  {
    path: "career",
    loadChildren: () =>
      import("./pages/career/career.module").then(m => m.CareerModule)
  },
  {
    path: "process",
    loadChildren: () =>
      import("./pages/process/process.module").then(m => m.ProcessModule)
  },
  {
    path: "contact",
    loadChildren: () =>
      import("./pages/contact/contact.module").then(m => m.ContactModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled",
      anchorScrolling: "enabled"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
