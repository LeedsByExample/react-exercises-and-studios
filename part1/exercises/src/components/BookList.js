export default function BookList() {
   let pageTitle = "Interesting Title Here";
   let book1 = "https://acappellabooks.cdn.bibliopolis.com/pictures/299290.jpg?width=768&height=1000&fit=bounds&auto=webp&v=1685979993";
   let book2 = "https://i0.wp.com/efsunland.com/wp-content/uploads/2016/07/haroun-and-the-sea-of-stories_cover.jpg?fit=743%2C1159&ssl=1";
   let book3 = "https://m.media-amazon.com/images/I/81YCJahX5YL._AC_UF1000,1000_QL80_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Shantaram by Gregory David Roberts" />
         <img src={book2} alt="Haroun and the Sea of Stories by Salman Rushdie" />
         <img src={book3} alt="Perfume by Patrick Süskind" />
      </div>      
   );
}
