import axios from 'axios'
import './App.css'
import { useContext, useEffect } from 'react'
import ColorItem from './components/ColorItem'
import SearchBar from './components/SearchBar'
import { ColorsContext } from './context/colorsContext'

function App() {

  const { allColors, query, setQuery, fetchColors } = useContext(ColorsContext);


  useEffect(()=>{
    fetchColors()
  },[])

  const filteredColors = allColors.filter(color => {
    return color.name.toLowerCase().includes(query.toLowerCase());
  });

    return (
      <>
      <div className="p-5">
        <h1 className="text-3xl font-bold underline mb-5">
          Colors World
        </h1>
        <SearchBar query={query} setQuery={setQuery}/>
        <div className="flex flex-wrap gap-4">
          {filteredColors.map(color =>(
            <ColorItem key={color.name} color={color}/>
          ))}
        </div> 
      </div>
        

        
        
        </>
    )
}

export default App
