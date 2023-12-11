import nyxb from '@nyxb/eslint-config'

export default nyxb({
   rules: {
      'style/max-statements-per-line': 0,
      'vue/require-v-for-key': 0,
      'ts/no-use-before-define': 0,
      'nyxb/no-import-node-modules-by-path': 0,
      'jsdoc/require-returns-description': 0,
      'jsdoc/require-property-description': 0,
      'no-unused-vars': 0,
      'unused-imports/no-unused-vars': 0,
      'no-case-declarations': 0,
      'vue/no-unused-refs': 0,
      'new-cap': 0,
   },
})
