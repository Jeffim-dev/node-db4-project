
exports.seed = function(knex, Promise) {
  return knex('recipes').insert([
        {recipe_name: 'Recipe A'},
        {recipe_name: 'Recipe B'},
        {recipe_name: 'Recipe C'}
  ]);
};
