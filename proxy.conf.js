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
    {
        context: ["/reminder/api"],
        target: "http://localhost:8083",
        pathRewrite: { "^/reminder/api": "/api" },
        secure: false,
    },
];
