exports.handler = async ({ test = "default", code = Math.floor(Math.random() * 9000) + 1000 } = {}) => {
    // TODO implement

    console.warn("Starting pil_lambda");

    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello from pil Lambda from GHA!',
            test,
            code
        }),
    };

    return response;
};
