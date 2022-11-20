/* tslint:disable */
/* eslint-disable */
export interface PurchaseRequestResponse {
    /**
     * 説明
     */
    description: string;

    /**
     * 購入申請ID
     */
    id: string;

    /**
     * 品名
     */
    name: string;

    /**
     * 税込み価格
     */
    price: number;

    /**
     * 数量
     */
    quantity: number;

    /**
     * 申請日
     */
    requestedAt: string;

    /**
     * 申請者
     */
    requestedBy: {
        /**
         * 申請者ID
         */
        id: number;

        /**
         * ファーストネーム
         */
        firstName: string;

        /**
         * ラストネーム
         */
        lastName: string;
    };

    /**
     * 購入申請ステータス
     */
    status: number;

    /**
     * 参考URL
     */
    url: string;
}
