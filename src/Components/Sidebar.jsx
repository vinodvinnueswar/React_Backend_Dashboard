import React from 'react'

const Sidebar = ({
  showAddFirmHandler ,
  showAddProductsHandler ,
  showAllProductsHandler,
  showFirmTitle,

}) => {
  return (
    <div className="Sidebar-section">
        <div className="Content">
            <ul>
               { showFirmTitle ?  <li onClick={showAddFirmHandler}>Add firm</li> : "" }
                <li onClick={showAddProductsHandler}>Add Products</li>
                <li onClick={showAllProductsHandler}>All Products</li>
                <li>User Details</li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar