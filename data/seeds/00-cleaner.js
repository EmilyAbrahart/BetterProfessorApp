const cleaner = require('knex-cleaner');

exports.seed = function(knex) {
	return knex('messages')
		.truncate()
		.then(() => {
			return knex('projects')
				.truncate()
				.then(() => {
					return knex('students')
						.truncate()
						.then(() => {
							return cleaner.clean(knex, {
								mode: 'truncate',
								restartIdentity: true,
								ignoreTables: ['knex_migrations', 'knex_migrations_lock']
							});
						});
				});
		});
};
