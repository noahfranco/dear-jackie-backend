
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, title: 'Seed Data Test', date: '02-2-20', description: 'Testing to see if seed data is working', longitude: 47.620422, latitude: -122.349358},
        {id: 2, colName: 'rowValue2',},
        {id: 3, colName: 'rowValue3', }
      ]);
    });
};
