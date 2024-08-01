import antfu from '@antfu/eslint-config'

export default antfu({
    type: 'lib',
    stylistic: {
        indent: 4,
    },
}, {
    rules: {
        'no-console': ['off'],
        'semi': ['error', 'always'],
    },
})
