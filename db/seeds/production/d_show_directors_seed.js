exports.seed = function(knex, Promise) {
  return knex('show_directors').del() // Deletes ALL existing entries
    .then(function () { // Inserts seed entries one by one in series
      return Promise.all([
        knex('show_directors').insert({
          director_id: 1,
          show_id: 1
        }),
        knex('show_directors').insert({
          director_id: 2,
          show_id: 4
        }),
        knex('show_directors').insert({
          director_id: 1,
          show_id: 3
        }),
        knex('show_directors').insert({
          director_id: 4,
          show_id: 3
        }),
        knex('show_directors').insert({
          director_id: 7,
          show_id: 8
        }),
        knex('show_directors').insert({
          director_id: 3,
          show_id: 8
        }),
        knex('show_directors').insert({
          director_id: 5,
          show_id: 2
        }),
        knex('show_directors').insert({
          director_id: 6,
          show_id: 7
        })
      ]);
    });
};
