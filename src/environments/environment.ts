export const environment = {
    production: false,
    IS_AUTHENTICATED_KEY: "Authenticated",

    // 各プロダクトAPIのルートURLを指定
    // proxy.conf.jsで各APIへのforward設定を定義する
    IAM_API_ROOT_URL: "/iam",
    PURCHASE_REQUEST_API_ROOT_URL: "/paymaster",
};
