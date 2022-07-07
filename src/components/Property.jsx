import React from 'react'
import {AiFillHeart} from 'react-icons/ai'
import {BiBed,BiBath} from 'react-icons/bi'
import {TbDimensions} from 'react-icons/tb'
import {HiSparkles} from 'react-icons/hi'
import 'styles/Property.css'

function Property({property}) {

  return (
    <div className="property-container">
      <div className="property-image-container" >
        <img src={property.img_src} alt={`${property.name} located ${property.address} at $${property.cost}`}/>
      </div>
      <div className="property-information-container">
        <div className="property-information">
          <div className="property-details">
            <div className="property-details-left">
              <span className="property-rate">${property.cost}<span className="light-text">/month</span></span>
              <span className='property-name'>{property.name}</span>
            </div>
            <div className="property-details-right">
              <AiFillHeart
                size={30}
                fill={property.isFav ? "rgb(111, 101, 232)":"transparent"} 
                strokeWidth={50} 
                stroke={"rgb(111, 101, 232)"}
              />
            </div>
          </div>
          <div className="property-address light-text">
            <span>{property.address}</span>
          </div>
          <div className="property-features">
            <div className="property-beds">
              <BiBed 
                fill={"rgb(111, 101, 232)"}
                size={20}
              />
              <span className="light-text">&nbsp;{property.noOfBeds} Beds</span>
            </div>
            <div className="property-bathrooms">
              <BiBath 
                fill={"rgb(111, 101, 232)"}
                size={20}
              />
              <span className="light-text">&nbsp;{property.noOfBathrooms} Bathrooms</span>
            </div>
            <div className="property-area">
              <TbDimensions 
                stroke={"rgb(111, 101, 232)"}
                size={20}
              />
              <span className="light-text">&nbsp;{property.dimensions}&#xb2;</span>
            </div>
          </div>
        </div>
      </div>
      {property.isPopular && 
        <div className="popular-property">
          <HiSparkles fill={"white"}/>
          <span className='light-text' style={{color:"whitesmoke",fontSize:"14px"}}>&nbsp;POPULAR</span>
        </div>
      }
    </div>
  )
}

export default Property