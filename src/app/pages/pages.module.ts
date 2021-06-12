import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PagesRoutingModule } from "./pages-routing.module";
import { ClassesComponent, ClassDetailComponent } from "./_index";

@NgModule({
  declarations: [ClassesComponent, ClassDetailComponent],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
