const config = {
  "env": {
    "browser": true,
    "es6": true,
    "jest/globals": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react", "jest"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "rules": {
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": "off",
    "eqeqeq": "error",
    "no-trailing-spaces": "error",
    "object-curly-spacing": [
      "error", "always"
    ],
    "arrow-spacing": [
      "error", { "before": true, "after": true }
    ],
    "no-console": "error",
    "react/prop-types": 0
  }
}

module.exports = config
