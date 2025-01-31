import { useState } from 'react';

export default function StatusChange () {

   const [notes, setNotes] = useState("")

   const [recipeStatus, setStatus] = useState(false)

   const handleChange = (event) => {
      setNotes(event.target.value)
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      setStatus(true);
   }

   return (
      <div style={{paddingTop: "50px"}}>
         <form onSubmit={handleSubmit}>
            <label>Have you tried this recipe? Add your notes here: <input type="text" value={notes} onChange={handleChange} />
            </label>
            <input type="submit" />
         </form>

         <p>My Recipe Notes: {notes}</p>

         <p>I {recipeStatus ? "have" : "have not"}!</p>
      </div>
   );
}
//Update the HTML in the return statement so that it uses the value of notes and displays a different message if recipeStatus is true. condition ? ifTrueExpression : ifFalseExpression
