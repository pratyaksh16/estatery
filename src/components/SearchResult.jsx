import React from 'react'
import { useEditorStore } from 'store/EditorStore';
import { properties,priceRange } from 'assets/data/All_Properties';
import 'styles/SearchResult.css'
import Property from './Property';

function SearchResult() {
  // console.log("SearchResult Render")
  const checkmarkSearchFilter = useEditorStore(store => store.checkmarkSearchFilter);
  const manualSearchFilter = useEditorStore(store => store.manualSearchFilter);

  let filteredProperties = [...properties]
  if(checkmarkSearchFilter.length!==0){
    if(checkmarkSearchFilter[0]==="Favourite"){   //Filtering favourite properties
      // console.log("Filtered Favourite")
      filteredProperties=filteredProperties.filter((property)=> property.isFav)
    }
    if(checkmarkSearchFilter[1]==="Popular"){     //Filtering popular properties
      // console.log("Filtered Popular");
      filteredProperties=filteredProperties.filter((property)=> property.isPopular)
    }
  }

  if(manualSearchFilter[0]!=="All"){      //Filtering price range
    // console.log("Filtered Range")
    let filterRange = priceRange.find((range)=>range.name===manualSearchFilter[0])
    // console.log(filterRange)
    filteredProperties=filteredProperties.filter((property)=> filterRange.begin<=property.cost && filterRange.end>=property.cost)
  }

  if(manualSearchFilter[1]!=="All"){      //Filtering house type
    // console.log("Filtered House Type")
    filteredProperties=filteredProperties.filter((property)=> property.house_type === manualSearchFilter[1])
  }
  if(filteredProperties.length!==0){
    let gridTemplateColumns = "";
    if(filteredProperties.length<=3){
      for(let i=1;i<=filteredProperties.length;++i)
        gridTemplateColumns = gridTemplateColumns.padEnd(filteredProperties.length*5,"auto ");
    }else{
      gridTemplateColumns = "auto auto auto";
    }
    return (
      <div className="search-result-container">
        <div className="grid-container" style={{gridTemplateColumns:gridTemplateColumns}}>
          {filteredProperties.map((property)=> <Property property={property} key={property.id}/>)}
        </div>
      </div>
    )
  }else{
    return(
      <div className="search-result-container">
        <div className="empty-search-container">
          <span>Search Result Empty</span>
        </div>
      </div>
    )
  }
}

export default SearchResult