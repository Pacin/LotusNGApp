import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { ClassesService, ClassDetailService } from "./services/_index";
import { PagesModule } from "./pages/pages.module";
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    PagesModule,
  ],
  providers: [ClassesService, ClassDetailService],
  bootstrap: [AppComponent],
})
export class AppModule {}
