import {React,useState} from 'react'
import 'styles/ManualSearch.css'
import {BiChevronDown,BiCalendar} from 'react-icons/bi'
import { priceRangeList,houseTypeList } from 'assets/data/All_Properties'
import CustomDropdownMenu from 'components/CustomDropdownMenu'
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Box from '@mui/material/Box';
import { useEditorStore } from 'store/EditorStore';

function ManualSearch() {
  // console.log("ManualSearch render")
  const [currPriceRange, setCurrPriceRange] = useState(priceRangeList[0])
  const [currHouseType, setCurrHouseType] = useState(houseTypeList[0])
  const [isPriceDropdownActive, setIsPriceDropdownActive] = useState(false)
  const [isPropertyTypeDropdownActive, setIsPropertyTypeDropdownActive] = useState(false)
  const setState = useEditorStore(store => store.setState);

  const handleSearchSubmit = () => {
    // console.log("Search button clicked")
    setState('manualSearchFilter',[currPriceRange,currHouseType])
  }
  const handlePriceDropdownClickAway = ()=> {
    if(isPriceDropdownActive)
      setIsPriceDropdownActive(false);
  }
  const handlePropertyTypeDropdownClickAway = ()=> {
    if(isPropertyTypeDropdownActive)
    setIsPropertyTypeDropdownActive(false)
  }
  const changeCurrPriceRange = (str) => {
    setCurrPriceRange(str)
  }
  const changePriceDropdown = () => {
    isPriceDropdownActive ? setIsPriceDropdownActive(false) : setIsPriceDropdownActive(true)
  }

  const changeCurrHouseType = (str) => {
    setCurrHouseType(str)
  }
  const changePropertyTypeDropdown = () => {
    isPropertyTypeDropdownActive ? setIsPropertyTypeDropdownActive(false) : setIsPropertyTypeDropdownActive(true)
  }

  return (
    <div className="manual-search">
      <div className="manual-search-container">
        <div className="location-box after-effect">
          <span className="light-text">Location</span>
          <div className="location-box-content">New York, USA</div>
        </div>
        <div className="when-box after-effect">
          <span className="light-text">When</span>
          <div className="when-box-content filter-dropdown">
            <span>Select Move-in Date</span>
            <BiCalendar 
              size={18} 
              fill={"rgb(111, 101, 232)"} 
            />
          </div>
        </div>
        <div className="price-box after-effect">
          <span className="light-text">Price</span>     
          <div className="price-box-content filter-dropdown">
            <span>{currPriceRange}</span>
              <ClickAwayListener onClickAway={handlePriceDropdownClickAway}>
                <Box className="down-arrow-container">
                  <BiChevronDown 
                    size={20} 
                    fill={"rgb(111, 101, 232)"} 
                    style={isPriceDropdownActive && {transform:"rotate(180deg)"}}
                    onClick={changePriceDropdown}
                  />
                </Box>
              </ClickAwayListener>
            {isPriceDropdownActive && 
              <CustomDropdownMenu 
                dropdown_menu={priceRangeList}
                changeDropdown={changePriceDropdown}
                setOption={changeCurrPriceRange}
              />
            }
          </div>
        </div>
        <div className="property-type-box after-effect">
          <span className="light-text">Property Type</span>
          <div className="property-box-content filter-dropdown">
            <span>{currHouseType}</span>
            <ClickAwayListener onClickAway={handlePropertyTypeDropdownClickAway}>
              <Box className="down-arrow-container">
                <BiChevronDown 
                  size={20} 
                  fill={"rgb(111, 101, 232)"}
                  style={isPropertyTypeDropdownActive && {transform:"rotate(180deg)"}}
                  onClick={changePropertyTypeDropdown}
                />
              </Box>
            </ClickAwayListener>
            {isPropertyTypeDropdownActive && 
              <CustomDropdownMenu 
                dropdown_menu={houseTypeList}
                changeDropdown={changePropertyTypeDropdown}
                setOption={changeCurrHouseType}
              />
            }
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