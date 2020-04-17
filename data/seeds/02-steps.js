
exports.seed = function(knex, Promise) {
  return knex('steps').insert([
    {instruction: 'Instruction A'},
    {instruction: 'Instruction B'},
    {instruction: 'Instruction C'},
  ])
};
