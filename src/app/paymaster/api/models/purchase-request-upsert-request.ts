/* tslint:disable */
/* eslint-disable */
export interface PurchaseRequestUpsertRequest {
    /**
     * 説明
     */
    description: string;

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
     * 参考URL
     */
    url: string;
}
