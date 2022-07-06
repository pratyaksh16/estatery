import React from 'react'
import 'styles/CustomDropdownMenu.css'

function CustomDropdownMenu({dropdown_menu,changeDropdown,setOption}) {
  return (
    <div className="custom-dropdown-menu">
      {dropdown_menu.map((menu) => {
        return (
            <div className="custom-dropdown-item" key={menu} onClick={()=>{changeDropdown();setOption(menu)}}>
                {menu}
            </div>
            )
        })}
    </div>
  )
}

export default CustomDropdownMenu