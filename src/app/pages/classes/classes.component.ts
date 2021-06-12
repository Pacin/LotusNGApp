import { Component, OnInit } from "@angular/core";
import { ClassesService } from "src/app/services/classes.service";

@Component({
  selector: "app-classes",
  templateUrl: "./classes.component.html",
  styleUrls: ["./classes.component.scss"],
})
export class ClassesComponent implements OnInit {
  constructor(private classesService: ClassesService) {}

  get classes() {
    return this.classesService.classes;
  }

  ngOnInit(): void {
    this.classesService.getList();
  }
}
