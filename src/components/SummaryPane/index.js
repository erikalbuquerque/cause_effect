import React from "react";

import peoples from "./../../peoples";
import List from "./../List";
import Item from "./../Item";

function SummaryPane(){
  return(
    <List>
      {peoples.map((people) => <Item key={people.id} people={people}/>)}
    </List>
  )
}

export default SummaryPane;