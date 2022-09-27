import { CommonModule, DatePipe } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MAT_DATE_LOCALE } from "@angular/material/core";
import { MatDialogModule } from "@angular/material/dialog";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterTestingModule } from "@angular/router/testing";

import { CardComponent } from "@shared/components/card/card.component";
import { ConfirmDialogComponent } from "@shared/components/confirm-dialog/confirm-dialog.component";
import { FlatButtonComponent } from "@shared/components/flat-button/flat-button.component";
import { BreadcrumbComponent } from "@shared/components/page-container/breadcrumb/breadcrumb.component";
import { FooterComponent } from "@shared/components/page-container/footer/footer.component";
import { HeaderComponent } from "@shared/components/page-container/header/header.component";
import { NotificationMenuComponent } from "@shared/components/page-container/header/notification-menu/notification-menu.component";
import { UserMenuComponent } from "@shared/components/page-container/header/user-menu/user-menu.component";
import { PageContainerComponent } from "@shared/components/page-container/page-container.component";
import { SidenavComponent } from "@shared/components/page-container/sidenav/sidenav.component";
import { TitleComponent } from "@shared/components/page-container/title/title.component";
import { SnackBarComponent } from "@shared/components/snack-bar/snack-bar.component";
import { StrokedButtonComponent } from "@shared/components/stroked-button/stroked-button.component";
import { SafeHtmlPipe } from "@shared/pipes/safe-html.pipe";

@NgModule({
    declarations: [
        // Components
        CardComponent,
        ConfirmDialogComponent,
        FlatButtonComponent,
        BreadcrumbComponent,
        FooterComponent,
        HeaderComponent,
        NotificationMenuComponent,
        UserMenuComponent,
        PageContainerComponent,
        SidenavComponent,
        SnackBarComponent,
        StrokedButtonComponent,
        TitleComponent,

        // Pipes
        SafeHtmlPipe,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,

        // UI Modules
        FlexLayoutModule,
        MatBadgeModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatExpansionModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatSidenavModule,
        MatSnackBarModule,
        MatToolbarModule,
    ],
    exports: [
        // UI Modules
        FlexLayoutModule,

        // Components
        CardComponent,
    ],
    providers: [{ provide: MAT_DATE_LOCALE, useValue: "ja-JP" }, DatePipe],
})
export class SharedModule {}
