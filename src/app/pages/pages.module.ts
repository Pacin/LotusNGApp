import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PagesRoutingModule } from "./pages-routing.module";
import { ClassesComponent, ClassDetailComponent } from "./_index";
import {
  ModalModule,
  WavesModule,
  InputsModule,
  ButtonsModule,
} from "angular-bootstrap-md";
import { ModalComponent } from "../components/modal/modal.component";

@NgModule({
  declarations: [ClassesComponent, ClassDetailComponent, ModalComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ModalModule,
    WavesModule,
    InputsModule,
    ButtonsModule,
  ],
})
export class PagesModule {}
