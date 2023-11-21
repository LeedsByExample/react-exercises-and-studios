import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
      {label: "Slavic Food", value: "Slavic Food"},
      {label: "Potluck Ideas For Your Least Favorite Friend Group", value: "Potluck Ideas For Your Least Favorite Friend Group"},
      {label: "Things That Shouldn't Be In Jelly", value: "Things That Shouldn't Be In Jelly"}
   ];

   const [boardName, setName] = useState('no boards yet!')

   const handleChange = (event) => {
      setName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boards.map((board) => (
            <option value={board.value}>{board.label}</option>
         ))}
      </select>
      <p>Saved to {boardName}!</p>
      </div>
   );
}

