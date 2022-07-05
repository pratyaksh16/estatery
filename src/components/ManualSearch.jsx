import {React,useState} from 'react'
import 'assets/styles/ManualSearch.css'
import {BiChevronDown,BiCalendar} from 'react-icons/bi'
import { priceRange,houseType } from '../assets/data/All_Properties'

function ManualSearch() {
  console.log("ManualSearch render")
  const [currPriceRange, setCurrPriceRange] = useState(priceRange[0])
  const [currHouseType, setCurrHouseType] = useState(houseType[0])
  const [isPriceDropdownActive, setIsPriceDropdownActive] = useState(false)
  const [isPropertyTypeDropdownActive, setIsPropertyTypeDropdownActive] = useState(false)

  const handleSearchSubmit = () => {
    console.log("Search button clicked")
  }

  return (
    <div className="manual-search">
      <div className="manual-search-container">
        <div className="location-box after-effect">
          <span className="location-box-heading">Location</span>
          <div className="location-box-content">New York, USA</div>
        </div>
        <div className="when-box after-effect">
          <span className="when-box-heading">When</span>
          <div className="when-box-content filter-dropdown">
            <span>Select Move-in Date</span>
            <BiCalendar 
              size={18} 
              fill={"rgb(111, 101, 232)"} 
            />
          </div>
        </div>
        <div className="price-box after-effect">
          <span className="price-box-heading">Price</span>     
          <div className="price-box-content filter-dropdown">
            <span>{currPriceRange.name}</span>
            <div className="down-arrow-container">
              <BiChevronDown 
                size={20} 
                fill={"rgb(111, 101, 232)"} 
                style={isPriceDropdownActive && {transform:"rotate(180deg)"}}
                onClick={()=>{isPriceDropdownActive ? setIsPriceDropdownActive(false) : setIsPriceDropdownActive(true)}}
              />
            </div>
          </div>
        </div>
        <div className="property-type-box after-effect">
          <span className="property-box-heading">Property Type</span>
          <div className="property-box-content filter-dropdown">
            <span>{currHouseType}</span>
            <div className="down-arrow-container">
              <BiChevronDown 
                size={20} 
                fill={"rgb(111, 101, 232)"}
                style={isPropertyTypeDropdownActive && {transform:"rotate(180deg)"}}
                onClick={()=>{isPropertyTypeDropdownActive ? setIsPropertyTypeDropdownActive(false) : setIsPropertyTypeDropdownActive(true)}}
              />
            </div>
          </div>
        </div>
        <button className="manual-search-button" onClick={()=>handleSearchSubmit()}>
            Search
        </button>
      </div>
    </div>
  )
}

export default ManualSearch