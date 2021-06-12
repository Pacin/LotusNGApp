import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { ClassesService, ClassDetailService } from "./services/_index";
import { PagesModule } from "./pages/pages.module";
import { NavbarModule, WavesModule, ButtonsModule } from "angular-bootstrap-md";
import { NavbarComponent } from "./components/_index";

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    PagesModule,
    NavbarModule,
    WavesModule,
    ButtonsModule,
  ],
  providers: [ClassesService, ClassDetailService],
  bootstrap: [AppComponent],
  exports: [NavbarModule, WavesModule, ButtonsModule],
})
export class AppModule {}
