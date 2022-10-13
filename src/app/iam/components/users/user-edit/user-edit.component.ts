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
    selector: "app-user-edit",
    templateUrl: "./user-edit.component.html",
    styleUrls: ["./user-edit.component.scss"],
})
export class UserEditComponent implements OnInit {
    /**
     * ユーザID
     */
    userId!: number;

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
        // パスパラメータからユーザIDを取得
        this.userId = Number(this.activatedRoute.snapshot.paramMap.get("userId"));

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

        // ユーザを取得
        this.userAPIService
            .getUser({ user_id: this.userId })
            .pipe(untilDestroyed(this))
            .subscribe((response) => {
                // フォームを作成
                this.userGroupsForm = this.formBuilder.array(
                    response.userGroups.map((userGroup) =>
                        this.formBuilder.control(userGroup.id, [Validators.required])
                    )
                );

                this.form = this.formBuilder.group({
                    firstName: [
                        response.firstName,
                        [
                            Validators.required,
                            Validators.minLength(1),
                            Validators.maxLength(255),
                            whiteSpaceValidator,
                        ],
                    ],
                    lastName: [
                        response.lastName,
                        [
                            Validators.required,
                            Validators.minLength(1),
                            Validators.maxLength(255),
                            whiteSpaceValidator,
                        ],
                    ],
                    email: [
                        response.email,
                        [
                            Validators.required,
                            Validators.maxLength(255),
                            Validators.email,
                            whiteSpaceValidator,
                        ],
                    ],
                    entranceYear: [response.entranceYear, [Validators.required]],
                    userGroupIds: this.userGroupsForm,
                });
            });
    }

    /**
     * フォーム送信
     */
    onSubmit() {
        if (this.form.valid) {
            this.userAPIService
                .updateUser({ user_id: this.userId, body: this.form.value })
                .pipe(untilDestroyed(this))
                .subscribe(() => {
                    this.alertService.success("ユーザ情報を編集しました。");
                    this.router.navigate(["../../"], {
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
        this.router.navigate(["../../"], {
            queryParams: {},
            queryParamsHandling: "merge",
            relativeTo: this.activatedRoute,
        });
    }
}
