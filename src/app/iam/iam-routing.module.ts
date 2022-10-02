import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { UserGroupsComponent } from "@iam/components/user-groups/user-groups.component";
import { UsersComponent } from "@iam/components/users/users.component";

const routes: Routes = [
    // TODO: /iamは/iam/usersへリダイレクト
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
    {
        path: "users",
        component: UsersComponent,
        data: { breadcrumb: "ユーザ一覧", title: "ユーザ一覧" },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class IamRoutingModule {}
