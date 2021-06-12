import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ClassDetailModel } from "src/app/models/class-detail.model";
import { environment } from "src/environments/environment";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: "app-class-detail",
  templateUrl: "./class-detail.component.html",
  styleUrls: ["./class-detail.component.scss"],
})
export class ClassDetailComponent implements OnInit {
  class = null;
  faLock = faLock;
  faStar = faStar;

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      const id = param.id;
      return this.http
        .get<ClassDetailModel[]>(`${environment.ApiBaseUrl}?id=${id}`)
        .subscribe((data) => (this.class = data));
    });
  }
}
