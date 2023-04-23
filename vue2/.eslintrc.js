/*
 * @Description: 文件内容描述
 * @Date: 2023-04-19 16:10:00
 * @LastEditors: 无言的对话
 * @LastEditTime: 2023-04-21 10:09:51
 * @FilePath: \vue2\.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    "no-unused-vars": "off",
    "no-extra-semi": "off",
    "no-undef": "off",
    "no-empty": "off",
    "no-const-assign": "off",
    "no-prototype-builtins": "off",
    "vue/require-valid-default-prop": "off",
    "no-constant-condition": "off",
    "vue/no-mutating-props": "off",
    "vue/no-unused-components": "off",
    "vue/return-in-computed-property": "off",
    "no-useless-escape": "off",
    "no-console": "off",
    "no-debugger": "off",
    "vue/no-parsing-error": "off",
    // 关闭驼峰命名规则
    'vue/multi-word-component-names': 0,
  }
}
