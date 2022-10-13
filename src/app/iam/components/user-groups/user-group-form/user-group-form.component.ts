import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, UntypedFormArray, UntypedFormGroup, Validators } from "@angular/forms";

import { UserGroupResponse } from "@iam/api/models";

import { SelectOption } from "@shared/models/select-option";
import { UserGroupService } from "@shared/services/user-group.service";

@Component({
    selector: "app-user-group-form",
    templateUrl: "./user-group-form.component.html",
    styleUrls: ["./user-group-form.component.scss"],
})
export class UserGroupFormComponent implements OnInit {
    /**
     * ユーザグループ
     */
    @Input() userGroup: UserGroupResponse | undefined;

    /**
     * 送信EventEmitter
     */
    @Output() submitEventEmitter: EventEmitter<UntypedFormGroup> =
        new EventEmitter<UntypedFormGroup>();

    /**
     * キャンセルEventEmitter
     */
    @Output() cancelEventEmitter: EventEmitter<void> = new EventEmitter<void>();

    /**
     * フォーム
     */
    form!: UntypedFormGroup;

    /**
     * ユーザグループロールリストフォーム
     */
    userGroupRolesFrom!: UntypedFormArray;

    /**
     * ロール選択肢リスト
     */
    roleOptions!: SelectOption[];

    constructor(private formBuilder: FormBuilder, private userGroupService: UserGroupService) {}

    ngOnInit(): void {
        // ロール選択肢リストを取得
        this.roleOptions = this.userGroupService.getRoleSelectOptions();

        // フォームを作成
        if (this.userGroup) {
            this.userGroupRolesFrom = this.formBuilder.array(
                this.userGroup.roles.map((role) =>
                    this.formBuilder.control(role, [Validators.required])
                )
            );
        } else {
            this.userGroupRolesFrom = this.formBuilder.array([]);
        }
        this.form = this.formBuilder.group({
            name: [
                this.userGroup ? this.userGroup.name : null,
                [Validators.required, Validators.maxLength(100)],
            ],
            roles: this.userGroupRolesFrom,
        });
    }

    /**
     * フォーム送信
     */
    onSubmit() {
        if (this.form.valid) {
            this.submitEventEmitter.emit(this.form);
        }
    }

    /**
     * キャンセル
     */
    onCancel() {
        this.cancelEventEmitter.emit();
    }
}
