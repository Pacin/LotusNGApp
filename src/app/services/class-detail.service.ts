import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { environment } from "src/environments/environment";
import { ClassDetailModel } from "../models/class-detail.model";

@Injectable({
  providedIn: "root",
})
export class ClassDetailService {
  private apiUrl: string;
  class: any[] = [];

  constructor() {}

  ngOnInit(): void {}
}
