import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PagesRoutingModule } from "./pages-routing.module";
import { ClassesComponent, ClassDetailComponent } from "./_index";
import {
  ModalModule,
  WavesModule,
  InputsModule,
  ButtonsModule,
  IconsModule,
} from "angular-bootstrap-md";
import { ModalComponent } from "../components/_index";
import { LevelPipe, TimePipe, FocusPipe } from "../pipes/_index";
import { HomeComponent } from "./home/home.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
@NgModule({
  declarations: [
    ClassesComponent,
    ClassDetailComponent,
    ModalComponent,
    LevelPipe,
    TimePipe,
    FocusPipe,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ModalModule,
    WavesModule,
    InputsModule,
    ButtonsModule,
    IconsModule,
    FontAwesomeModule,
  ],
})
export class PagesModule {}
