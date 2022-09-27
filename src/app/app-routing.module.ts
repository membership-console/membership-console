import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "@app/components/dashboard/dashboard.component";
import { ErrorComponent } from "@app/components/error/error.component";

import { PageContainerComponent } from "@shared/components/page-container/page-container.component";

const routes: Routes = [
    {
        path: "",
        component: PageContainerComponent,
        children: [
            { path: "", redirectTo: "/dashboard", pathMatch: "full" },
            {
                path: "dashboard",
                component: DashboardComponent,
                data: { breadcrumb: "ダッシュボード", title: "プロダクト一覧" },
            },
            {
                path: "error/:status",
                component: ErrorComponent,
                data: { breadcrumb: "エラー", title: null },
            },
        ],
    },
    { path: "**", redirectTo: "/error/404", pathMatch: "full" },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
