import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { ClassModel } from "../models/class.model";

@Injectable({
  providedIn: "root",
})
export class ClassesService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.ApiBaseUrl;
  }

  getList() {
    return this.http.get<ClassModel[]>(this.apiUrl);
  }
}
