// 🔍 Module Validator: Validation dyal l-inputs
export const Validator = {
    titleRegex: /^[a-zA-Z0-9\s]{5,50}$/,
    validateTitle: (title) => {
    const value = title.trim();
    // 1. Check Length (bin 5 w 50)
if (value.length < 5 || value.length > 50) {
    return {
        isValid: false,
        message: "Tittle khasso ikoun bin 5 w 50 characters"
    };
}

}
};