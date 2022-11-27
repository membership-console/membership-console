/* tslint:disable */
/* eslint-disable */

/**
 * メール送信リクエスト
 */
export interface EmailSendRequest {
    /**
     * 本文
     */
    body: string;

    /**
     * 件名
     */
    subject: string;

    /**
     * ユーザIDリスト
     */
    userIds: Array<number>;
}
