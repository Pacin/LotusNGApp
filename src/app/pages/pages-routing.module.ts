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
  declarations: [],
  imports: [CommonModule],
})
export class PagesRoutingModule {}
