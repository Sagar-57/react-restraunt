import React from "react";

function MenuItem({nameofcategory}) {
  return (
    <div className="menuitem-component">
        
      <p>{nameofcategory}</p>
  
    </div>
  );
}

export default MenuItem;