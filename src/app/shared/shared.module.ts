import { CommonModule, DatePipe } from "@angular/common";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MAT_DATE_LOCALE, MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterTestingModule } from "@angular/router/testing";

import { CardComponent } from "@shared/components/card/card.component";
import { ConfirmDialogComponent } from "@shared/components/confirm-dialog/confirm-dialog.component";
import { FlatButtonComponent } from "@shared/components/flat-button/flat-button.component";
import { BreadcrumbComponent } from "@shared/components/page-container/breadcrumb/breadcrumb.component";
import { FooterComponent } from "@shared/components/page-container/footer/footer.component";
import { HeaderComponent } from "@shared/components/page-container/header/header.component";
import { HelpMenuComponent } from "@shared/components/page-container/header/help-menu/help-menu.component";
import { NotificationMenuComponent } from "@shared/components/page-container/header/notification-menu/notification-menu.component";
import { UserMenuComponent } from "@shared/components/page-container/header/user-menu/user-menu.component";
import { PageContainerComponent } from "@shared/components/page-container/page-container.component";
import { SidenavComponent } from "@shared/components/page-container/sidenav/sidenav.component";
import { TitleComponent } from "@shared/components/page-container/title/title.component";
import { ProgressSpinnerComponent } from "@shared/components/progress-spinner/progress-spinner.component";
import { SharedInputComponent } from "@shared/components/shared-input/shared-input.component";
import { SharedTextareaComponent } from "@shared/components/shared-textarea/shared-textarea.component";
import { SnackBarComponent } from "@shared/components/snack-bar/snack-bar.component";
import { StatusBadgeComponent } from "@shared/components/status-badge/status-badge.component";
import { StrokedButtonComponent } from "@shared/components/stroked-button/stroked-button.component";
import { ErrorResponseInterceptor } from "@shared/interceptors/error-response.interceptor";
import { LoadingInterceptor } from "@shared/interceptors/loading.interceptor";
import { SafeHtmlPipe } from "@shared/pipes/safe-html.pipe";
import { UsernamePipe } from "@shared/pipes/username.pipe";

@NgModule({
    declarations: [
        // Components
        CardComponent,
        ConfirmDialogComponent,
        FlatButtonComponent,
        BreadcrumbComponent,
        FooterComponent,
        HeaderComponent,
        HelpMenuComponent,
        NotificationMenuComponent,
        UserMenuComponent,
        PageContainerComponent,
        SidenavComponent,
        TitleComponent,
        ProgressSpinnerComponent,
        SharedInputComponent,
        SharedTextareaComponent,
        SnackBarComponent,
        StatusBadgeComponent,
        StrokedButtonComponent,

        // Pipes
        SafeHtmlPipe,
        UsernamePipe,
    ],
    imports: [
        // Modules
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
        MatNativeDateModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        MatSidenavModule,
        MatSnackBarModule,
        MatToolbarModule,
    ],
    exports: [
        // Modules
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,

        // UI Modules
        FlexLayoutModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatPaginatorModule,
        MatTableModule,

        // Components
        CardComponent,
        FlatButtonComponent,
        SharedInputComponent,
        SharedTextareaComponent,
        StatusBadgeComponent,

        // Pipes
        SafeHtmlPipe,
        UsernamePipe,
    ],
    providers: [
        { provide: MAT_DATE_LOCALE, useValue: "ja-JP" },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorResponseInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
        DatePipe,
    ],
})
export class SharedModule {}
