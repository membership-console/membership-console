/* tslint:disable */
/* eslint-disable */

/**
 * ユーザ作成リクエスト
 */
export interface UserCreateRequest {
    /**
     * メールアドレス
     */
    email: string;

    /**
     * 入学年度
     */
    entranceYear: number;

    /**
     * ファーストネーム
     */
    firstName: string;

    /**
     * ラストネーム
     */
    lastName: string;

    /**
     * パスワード
     */
    password: string;

    /**
     * ユーザグループIDリスト
     */
    userGroupIds: Array<number>;
}
