import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ClassDetailModel } from "src/app/models/class-detail.model";
import { environment } from "src/environments/environment";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { ClassDetailService } from "src/app/services/class-detail.service";

@Component({
  selector: "app-class-detail",
  templateUrl: "./class-detail.component.html",
  styleUrls: ["./class-detail.component.scss"],
})
export class ClassDetailComponent implements OnInit {
  class = null;
  faLock = faLock;
  faStar = faStar;
  id: string;

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private classesDetailService: ClassDetailService
  ) {}

  ngOnInit(): void {
    this.getDetails(this.id);
  }

  getDetails(id: string) {
    this.activatedRoute.params.subscribe((param) => {
      id = param.id;
      this.classesDetailService
        .getDetails(id)
        .subscribe((data) => (this.class = data));
    });
  }
}
