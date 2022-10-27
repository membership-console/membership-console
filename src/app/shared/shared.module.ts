import { CommonModule, DatePipe } from "@angular/common";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";
import { MAT_DATE_LOCALE, MatNativeDateModule, MatOptionModule } from "@angular/material/core";
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
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterTestingModule } from "@angular/router/testing";
import { MarkdownModule } from "ngx-markdown";

import { CardComponent } from "@shared/components/card/card.component";
import { ConfirmDialogComponent } from "@shared/components/confirm-dialog/confirm-dialog.component";
import { FlatButtonComponent } from "@shared/components/flat-button/flat-button.component";
import { MarkdownViewerComponent } from "@shared/components/markdown-viewer/markdown-viewer.component";
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
import { SharedAutocompleteChipInputComponent } from "@shared/components/shared-autocomplete-chip-input/shared-autocomplete-chip-input.component";
import { SharedAutocompleteSelectComponent } from "@shared/components/shared-autocomplete-select/shared-autocomplete-select.component";
import { SharedInputComponent } from "@shared/components/shared-input/shared-input.component";
import { SharedMarkdownEditorComponent } from "@shared/components/shared-markdown-editor/shared-markdown-editor.component";
import { SharedTextareaComponent } from "@shared/components/shared-textarea/shared-textarea.component";
import { SnackBarComponent } from "@shared/components/snack-bar/snack-bar.component";
import { StatusBadgeComponent } from "@shared/components/status-badge/status-badge.component";
import { StatusIndicatorComponent } from "@shared/components/status-indicator/status-indicator.component";
import { StrokedButtonComponent } from "@shared/components/stroked-button/stroked-button.component";
import { ErrorResponseInterceptor } from "@shared/interceptors/error-response.interceptor";
import { LoadingInterceptor } from "@shared/interceptors/loading.interceptor";
import { NumberPipe } from "@shared/pipes/number.pipe";
import { SafeHtmlPipe } from "@shared/pipes/safe-html.pipe";
import { UsernamePipe } from "@shared/pipes/username.pipe";

@NgModule({
    declarations: [
        // Components
        CardComponent,
        ConfirmDialogComponent,
        FlatButtonComponent,
        MarkdownViewerComponent,
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
        SharedAutocompleteChipInputComponent,
        SharedAutocompleteSelectComponent,
        SharedInputComponent,
        SharedMarkdownEditorComponent,
        SharedTextareaComponent,
        SnackBarComponent,
        StatusBadgeComponent,
        StatusIndicatorComponent,
        StrokedButtonComponent,

        // Pipes
        NumberPipe,
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
        MatAutocompleteModule,
        MatBadgeModule,
        MatButtonModule,
        MatCardModule,
        MatChipsModule,
        MatNativeDateModule,
        MatOptionModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatSidenavModule,
        MatSnackBarModule,
        MatTabsModule,
        MatToolbarModule,
        MatCheckboxModule,
        MatSlideToggleModule,
        MatRadioModule,
        MarkdownModule.forRoot({}),
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
        MatListModule,
        MatPaginatorModule,
        MatTableModule,
        MatCheckboxModule,
        MatSlideToggleModule,
        MatRadioModule,

        // Components
        CardComponent,
        FlatButtonComponent,
        HeaderComponent,
        MarkdownViewerComponent,
        SharedAutocompleteChipInputComponent,
        SharedAutocompleteSelectComponent,
        SharedInputComponent,
        SharedMarkdownEditorComponent,
        SharedTextareaComponent,
        StatusBadgeComponent,
        StatusIndicatorComponent,
        MatSelectModule,

        // Pipes
        NumberPipe,
        SafeHtmlPipe,
        UsernamePipe,
        StrokedButtonComponent,
    ],
    providers: [
        { provide: MAT_DATE_LOCALE, useValue: "ja-JP" },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorResponseInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
        DatePipe,
    ],
})
export class SharedModule {}
