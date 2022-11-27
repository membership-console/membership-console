import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "@app/components/dashboard/dashboard.component";
import { ErrorComponent } from "@app/components/error/error.component";
import { LoginComponent } from "@app/components/login/login.component";
import { MypageComponent } from "@app/components/mypage/mypage.component";
import { PasswordChangeComponent } from "@app/components/password-reset/password-change/password-change.component";
import { PasswordResetComponent } from "@app/components/password-reset/password-reset.component";
import { SettingsComponent } from "@app/components/settings/settings.component";

import { PageContainerComponent } from "@shared/components/page-container/page-container.component";
import { LoggedInGuard } from "@shared/guards/logged-in.guard";
import { NotLoggedInGuard } from "@shared/guards/not-logged-in.guard";

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
        canActivate: [LoggedInGuard],
        children: [
            { path: "", redirectTo: "/dashboard", pathMatch: "full" },
            {
                path: "dashboard",
                component: DashboardComponent,
                data: { breadcrumb: "ダッシュボード", title: "連携プロダクト" },
                title: buildPageTitle("ダッシュボード"),
            },
            {
                path: "settings",
                component: SettingsComponent,
                data: { breadcrumb: "アプリケーション設定", title: "アプリケーション設定" },
                title: buildPageTitle("アプリケーション設定"),
            },
            {
                path: "mypage",
                component: MypageComponent,
                data: { breadcrumb: "アカウント設定", title: "アカウント設定" },
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
                data: { breadcrumb: "IAM", title: null },
                title: buildPageTitle("IAM"),
            },
            {
                path: "paymaster",
                loadChildren: () =>
                    import("@paymaster/paymaster-routing.module").then(
                        (m) => m.PaymasterRoutingModule
                    ),
                data: {
                    breadcrumb: "会計システム",
                    title: null,
                },
                title: buildPageTitle("会計システム"),
            },
            {
                path: "reminder",
                loadChildren: () =>
                    import("@reminder/reminder-routing.module").then(
                        (m) => m.ReminderRoutingModule
                    ),
                data: {
                    breadcrumb: "リマインダー",
                    title: null,
                },
                title: buildPageTitle("リマインダー"),
            },
        ],
    },
    {
        path: "",
        canActivate: [NotLoggedInGuard],
        children: [
            {
                path: "login",
                component: LoginComponent,
                title: buildPageTitle("ログイン"),
                canActivate: [NotLoggedInGuard],
            },
            {
                path: "password_reset",
                title: buildPageTitle("パスワードリセット"),
                canActivate: [NotLoggedInGuard],
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
