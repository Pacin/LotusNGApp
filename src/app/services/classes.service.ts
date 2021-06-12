import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ClassesService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    //this.apiUrl = environment.ApiBaseUrl; The part where the api is defined and the service operations are performed.
  }

  // getList() {
  //   return this.http.get<any[]>(this.apiUrl);
  // }
}
