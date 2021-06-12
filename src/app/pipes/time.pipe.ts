import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name: "time",
})
export class TimePipe implements PipeTransform {
  transform(value: number): string {
    let minutes = Math.ceil(value / 60);
    return minutes + " mins";
  }
}
