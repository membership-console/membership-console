import { NgModule } from "@angular/core";

import { UserGroupsComponent } from "@iam/components/user-groups/user-groups.component";

import { SharedModule } from "@shared/shared.module";

@NgModule({
    declarations: [UserGroupsComponent],
    imports: [SharedModule],
})
export class IamModule {}
