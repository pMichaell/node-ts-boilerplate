module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['xo'],
	overrides: [
		{
			extends: ['xo-typescript', 'prettier'],
			files: ['*.ts', '*.tsx'],
			plugins: ['prettier', 'simple-import-sort', 'unused-imports'],
			rules: {
				'prettier/prettier': 'error',
				'simple-import-sort/exports': 'error',
				'unused-imports/no-unused-imports': 'error',
				'simple-import-sort/imports': [
					'error',
					{
						groups: [
							[
								// Packages. `react` related packages come first.
								'^react',
								'^@?\\w',
								// Internal packages.
								'^(components|modules|utils)(/.*|$)',
								// Side effect imports.
								'^\\u0000',
								// Parent imports. Put `..` last.
								'^\\.\\.(?!/?$)',
								'^\\.\\./?$',
								// Other relative imports. Put same-folder imports and `.` last.
								'^\\./(?=.*/)(?!/?$)',
								'^\\.(?!/?$)',
								'^\\./?$',
								// Style imports.
								'^.+\\.s?css$',
							],
						],
					},
				],
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
};
