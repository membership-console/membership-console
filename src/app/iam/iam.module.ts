import { NgModule } from "@angular/core";

import { ApiConfiguration } from "@iam/api/api-configuration";
import { UserGroupEditComponent } from "@iam/components/user-groups/user-group-edit/user-group-edit.component";
import { UserGroupFormComponent } from "@iam/components/user-groups/user-group-form/user-group-form.component";
import { UserGroupNewComponent } from "@iam/components/user-groups/user-group-new/user-group-new.component";
import { UserGroupsComponent } from "@iam/components/user-groups/user-groups.component";
import { UserEditComponent } from "@iam/components/users/user-edit/user-edit.component";
import { UserNewComponent } from "@iam/components/users/user-new/user-new.component";
import { UsersComponent } from "@iam/components/users/users.component";

import { SharedModule } from "@shared/shared.module";

import { environment } from "@environments/environment";

@NgModule({
    declarations: [
        UserGroupEditComponent,
        UserGroupFormComponent,
        UserGroupNewComponent,
        UserGroupsComponent,
        UserEditComponent,
        UserNewComponent,
        UsersComponent,
    ],
    imports: [SharedModule],
    providers: [{ provide: ApiConfiguration, useValue: { rootUrl: environment.IAM_API_ROOT_URL } }],
})
export class IamModule {}
