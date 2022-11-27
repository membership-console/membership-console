import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { NotificationsComponent } from "@reminder/components/notifications/notifications.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: "notifications",
        pathMatch: "full",
    },
    {
        path: "notifications",
        data: { breadcrumb: "運営のお知らせ", title: null },
        children: [
            {
                path: "",
                component: NotificationsComponent,
                data: { breadcrumb: null, title: "運営のお知らせ" },
            },
            // {
            //     path: "new",
            //     component: NotificationNewComponent,
            //     data: { breadcrumb: "新規作成", title: "新規作成" },
            // },
        ],
    },
    // {
    //     path: "send_email",
    //     component: SendEmailComponent,
    //     data: { breadcrumb: "メール配信", title: "メール配信"},
    // }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ReminderRoutingModule {}
