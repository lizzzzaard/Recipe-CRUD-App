import React from "react";

// this function displays the recipeData and the newly inputed data into the app and displays the delete button
function RecipeRow ({recipe, deleteRecipe}) {
    return (
        <tr>
            <td>{recipe.name}</td>
            <td>{recipe.cuisine}</td>
            <td>
                <img alt={recipe.photo} src={recipe.photo} width="100px" height="100px"/>
            </td>
            <td className="content_td"><p>{(recipe.ingredients)}</p></td>
            <td className="content_td"><p>{(recipe.preparation)}</p></td>
            <td>
                <button name="delete" onClick={deleteRecipe}>Delete</button>
            </td>
        </tr>
    )

}

export default RecipeRow;
