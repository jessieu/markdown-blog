function isValidId(id) {
    const digits = /^[0-9]+$/;
    return digits.test(id);
}

module.exports = {
    isValidId
}