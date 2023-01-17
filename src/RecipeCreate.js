import React, { useState } from "react";

function RecipeCreate({createRecipe}) {

const initialRecipeState = {
  name: "",
  cuisine: "",
  photo: "",
  ingredients: "",
  preparation: "",
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

//added validation via required to ensure each field is filled in before creating a new recipe 
//added placeholders for each field

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
              placeholder="Name"
              required
              value={recipeData.name}
              onChange={handleChange}
              />
            </td>
            <td>
              <input
              id="cuisine"
              name="cuisine"
              type="text"
              placeholder="Cuisine"
              required
              value={recipeData.cuisine}
              onChange={handleChange}
              />
            </td>
            <td>
              <input 
              id="photo"
              name="photo"
              type="text"
              placeholder="URL"
              required
              value={recipeData.photo}
              onChange={handleChange}
              />
            </td>
            <td>
              <textarea
              id="ingredients"
              name="ingredients"
              placeholder="Ingredients"
              required
              value={recipeData.ingredients}
              onChange={handleChange}
              />
            </td>
            <td>
              <textarea
              id="preparation"
              name="preparation"
              placeholder="Preparation"
              required
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
