import { Component, OnInit } from "@angular/core";
import { ClassesService } from "src/app/services/classes.service";

@Component({
  selector: "app-classes",
  templateUrl: "./classes.component.html",
  styleUrls: ["./classes.component.scss"],
})
export class ClassesComponent implements OnInit {
  searchText: string;
  classes: any[] = [];

  constructor(private classesService: ClassesService) {}

  ngOnInit(): void {
    this.getClassList();
  }

  getClassList() {
    this.classesService.getList().subscribe((data) => {
      this.classes = data;
    });
  }
}
