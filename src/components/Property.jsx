import React from 'react'
import 'styles/Property.css'
function Property({property}) {
  return (
    <div className="property-container">
      <div>{property.name}</div>
    </div>
  )
}

export default Property