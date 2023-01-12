import React, { useState } from "react";

function RecipeCreate({createRecipe}) {

const initialRecipeState = {
  name: "Name",
  cuisine: "Cuisine",
  photo: "URL",
  ingredients: "Ingredients",
  preparation: "Preparation",
}

const [recipeData, setRecipeData] = useState({ ...initialRecipeState });
const handleChange = ({ target }) => {
  setRecipeData({
    ...recipeData,
    [target.name]: target.value,
  });
};

const handleSubmit = (event) => {
  event.preventDefault();
  console.log("Submitted:", recipeData)
  createRecipe(recipeData)
  setRecipeData({...initialRecipeState})
}

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
              id="name"
              name="name"
              type="text"
              value={recipeData.name}
              onChange={handleChange}
              />
            </td>
            <td>
              <input
              id="cuisine"
              name="cuisine"
              type="text"
              value={recipeData.cuisine}
              onChange={handleChange}
              />
            </td>
            <td>
              <input 
              id="photo"
              name="photo"
              type="text"
              value={recipeData.photo}
              onChange={handleChange}
              />
            </td>
            <td>
              <textarea
              id="ingredients"
              name="ingredients"
              value={recipeData.ingredients}
              onChange={handleChange}
              />
            </td>
            <td>
              <textarea
              id="preparation"
              name="preparation"
              value={recipeData.preparation}
              onChange={handleChange}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
