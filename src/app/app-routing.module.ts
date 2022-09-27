import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PageContainerComponent } from "@shared/components/page-container/page-container.component";

const routes: Routes = [
    {
        path: "dashboard",
        component: PageContainerComponent,
        data: { breadcrumb: "ダッシュボード", title: "ダッシュボード" },
    },
    { path: "", redirectTo: "/dashboard", pathMatch: "full" },
    { path: "**", redirectTo: "/error/404", pathMatch: "full" },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
