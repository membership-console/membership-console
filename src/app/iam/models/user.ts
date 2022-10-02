/**
 * ユーザモデル
 */
export type User = {
    /**
     * ユーザID
     */
    id: number;

    /**
     * 苗字
     */
    lastName: string;

    /**
     * 名前
     */
    firstName: string;

    /**
     * メールアドレス
     */
    email: string;

    /**
     * 入学年度
     */
    entranceYear: number;
};
