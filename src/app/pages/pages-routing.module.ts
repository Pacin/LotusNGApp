import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClassDetailComponent, HomeComponent } from "./_index";
import { ClassesComponent } from "./_index";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "class-detail/:id", component: ClassDetailComponent },
  { path: "classes", component: ClassesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
