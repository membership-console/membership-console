/**
 * アラートモデル
 */
export type Alert = {
    /**
     * ステータスコード
     */
    statusCode: number;

    /**
     * メッセージ
     */
    message: string;

    /**
     * レベル
     */
    level: "SUCCESS" | "WARN" | "ERROR";
};
