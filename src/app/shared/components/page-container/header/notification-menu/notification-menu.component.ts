import { Component } from "@angular/core";

@Component({
    selector: "app-notification-menu",
    templateUrl: "./notification-menu.component.html",
    styleUrls: ["./notification-menu.component.scss"],
})
export class NotificationMenuComponent {
    /**
     * 通知数
     */
    number_of_notifications = 1;

    constructor() {}
}
