import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "focus",
})
export class FocusPipe implements PipeTransform {
  transform(input: number): string {
    if (input === 12) {
      return "Balance";
    } else if (input === 13) {
      return "Flexibility";
    } else if (input === 14) {
      return "Asanas";
    } else if (input === 15) {
      return "Total Body";
    } else if (input === 16) {
      return "Backbend";
    } else if (input === 17) {
      return "Strength";
    } else if (input === 18) {
      return "Energy Boost";
    } else if (input === 19) {
      return "Meditation";
    } else if (input === 20) {
      return "Cardio";
    } else if (input === 21) {
      return "Women";
    } else {
      return "Other";
    }
  }
}
