/* tslint:disable */
/* eslint-disable */

/**
 * ログインユーザパスワード更新リクエスト
 */
export interface LoginUserPasswordUpdateRequest {
    /**
     * 新しいパスワード
     */
    newPassword: string;

    /**
     * 古いパスワード
     */
    oldPassword: string;
}
