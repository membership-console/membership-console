export type Request = {
    /**
     * 申請ID
     */
    id: number;

    /**
     * 商品名
     */
    name: string;

    /**
     * 説明文
     */
    description: string;

    /**
     * 商品URL
     */
    url: string;

    /**
     * 税込価格
     */
    price: number;

    /**
     * 個数
     */
    quantity: number;

    /**
     * 申請日
     */
    requested_date: Date;
};
