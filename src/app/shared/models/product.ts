/**
 * プロダクトモデル
 */
export type Product = {
    /**
     * プロダクト名
     */
    name: string;

    /**
     * 説明文
     */
    description: string;

    /**
     * アイコン
     */
    icon: string;

    /**
     * パス
     */
    path: string;

    /**
     * バージョン
     */
    version: string;

    /**
     * ダッシュボードに表示するか
     */
    visible: boolean;

    navs: ProductNav[];
};

/**
 * プロダクトナビ
 */
type ProductNav = {
    /**
     * ラベル
     */
    label: string;

    /**
     * アイコン
     */
    icon: string;

    /**
     * パス
     */
    path: string;
};
