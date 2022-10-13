import { Component, OnInit } from "@angular/core";
import { FormBuilder, UntypedFormArray, UntypedFormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";

import { UserAPIService, UserGroupAPIService } from "@iam/api/services";

import { SelectOption } from "@shared/models/select-option";
import { AlertService } from "@shared/services/alert.service";
import { UserService } from "@shared/services/user.service";
import { whiteSpaceValidator } from "@shared/validators/white-space.validator";

@UntilDestroy()
@Component({
    selector: "app-user-new",
    templateUrl: "./user-new.component.html",
    styleUrls: ["./user-new.component.scss"],
})
export class UserNewComponent implements OnInit {
    /**
     * ユーザグループ選択肢リスト
     */
    userGroupOptions!: SelectOption[];

    /**
     * 入学年度選択肢リスト
     */
    entranceYearOptions!: SelectOption[];

    /**
     * フォーム
     */
    form!: UntypedFormGroup;

    /**
     * ユーザグループリストフォーム
     */
    userGroupsForm!: UntypedFormArray;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder,
        private alertService: AlertService,
        private userAPIService: UserAPIService,
        private userGroupAPIService: UserGroupAPIService,
        private userService: UserService
    ) {}

    ngOnInit() {
        // ユーザグループリストを取得
        this.userGroupAPIService
            .getUserGroups()
            .pipe(untilDestroyed(this))
            .subscribe((response) => {
                this.userGroupOptions = response.userGroups.map((userGroup) => {
                    return { label: userGroup.name, value: userGroup.id };
                });
            });

        // 入学年度選択肢リストを取得
        this.entranceYearOptions = this.userService.getValidEntranceYears().map((entranceYear) => {
            return { label: entranceYear.toString(), value: entranceYear };
        });

        // フォームを作成
        this.userGroupsForm = this.formBuilder.array([]);

        this.form = this.formBuilder.group({
            firstName: [
                null,
                [
                    Validators.required,
                    Validators.minLength(1),
                    Validators.maxLength(255),
                    whiteSpaceValidator,
                ],
            ],
            lastName: [
                null,
                [
                    Validators.required,
                    Validators.minLength(1),
                    Validators.maxLength(255),
                    whiteSpaceValidator,
                ],
            ],
            email: [
                null,
                [
                    Validators.required,
                    Validators.maxLength(255),
                    Validators.email,
                    whiteSpaceValidator,
                ],
            ],
            password: [
                null,
                [Validators.required, Validators.minLength(8), Validators.maxLength(32)],
            ],
            entranceYear: [null, [Validators.required]],
            userGroupIds: this.userGroupsForm,
        });
    }

    /**
     * フォーム送信
     */
    onSubmit() {
        console.log(this.form.value);
        if (this.form.valid) {
            this.userAPIService
                .createUser({ body: this.form.value })
                .pipe(untilDestroyed(this))
                .subscribe(() => {
                    this.alertService.success("ユーザを新規作成しました。");
                    this.router.navigate(["../"], {
                        queryParams: {},
                        queryParamsHandling: "merge",
                        relativeTo: this.activatedRoute,
                    });
                });
        }
    }

    /**
     * キャンセル
     */
    onCancel() {
        this.router.navigate(["../"], {
            queryParams: {},
            queryParamsHandling: "merge",
            relativeTo: this.activatedRoute,
        });
    }
}
