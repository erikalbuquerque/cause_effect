import React from "react";

import "./styles.css";

function List({children}){
  return(
    <ul>
      {children}
    </ul>
  )
}
export default List;