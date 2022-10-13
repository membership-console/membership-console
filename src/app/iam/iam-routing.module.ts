import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { UserGroupsComponent } from "@iam/components/user-groups/user-groups.component";
import { UserEditComponent } from "@iam/components/users/user-edit/user-edit.component";
import { UserNewComponent } from "@iam/components/users/user-new/user-new.component";
import { UsersComponent } from "@iam/components/users/users.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: "users",
        pathMatch: "full",
    },
    {
        path: "user-groups",
        component: UserGroupsComponent,
        data: { breadcrumb: "ユーザグループリスト", title: "ユーザグループリスト" },
    },
    {
        path: "users",
        data: { breadcrumb: "ユーザリスト", title: null },
        children: [
            {
                path: "",
                component: UsersComponent,
                data: { breadcrumb: null, title: "ユーザリスト" },
            },
            {
                path: "new",
                component: UserNewComponent,
                data: { breadcrumb: "新規作成", title: "ユーザ作成" },
            },
            {
                path: ":userId/edit",
                component: UserEditComponent,
                data: { breadcrumb: "ユーザ編集", title: "ユーザ編集" },
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class IamRoutingModule {}
