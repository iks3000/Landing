const VALID_EMAIL_ENDINGS = ["gmail.com", "outlook.com", "yandex.ru"];

const validate = (email) => {
    const inputEnding = email.substring(
        email.indexOf("@") + 1
    );
    return VALID_EMAIL_ENDINGS.some((value) => value === inputEnding);
}

const validateAsync = async email => {
    const inputEnding = email.substring(email.indexOf("@") + 1);
    const valid = VALID_EMAIL_ENDINGS.some((value) => value === inputEnding);
    return await new Promise((resolve, reject) => {
        if (valid) {
            resolve(true);
        } else {
            reject(false);
        }
    })
        .then(resolve => {
            return resolve
        })
        .catch(reject => {
            return reject;
        });
}

const validateWithThrow = email => {
    const inputEnding = email.substring(email.indexOf("@") + 1);
    const valid = VALID_EMAIL_ENDINGS.some((value) => value === inputEnding);
    try {
        if (!valid) {
            throw 'email is invalid';
        }
        return true;
    } catch (error) {
        return error;
    }
}

const validateWithLog = email => {
    const inputEnding = email.substring(email.indexOf("@") + 1);
    const valid = VALID_EMAIL_ENDINGS.some((value) => value === inputEnding);
    console.log(valid);
    return valid;
}

module.exports = { validate, validateAsync, validateWithThrow, validateWithLog };