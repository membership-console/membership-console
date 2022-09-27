import { CommonModule, DatePipe } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MAT_DATE_LOCALE } from "@angular/material/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterTestingModule } from "@angular/router/testing";

import { FlatButtonComponent } from "@shared/components/flat-button/flat-button.component";
import { HeaderComponent } from "@shared/components/page-container/header/header.component";
import { UserMenuComponent } from "@shared/components/page-container/header/user-menu/user-menu.component";
import { PageContainerComponent } from "@shared/components/page-container/page-container.component";
import { SidenavComponent } from "@shared/components/page-container/sidenav/sidenav.component";
import { StrokedButtonComponent } from "@shared/components/stroked-button/stroked-button.component";

@NgModule({
    declarations: [
        FlatButtonComponent,
        HeaderComponent,
        UserMenuComponent,
        PageContainerComponent,
        SidenavComponent,
        StrokedButtonComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,

        // UI Modules
        FlexLayoutModule,
        MatButtonModule,
        MatExpansionModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule,
    ],
    exports: [],
    providers: [{ provide: MAT_DATE_LOCALE, useValue: "ja-JP" }, DatePipe],
})
export class SharedModule {}
