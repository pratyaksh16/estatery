import {React,useEffect} from 'react'
import { useEditorStore } from 'store/EditorStore';
import { properties } from 'assets/data/All_Properties';
import 'styles/SearchResult.css'
import Property from './Property';

function SearchResult() {
  // console.log("SearchResult Render")
  const checkmarkSearchFilter = useEditorStore(store => store.checkmarkSearchFilter);
  const manualSearchFilter = useEditorStore(store => store.manualSearchFilter);
  // console.log(checkmarkSearchFilter,manualSearchFilter) //To be removed
  const filteredProperties = [...checkmarkSearchFilter,...manualSearchFilter]
  useEffect(() => {
    //Result of filtered properties are decided and stored inside filteredProperties which is an array of objects
    console.log(filteredProperties);
  })
  
  if(filteredProperties.length!==0){
    return (
      <div className="search-result-container">
        <div className="grid-container">
          {properties.map((property)=> <Property property={property} key={property.id}/>)
          }
        </div>
      </div>
    // <div>{[...checkmarkSearchFilter,...manualSearchFilter]}</div>
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