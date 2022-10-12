/* tslint:disable */
/* eslint-disable */

/**
 * ユーザ更新リクエスト
 */
export interface UserUpdateRequest {
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
     * ユーザグループIDリスト
     */
    userGroupIds: Array<number>;
}
