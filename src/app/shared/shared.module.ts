import { CommonModule, DatePipe } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MAT_DATE_LOCALE } from "@angular/material/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterTestingModule } from "@angular/router/testing";

import { HeaderComponent } from "@shared/components/page-container/header/header.component";
import { PageContainerComponent } from "@shared/components/page-container/page-container.component";
import { SidenavComponent } from "@shared/components/page-container/sidenav/sidenav.component";

@NgModule({
    declarations: [HeaderComponent, PageContainerComponent, SidenavComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,

        // UI Modules
        FlexLayoutModule,
        MatExpansionModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
    ],
    exports: [],
    providers: [{ provide: MAT_DATE_LOCALE, useValue: "ja-JP" }, DatePipe],
})
export class SharedModule {}
