
exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments("id")
      tbl.text("recipe_name").notNullable().unique()
    })
    .createTable("steps", tbl => {
      tbl.increments("id")
      tbl.text("instruction").notNullable().unique()
    })
    .createTable("ingredients", tbl => {
      tbl.increments("id")
      tbl.text("ingredient_name").notNullable().unique()
      tbl.float("quantity").notNullable()
      tbl.integer("step_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("steps")
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    }) 
    .createTable("recipes_ingredients", tbl => {
      tbl.integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      tbl.integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      tbl.primary(['recipe_id', "ingredient_id"])
    })
};

exports.down = function(knex) {
  return knex.schema
          .dropTableIfExists("recipes_ingredients")
          .dropTableIfExists("ingredients")
          .dropTableIfExists("quantity")
          .dropTableIfExists("recipes")
  
};
