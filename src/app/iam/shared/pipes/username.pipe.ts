import { Pipe, PipeTransform } from "@angular/core";

import { User } from "@iam/models/user";

@Pipe({
    name: "username",
})
export class UsernamePipe implements PipeTransform {
    transform(value: User | null | undefined): string {
        if (value === null || value === undefined) {
            return "-";
        }
        if (value.firstName && value.lastName) {
            return `${value.lastName} ${value.firstName}`;
        } else {
            return "-";
        }
    }
}
