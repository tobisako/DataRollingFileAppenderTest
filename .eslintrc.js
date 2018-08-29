module.exports = {
  "env": {
      "browser": true,
      "node": true,
      "es6": true
  },
  "extends": "eslint:recommended",
  "rules": {
      "indent": [
          "error",
          2,
          { "SwitchCase": 1 }
      ],
      "linebreak-style": [
          "error",
          "windows"
      ],
      "quotes": [
          "error",
          "double"
      ],
      "semi": [
          "error",
          "always"
      ],
      "no-unused-vars":[
        "error",
        {
          "vars": "all",
          "args": "none"
        }
      ],
      "no-console": [
        "off"
    ]
  }
};