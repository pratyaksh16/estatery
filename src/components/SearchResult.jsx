import {React,useEffect,useState} from 'react'
import { useEditorStore } from 'store/EditorStore';
import { properties } from 'assets/data/All_Properties';
import 'styles/SearchResult.css'
import Property from './Property';

function SearchResult() {
  // console.log("SearchResult Render")
  const checkmarkSearchFilter = useEditorStore(store => store.checkmarkSearchFilter);
  const manualSearchFilter = useEditorStore(store => store.manualSearchFilter);
  console.log(checkmarkSearchFilter,manualSearchFilter) //To be removed
  const [filteredProperties, setFilteredProperties] = useState(properties)
  useEffect(() => {
    //Result of filtered properties are decided and stored inside filteredProperties which is an array of objects

  })
  if(false) setFilteredProperties(properties);  //To be removed
  
  if(filteredProperties.length!==0){
    return (
      <div className="search-result-container">
        <div className="grid-container">
          {properties.map((property)=>{
            return(
              <div className="grid-item" key={property.id}>
                <Property property={property}/>
              </div>
            )})
          }
        </div>
      </div>
    // <div>{[...checkmarkSearchFilter,...manualSearchFilter]}</div>
    )
  }else{
    return(
      <div className="search-result-container">
        <span>Search Result Empty</span>
      </div>
    )
  }
}

export default SearchResult