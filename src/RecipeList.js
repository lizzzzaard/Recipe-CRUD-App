import React from "react";
import RecipeRow from "./RecipeRow";

// this function displays the headers of the table and takes in the newly created component RecipeRow to display the recipes
function RecipeList({ recipes, deleteRecipe}) {

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Plate</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {recipes.map((recipe, index) => (
                <RecipeRow
                deleteRecipe={() => deleteRecipe(index)}
                key={index}
                recipe={recipe}
                />
              ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
