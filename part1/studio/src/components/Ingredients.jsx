import React from 'react';
import styles from './Ingredients.module.css';

function RecipeIngredients() {
    const ingredients = [
        "1 cup salted butter, softened",
        "1 cup granulated sugar",
        "2 large eggs",
        "3 cups all-purpose flour",
        "2 cups chocolate chips"
    ];
    return(
        <div>
            <h3>Recipe Ingredients</h3>
            <ul className = {styles.ingredientList}>
                <li>{ingredients[0]}</li>
                <li>{ingredients[1]}</li>
                <li>{ingredients[2]}</li>
                <li>{ingredients[3]}</li>
                <li>{ingredients[4]}</li>
            </ul>
        </div>
    );
}

export default RecipeIngredients;