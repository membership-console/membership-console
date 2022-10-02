import { NgModule } from "@angular/core";

import { UserGroupsComponent } from "@iam/components/user-groups/user-groups.component";
import { UsersComponent } from "@iam/components/users/users.component";

import { SharedModule } from "@shared/shared.module";

@NgModule({
    declarations: [UserGroupsComponent, UsersComponent],
    imports: [SharedModule],
})
export class IamModule {}
