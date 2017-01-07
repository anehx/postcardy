module.exports = {
  "parser": "babel-eslint",
  "root": true,
  "env": {
    "es6": true,
    "browser": true,
    "node": false,
    "amd": false
  },
  "ecmaFeatures": {
    "blockBindings": true,
    "modules": true,
    "module": true
  },
  "globals": {
    "visit": true,
    "andThen": true,
    "server": true,
    "triggerEvent": true,
    "fillIn": true,
    "click": true,
    "keyEvent": true
  },
  "rules": {
    "comma-dangle": [2, "never"],
    "eol-last": 2,
    "indent": [2, 2],
    "accessor-pairs": 2,
    "array-callback-return": 2,
    "arrow-spacing": 2,
    "constructor-super": 2,
    "no-this-before-super": 2,
    "no-var": 2,
    "object-shorthand": 2,
    "prefer-reflect": 2,
    "prefer-spread": 2,
    "prefer-template": 2,
    "no-alert": 2,
    "no-array-constructor": 2,
    "no-bitwise": 0,
    "no-caller": 2,
    "no-case-declarations": 2,
    "no-extra-bind": 2,
    "no-irregular-whitespace": 2,
    "no-cond-assign": 2,
    "no-console": 1,
    "no-constant-condition": 2,
    "no-control-regex": 2,
    "no-debugger": 2,
    "no-delete-var": 2,
    "no-div-regex": 2,
    "no-dupe-keys": 2,
    "no-dupe-args": 2,
    "no-duplicate-case": 2,
    "no-else-return": 2,
    "no-empty": 2,
    "no-empty-character-class": 2,
    "no-empty-pattern": 2,
    "no-eq-null": 2,
    "no-eval": 2,
    "no-ex-assign": 2,
    "no-extend-native": 2,
    "no-extra-boolean-cast": 2,
    "no-extra-parens": [2, "all", {"nestedBinaryExpressions": false}],
    "no-extra-semi": 2,
    "no-fallthrough": 2,
    "no-floating-decimal": 2,
    "no-func-assign": 2,
    "no-implied-eval": 2,
    "no-implicit-coercion": [2, {"boolean": false}],
    "no-implicit-globals": 2,
    "no-inner-declarations": 2,
    "no-invalid-regexp": 2,
    "no-invalid-this": 0,
    "no-iterator": 2,
    "no-labels": 2,
    "no-lone-blocks": 2,
    "no-lonely-if": 2,
    "no-loop-func": 2,
    "no-magic-numbers": 0,
    "no-mixed-requires": [0, false],
    "no-multi-str": 2,
    "no-multiple-empty-lines": 2,
    "no-multi-spaces": 0,
    "no-native-reassign": 2,
    "no-negated-in-lhs": 2,
    "no-nested-ternary": 2,
    "no-new": 2,
    "no-new-func": 2,
    "no-new-object": 2,
    "no-new-wrappers": 2,
    "no-obj-calls": 2,
    "no-octal": 2,
    "no-octal-escape": 2,
    "no-param-reassign": 2,
    "no-path-concat": 0,
    "no-plusplus": 0,
    "no-process-exit": 2,
    "no-proto": 2,
    "no-prototype-builtins": 2,
    "no-redeclare": 2,
    "no-regex-spaces": 2,
    "no-return-assign": 2,
    "no-script-url": 2,
    "no-self-compare": 2,
    "no-self-assign": 2,
    "no-sequences": 2,
    "no-shadow": 2,
    "no-shadow-restricted-names": 2,
    "no-spaced-func": 2,
    "no-sparse-arrays": 2,
    "no-sync": 0,
    "no-ternary": 0,
    "no-throw-literal": 2,
    "no-undef": 2,
    "no-undef-init": 2,
    "no-underscore-dangle": 0,
    "no-unexpected-multiline": 2,
    "no-unmodified-loop-condition": 2,
    "no-unreachable": 2,
    "no-unused-expressions": 0,
    "no-unused-vars": 0,
    "no-unneeded-ternary": 2,
    "no-unsafe-finally": 2,
    "no-use-before-define": 0,
    "no-useless-call": 2,
    "no-useless-concat": 2,
    "no-useless-escape": 2,
    "no-with": 2,
    "no-void": 0,
    "yoda": [2, "never"],
    "block-scoped-var": 0,
    "brace-style": [2, "stroustrup"],
    "camelcase": 2,
    "complexity": [2, 5],
    "consistent-return": 2,
    "consistent-this": [0, "that"],
    "curly": [2, "multi-line", "consistent"],
    "dot-notation": 2,
    "dot-location": [2, "property"],
    "default-case": 2,
    "eqeqeq": 2,
    "func-names": 0,
    "func-style": 0,
    "guard-for-in": 2,
    "max-depth": [1, 4],
    "max-len": [0, 80, 4],
    "max-nested-callbacks": [2, 3],
    "max-params": [2, 4],
    "max-statements": [0, 10],
    "new-cap": 2,
    "new-parens": 0,
    "one-var": 0,
    "quote-props": 0,
    "quotes": [2, "single"],
    "radix": 2,
    "semi": [2, "never"],
    "strict": 0,
    "sort-vars": 0,
    "key-spacing": 0,
    "computed-property-spacing": [ 2, "never" ],
    "object-curly-spacing": [ 2, "always" ],
    "array-bracket-spacing": [ 2, "always" ],
    "keyword-spacing": 2,
    "space-infix-ops": 2,
    "space-in-parens": [ 2, "never" ],
    "space-unary-ops": [2, {"words": true, "nonwords": false}],
    "space-before-blocks": 2,
    "use-isnan": 2,
    "valid-jsdoc": 1,
    "wrap-iife": 2,
    "wrap-regex": 0,
    "vars-on-top": 2,
    "valid-typeof": 2
  }
}
