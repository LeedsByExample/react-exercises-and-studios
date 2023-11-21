import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://natashaskitchen.com/ukrainian-aspic-recipe-kholodets/";
   let authorPhoto = "https://natashaskitchen.com/wp-content/uploads/2023/02/NK-Head-Red-Shirt-small.png";
   let authorName = "Natasha";

   return (
      <div>
         <img src={authorPhoto} alt = "Author Natasha Photo" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}>Natasha's Website</a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["2 lb pork legs", "8 large chicken drumsticks", "2 medium onions", "1 large carrot", "1 stick of celery"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Ukrainian Aspic Recipe (Kholodets)</h1>
            <p>Slavic meat jelly recipe: also known in the States as "aspic", or "an affront to God", depending on the region.</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://natashaskitchen.com/wp-content/uploads/2013/03/Ukrainian-Aspic-Recipe-4-768x1152.jpg" alt="Ukrainian Kholodets (Aspic)" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}

