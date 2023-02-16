import { publish } from 'gh-pages';

publish(
	'build',
	{
		branch: 'gh-pages',
		repo: 'https://github.com/sotsgum/sotsgum.github.io.git',
		dotfiles: true
	},
	() => {
		console.log('Deployed successfully!');
	}
);
