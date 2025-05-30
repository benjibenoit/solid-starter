import { julr } from '@julr/tooling-configs/eslint';

export default julr(
	{
		jsonc: false,
		typescript: {
			forceDecorators: true,
			tsconfigPath: ['./tsconfig.json', './inertia/tsconfig.json'],
		},
	},
	{
		ignores: ['apps/api.test.local/.adonisjs/*', 'apps/api.test.local/types/db.ts'],
	},
	{
		rules: {
			// Not recommended to be turned on
			'@typescript-eslint/no-redeclare': 'off',
			// Common pattern in AdonisJS
			'@typescript-eslint/no-empty-object-type': 'off',
			'perfectionist/sort-imports': [
				'error',
				{
					groups: ['side-effect', 'builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'type'],
					internalPattern: ['^#.+', '^~/.+'],
					newlinesBetween: 'never',
					order: 'asc',
					type: 'alphabetical',
				},
			],
		},
	}
);
