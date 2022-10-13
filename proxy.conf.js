module.exports = [
    {
        context: ["/iam/api"],
        target: "http://localhost:8080",
        pathRewrite: { "^/iam/api": "/api" },
        secure: false,
    },
    {
        context: ["/purchase-request/api"],
        target: "http://localhost:8080",
        pathRewrite: { "^/purchase-request/api": "/api" },
        secure: false,
    },
];
