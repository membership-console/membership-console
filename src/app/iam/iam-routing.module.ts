import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { UserGroupsComponent } from "@iam/components/user-groups/user-groups.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: "user-groups",
        pathMatch: "full",
    },
    {
        path: "user-groups",
        component: UserGroupsComponent,
        data: { breadcrumb: "ユーザグループ", title: "ユーザグループ" },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class IamRoutingModule {}
