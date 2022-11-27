/* tslint:disable */
/* eslint-disable */
import { NotificationResponse } from "./notification-response";

/**
 * お知らせリストレスポンス
 */
export interface NotificationsResponse {
    /**
     * お知らせリスト
     */
    notifications?: Array<NotificationResponse>;
}
