import { Pipe, PipeTransform } from "@angular/core";

import { Request } from "@paymaster/models/request";

import { Status } from "@shared/enums/status";

@Pipe({
    name: "isApproved",
})
export class IsApprovedPipe implements PipeTransform {
    transform(value: Request): Status {
        return value.is_approved ? Status.SUCCESS : Status.NORMAL;
    }
}
