module.exports = [
    {
        context: ["/iam/api", "/paymaster/api", "/reminder/api"],
        target: "http://localhost:30000",
        secure: false,
    },
];
