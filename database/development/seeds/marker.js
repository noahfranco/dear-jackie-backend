
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, title: 'Testing seeds', date: '01-19-20', description: 'Testing seed data', longitude: '-0.152700', latitude: '51.517090'},
        {id: 2, title: 'rowValue2', date: 'rowValue1', description: 'rowValue1', longitude: 'rowValue1', latitude: 'rowValue1'},
        {id: 3, title: 'rowValue3', date: 'rowValue1', description: 'rowValue1',
        longitude: 'rowValue1', latitude: 'rowValue1'}
      ]);
    });
};