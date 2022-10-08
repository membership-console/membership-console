import { Pipe, PipeTransform } from "@angular/core";

import { UserResponse } from "@iam/api/models";

@Pipe({
    name: "username",
})
export class UsernamePipe implements PipeTransform {
    transform(value: UserResponse | null | undefined): string {
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
