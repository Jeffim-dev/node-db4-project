const express = require('express')

const recipes = require('./recipe-model');

const router = express.Router();

router.get('/', (req, res) => {
  recipes.getRecipes()
  .then(recipes => {
    res.json(recipes);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get recipes' });
  });
})

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  
  try {
  const recipe = await recipes.getShoppingList(id)
  res.json(recipe)
  } catch(err) {
    res.status(500).json({ message: 'Failed to get recipe' });
  };
});

router.get('/:id/steps', async (req, res) => {
  const { id } = req.params;
  
  try {
  const recipe = await recipes.getInstructions(id)
  res.json(recipe)
  } catch(err) {
    res.status(500).json({ message: 'Failed to get recipe' });
  };
});

module.exports = router