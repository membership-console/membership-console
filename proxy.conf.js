module.exports = [
    {
        context: ["/iam/api"],
        target: "http://localhost:8080",
        pathRewrite: { "^/iam/api": "/api" },
        secure: false,
    },
];
