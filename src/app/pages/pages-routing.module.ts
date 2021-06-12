import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ClassDetailComponent } from "./_index";
import { ClassesComponent } from "./_index";

const routes: Routes = [
  { path: "class-detail", component: ClassDetailComponent },
  { path: "classes", component: ClassesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
