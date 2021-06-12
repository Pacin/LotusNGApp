import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "level" })
export class LevelPipe implements PipeTransform {
  transform(input: number): string {
    if (input === 1) {
      return "Beginner";
    } else if (input === 2) {
      return "Intermediate";
    } else {
      return "Advanced";
    }
  }
}
