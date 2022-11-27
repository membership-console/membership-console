/* tslint:disable */
/* eslint-disable */
import { NotificationReminderResponse } from "./notification-reminder-response";
import { UserResponse } from "./user-response";

/**
 * お知らせレスポンス
 */
export interface NotificationResponse {
    /**
     * 本文
     */
    body: string;
    contributor: null | UserResponse;

    /**
     * お知らせID
     */
    id: number;

    /**
     * 既読フラグ
     */
    isViewed: boolean;

    /**
     * 投稿日
     */
    postedDate: string;

    /**
     * リマインダーリスト
     */
    reminders: Array<NotificationReminderResponse>;

    /**
     * タイトル
     */
    title: string;
}
