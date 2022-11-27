/* tslint:disable */
/* eslint-disable */

/**
 * リマインダーレスポンス
 */
export interface NotificationReminderResponse {
    /**
     * リマインダーID
     */
    id: number;

    /**
     * お知らせID
     */
    notificationId: number;

    /**
     * リマインド予定日
     */
    scheduledDate: string;
}
