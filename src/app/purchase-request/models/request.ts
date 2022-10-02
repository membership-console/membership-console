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

    /**
     * 申請者
     */
    requested_by: string;

    /**
     * 承認済みか
     */
    is_approved: boolean;

    /**
     * 購入済みか
     */
    is_purchased: boolean;
};
