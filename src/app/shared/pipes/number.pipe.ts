import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "number",
})
export class NumberPipe implements PipeTransform {
    transform(value: number): string {
        return value.toLocaleString();
    }
}
