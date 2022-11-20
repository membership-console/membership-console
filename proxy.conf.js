module.exports = [
    {
        context: ["/iam/api"],
        target: "http://localhost:8081",
        pathRewrite: { "^/iam/api": "/api" },
        secure: false,
    },
    {
        context: ["/paymaster/api"],
        target: "http://localhost:8082",
        pathRewrite: { "^/paymaster/api": "/api" },
        secure: false,
    },
];
