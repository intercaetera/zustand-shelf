import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginReact from 'eslint-plugin-react'
import xo from 'eslint-config-xo/browser'

export default [
	...xo,
	{ files: ['**/*.{js,mjs,cjs,jsx}'] },
	{ languageOptions: { globals: { ...globals.browser, ...globals.node } } },
	pluginJs.configs.recommended,
	pluginReact.configs.flat.recommended,
	{
		rules: {
			'react/react-in-jsx-scope': 'off',
			'@stylistic/semi': ['error', 'never'],
			'@stylistic/object-curly-spacing': ['error', 'always'],
		},
	},
]
