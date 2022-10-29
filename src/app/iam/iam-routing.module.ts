import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ClientEditComponent } from "@iam/components/clients/client-edit/client-edit.component";
import { ClientNewComponent } from "@iam/components/clients/client-new/client-new.component";
import { ClientsComponent } from "@iam/components/clients/clients.component";
import { UserGroupEditComponent } from "@iam/components/user-groups/user-group-edit/user-group-edit.component";
import { UserGroupNewComponent } from "@iam/components/user-groups/user-group-new/user-group-new.component";
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
        path: "users",
        data: { breadcrumb: "ユーザ", title: null },
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
                data: { breadcrumb: "編集", title: "ユーザ編集" },
            },
        ],
    },
    {
        path: "user-groups",
        data: { breadcrumb: "ユーザグループ", title: null },
        children: [
            {
                path: "",
                component: UserGroupsComponent,
                data: { breadcrumb: null, title: "ユーザグループリスト" },
            },
            {
                path: "new",
                component: UserGroupNewComponent,
                data: { breadcrumb: "新規作成", title: "ユーザグループ作成" },
            },
            {
                path: ":userGroupId/edit",
                component: UserGroupEditComponent,
                data: { breadcrumb: "編集", title: "ユーザグループ編集" },
            },
        ],
    },
    {
        path: "clients",
        data: { breadcrumb: "OAuthクライアント", title: null },
        children: [
            {
                path: "",
                component: ClientsComponent,
                data: { breadcrumb: null, title: "OAuthクライアントリスト" },
            },
            {
                path: "new",
                component: ClientNewComponent,
                data: { breadcrumb: "新規作成", title: "OAuthクライアント作成" },
            },
            {
                path: ":id/edit",
                component: ClientEditComponent,
                data: { breadcrumb: "編集", title: "OAuthクライアント編集" },
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class IamRoutingModule {}
