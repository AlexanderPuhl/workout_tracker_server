const pg = require('./pg');

const dropTables = async () => {
  await pg.query('DROP TABLE public.template');
  await pg.query('DROP TABLE public.set');
  await pg.query('DROP TABLE public.workout');
  await pg.query('DROP TABLE public.workout_log');
  await pg.query('DROP TABLE public.exercise');
  await pg.query('DROP TABLE public.user');
  await pg.query('DROP TABLE public.role');
  await pg.query('DROP TABLE public.knex_migrations_lock');
  await pg.query('DROP TABLE public.knex_migrations');
};

dropTables();
