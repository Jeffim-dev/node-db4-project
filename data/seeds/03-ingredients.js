
exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
        {ingredient_name: 'Ingredient A', quantity: 1.5, step_id: 1},
        {ingredient_name: 'Ingredient B', quantity: 2.5, step_id: 2},
        {ingredient_name: 'Ingredient C', quantity: 1, step_id: 3},
  ])
};

