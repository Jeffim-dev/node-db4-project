const db = require('../data/db-config')

function getRecipes() {
  return db('recipes')
}

function getShoppingList(id) {
  return db('recipes_ingredients as ri')
    .join('recipes as r', 'r.id', 'ri.recipe_id')
    .join('ingredients as i', 'i.id', 'ri.ingredient_id')
    .select('r.recipe_name', 'i.ingredient_name', 'i.quantity')  
    .where('r.id', id)   
}

function getInstructions(id) {
  return db('recipes_ingredients as ri')
    .join('recipes as r', 'r.id', 'ri.recipe_id')
    .join('ingredients as i', 'i.id', 'ri.ingredient_id')
    .join('steps as s', 's.id', 'i.step_id')
    .select('r.recipe_name', 'i.ingredient_name', 'i.quantity', 's.instruction')  
    .where('r.id', id)     
}


module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
}