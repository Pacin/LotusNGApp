import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from "src/environments/environment";
import { ClassDetailModel } from "../models/class-detail.model";

@Injectable({
  providedIn: "root",
})
export class ClassDetailService {
  private apiUrl: string;

  constructor(private http: HttpClient) {}

  // getDetails() {
  //      return this.http
  //       .get<ClassDetailModel[]>(`${environment.ApiBaseUrl}?id=${id}`)
  //       .subscribe((data) => (this.class = data));
  //   }

  getDetails(id: string) {
    return this.http.get<ClassDetailModel[]>(
      `${environment.ApiBaseUrl}?id=${id}`
    );
  }
}
