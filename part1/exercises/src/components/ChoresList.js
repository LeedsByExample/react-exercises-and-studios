import React from 'react';
import classes from './ChoresList.module.css';

class ChoresList extends React.Component {
   render() {
      const chores = ["Clean room", "Wash dishes", "Do laundry"];
      return (
      <div>
         <h3 className = {classes.choresHeading}>Chores List</h3>
         <ul>
            <li className={classes.choresText}>{chores[0]}</li>
            <li className={classes.choresText}>{chores[1]}</li>
            <li className={classes.choresText}>{chores[2]}</li>
         </ul>
      </div>
      );
   }
}

export default ChoresList;

// export default function ChoresList () {
//    return <p>No content is here!</p>;
// }
