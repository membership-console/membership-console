import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, UntypedFormArray, UntypedFormGroup, Validators } from "@angular/forms";

import { ClientResponse } from "@iam/api/models";

import { SelectOption } from "@shared/models/select-option";
import { ClientService } from "@shared/services/client.service";
import { whiteSpaceValidator } from "@shared/validators/white-space.validator";

@Component({
    selector: "app-client-form",
    templateUrl: "./client-form.component.html",
    styleUrls: ["./client-form.component.scss"],
})
export class ClientFormComponent implements OnInit {
    /**
     * クライアント
     */
    @Input() client: ClientResponse | undefined;

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
     * スコープリストフォーム
     */
    scopesFrom!: UntypedFormArray;

    /**
     * スコープ選択肢リスト
     */
    scopeOptions!: SelectOption[];

    /**
     * クライアント種別選択肢リスト
     */
    typeOptions: SelectOption[] = [
        {
            label: "OAuth2.0",
            value: "OAuth2.0",
        },
        {
            label: "OIDC",
            value: "OIDC",
        },
    ];

    /**
     * SSO可否選択肢リスト
     */
    ssoOptions: SelectOption[] = [
        {
            label: "ON",
            value: true,
        },
        {
            label: "OFF",
            value: false,
        },
    ];

    constructor(private formBuilder: FormBuilder, private clientService: ClientService) {}

    ngOnInit(): void {
        // スコープ選択肢リストを取得
        this.scopeOptions = this.clientService.getScopeSelectOptions();
        if (this.client) {
            this.scopesFrom = this.formBuilder.array(
                this.client.scopes.map((scope) =>
                    this.formBuilder.control(scope, [Validators.required])
                )
            );
        } else {
            this.scopesFrom = this.formBuilder.array([]);
        }
        this.form = this.formBuilder.group({
            name: [
                this.client ? this.client.name : null,
                [
                    Validators.required,
                    Validators.minLength(1),
                    Validators.maxLength(100),
                    whiteSpaceValidator,
                ],
            ],
            type: ["OAuth2.0", [Validators.required]],
            sso: [false, [Validators.required]],
            scopes: this.scopesFrom,
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
