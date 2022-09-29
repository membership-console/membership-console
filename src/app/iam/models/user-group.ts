/**
 * ユーザグループモデル
 */
export type UserGroup = {
    /**
     * ユーザグループID
     */
    id: number;

    /**
     * ユーザグループ名
     */
    name: string;

    /**
     * ロールリスト
     */
    roles: number[];
};
