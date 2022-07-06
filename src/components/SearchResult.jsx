import {React,useEffect,useState} from 'react'
import { useEditorStore } from 'store/EditorStore';
import { properties } from 'assets/data/All_Properties';
import 'styles/SearchResult.css'

function SearchResult() {
  // console.log("SearchResult Render")
  const checkmarkSearchFilter = useEditorStore(store => store.checkmarkSearchFilter);
  const manualSearchFilter = useEditorStore(store => store.manualSearchFilter);
  const [filteredProperties, setFilteredProperties] = useState(properties)
  useEffect(() => {
    //Result of filtered properties are decided and stored inside filteredProperties which is an array of objects
    
  })
  
  return (
    <div className="search-result-container">
      <div className="search-result-grid">

      </div>
    </div>
    // <div>{[...checkmarkSearchFilter,...manualSearchFilter]}</div>
  )
}

export default SearchResult