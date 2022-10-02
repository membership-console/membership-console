import { Pipe, PipeTransform } from "@angular/core";

import { Request } from "@purchase-request/models/request";

import { Status } from "@shared/enums/status";

@Pipe({
    name: "isPurchased",
})
export class IsPurchasedPipe implements PipeTransform {
    transform(value: Request): Status {
        return value.is_purchased ? Status.SUCCESS : Status.NORMAL;
    }
}
