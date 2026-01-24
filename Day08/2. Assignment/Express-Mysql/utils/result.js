function createResult(error, data) {
    const result = {};

    if (error) {
        result.status = "Error";
        result.error = error.message;
    } else {
        result.status = "Success";
        result.data = data;
    }

    return result;
}

module.exports = {
    createResult
};
