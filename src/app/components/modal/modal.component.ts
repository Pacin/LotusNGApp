import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
})
export class ModalComponent implements OnInit {
  @Input() classId: string;

  isAvailable: boolean = false;

  registeredClasses: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.getItem(this.classId);
  }

  setItem(classId: string) {
    if (this.registeredClasses.indexOf(classId) == -1) {
      this.registeredClasses.push(classId);
      const newRegisteredClasses = JSON.stringify(this.registeredClasses);
      window.localStorage.setItem("classId", newRegisteredClasses);
      this.isAvailable = true;
    } else {
      const item = JSON.parse(window.localStorage.getItem("classId"));
      const filtered = item.filter((item) => item !== classId);
      localStorage.setItem("classId", JSON.stringify(filtered));
      this.isAvailable = false;
    }
  }
  getItem(classId) {
    const item = window.localStorage.getItem("classId");
    this.registeredClasses = JSON.parse(item) || [];
    const isFound = this.registeredClasses.find(
      (classId) => classId === this.classId
    );
    if (isFound) {
      this.isAvailable = true;
    } else {
      this.isAvailable = false;
    }
  }
}
