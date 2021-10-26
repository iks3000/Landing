module.exports = {
    "env": {
        "node": true,
        "browser": true,
        "es2021": true
    },
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
        indent: ["error", 4, { ignoredNodes: ["JSXElement *"] }],
    }
};
