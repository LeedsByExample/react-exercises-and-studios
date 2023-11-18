import React from 'react';
import styles from './Description.module.css';

function RecipeAuthor() {
    let authorLink = "https://joyfoodsunshine.com/the-most-amazing-chocolate-chip-cookies/";
    let authorPhoto = "https://joyfoodsunshine.com/wp-content/uploads/2023/10/JFS-about-photo-square.jpg";
    let authorName = "Laura"
    return (
        <div className={styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt="Cookie Recipe Author Laura" className={styles.imageUpdates}/>
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Joy Food Sunshine</a>
            </div>
        </div>
    );
}

class RecipeDescription extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>The Best Chocolate Chip Cookies</h1>
                    <p>Simple, no-frills take on a delectable classic. Perfect for beginners.</p>
                </div>
                <RecipeAuthor />
            </div>
        )
    }
}

export default RecipeDescription;
