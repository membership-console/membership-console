/* tslint:disable */
/* eslint-disable */

/**
 * パスワードリセットリクエスト
 */
export interface PasswordResetRequest {
    /**
     * 新しいパスワード
     */
    newPassword: string;

    /**
     * トークン
     */
    token: string;
}
