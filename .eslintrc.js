module.exports = {
    extends: ["standard"],
    plugins: ["standard", "react"],
    rules: {
        "no-var": "error", // optional, recommended when using es6+
        "no-unused-vars": 1, // recommended
        "arrow-spacing": ["warn", { before: true, after: true }], // recommended
        indent: ["warn", 2],
        "comma-dangle": [
            "error",
            {
                objects: "only-multiline",
                arrays: "only-multiline",
                imports: "never",
                exports: "never",
                functions: "never",
            },
        ],

        // options to emulate prettier setup
        semi: ["warn", "never"],
        "max-len": ["warn", { code: 180 }],
        "template-curly-spacing": ["warn"],
        "arrow-parens": ["warn", "as-needed"],

        // standard.js
        "space-before-function-paren": [
            "warn",
            {
                named: "always",
                anonymous: "always",
                asyncArrow: "always",
            },
        ],

        // standard plugin - options
        "standard/object-curly-even-spacing": ["warn"],
        "standard/array-bracket-even-spacing": ["warn"],
        "standard/computed-property-even-spacing": ["warn"],
        "standard/no-callback-literal": ["error", ["cb", "callback"]],

        // react plugin - options
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
    },
    parser: "babel-eslint",
    parserOptions: {
        ecmaVersion: 8, // optional, recommended 6+
    },
}