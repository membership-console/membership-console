import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "@app/components/dashboard/dashboard.component";
import { ErrorComponent } from "@app/components/error/error.component";
import { LoginComponent } from "@app/components/login/login.component";
import { NotificationsComponent } from "@app/components/notifications/notifications.component";
import { PasswordChangeComponent } from "@app/components/password-reset/password-change/password-change.component";
import { PasswordResetComponent } from "@app/components/password-reset/password-reset.component";
import { SettingsComponent } from "@app/components/settings/settings.component";

import { PageContainerComponent } from "@shared/components/page-container/page-container.component";
import { Role } from "@shared/enums/role";
import { AuthGuard } from "@shared/guards/auth.guard";
import { LoginedGuard } from "@shared/guards/logined.guard";
import { RoleGuard } from "@shared/guards/role.guard";

/**
 * ページタイトルをビルド
 *
 * @param name ページ名
 * @return ページタイトル
 */
const buildPageTitle = (name: string) => `${name} | Membership Console`;

const routes: Routes = [
    {
        path: "",
        component: PageContainerComponent,
        canActivate: [AuthGuard],
        children: [
            { path: "", redirectTo: "/dashboard", pathMatch: "full" },
            {
                path: "dashboard",
                component: DashboardComponent,
                data: { breadcrumb: "ダッシュボード", title: "連携プロダクト" },
                title: buildPageTitle("ダッシュボード"),
            },
            {
                path: "notifications",
                component: NotificationsComponent,
                data: { breadcrumb: "運営のお知らせ", title: "運営のお知らせ" },
                title: buildPageTitle("運営のお知らせ"),
            },
            {
                path: "settings",
                component: SettingsComponent,
                data: { breadcrumb: "アプリケーション設定", title: "アプリケーション設定" },
                title: buildPageTitle("アプリケーション設定"),
            },
            {
                path: "error/:status",
                component: ErrorComponent,
                data: { breadcrumb: "エラー", title: null },
                title: buildPageTitle("エラー"),
            },
            {
                path: "iam",
                loadChildren: () =>
                    import("@iam/iam-routing.module").then((m) => m.IamRoutingModule),
                data: { breadcrumb: "IAM", title: null, role: Role.IAM_VIEWER },
                title: buildPageTitle("IAM"),
                canActivate: [RoleGuard],
            },
            {
                path: "purchase-request",
                loadChildren: () =>
                    import("@purchase-request/purchase-request-routing.module").then(
                        (m) => m.PurchaseRequestRoutingModule
                    ),
                data: { breadcrumb: "購入申請", title: null, role: Role.PURCHASE_REQUEST_VIEWER },
                title: buildPageTitle("購入申請"),
                canActivate: [RoleGuard],
            },
        ],
    },
    {
        path: "login",
        component: LoginComponent,
        title: buildPageTitle("ログイン"),
        canActivate: [LoginedGuard],
    },
    {
        path: "password_reset",
        title: buildPageTitle("パスワードリセット"),
        canActivate: [LoginedGuard],
        children: [
            {
                path: "",
                component: PasswordResetComponent,
            },
            {
                path: ":token",
                component: PasswordChangeComponent,
            },
        ],
    },
    {
        path: "**",
        redirectTo: "/error/404",
        pathMatch: "full",
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
