module.exports = {
	'env': {
		'browser': true,
		'es6': true,
		"node": true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
	],
	"parser": "babel-eslint",
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly',
	},
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 2018,
		'sourceType': 'module'
	},
	'plugins': [
		'react'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'windows'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		],
		"no-undefined": 0,
		"no-unused-vars":0,
		"react/prop-types":'off'
	}
}
