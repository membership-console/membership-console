import { NgModule } from "@angular/core";

import { UserGroupsComponent } from "@iam/components/user-groups/user-groups.component";
import { UsersComponent } from "@iam/components/users/users.component";
import { UsernamePipe } from "@iam/shared/pipes/username.pipe";

import { SharedModule } from "@shared/shared.module";

@NgModule({
    declarations: [UserGroupsComponent, UsersComponent, UsernamePipe],
    imports: [SharedModule],
})
export class IamModule {}
