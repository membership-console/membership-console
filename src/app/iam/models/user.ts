/**
 * ユーザモデル
 */
export type User = {
    /**
     * ユーザID
     */
    id: number;

    /**
     * ラストネーム
     */
    lastName: string;

    /**
     * ファーストネーム
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
