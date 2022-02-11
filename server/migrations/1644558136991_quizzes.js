/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('quizzes', {
        id: 'id',
        name: { type: 'varchar(100)', notNull: true },
        createdAt: {
          type: 'timestamp',
          notNull: true,
          default: pgm.func('current_timestamp'),
        },
        answers: 'text[][]'
    })
};

exports.down = pgm => {};
