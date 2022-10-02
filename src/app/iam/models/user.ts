/**
 * ユーザモデル
 */
export type User = {
    /**
     * ユーザID
     */
    id: number;

    /**
     * ユーザ名
     */
    name: string;

    /**
     * ロール
     */
    role: number;

    /**
     * メールアドレス
     */
    mailAddress: string;

    /**
     * 入学年度
     */
    entranceYear: number;
};
