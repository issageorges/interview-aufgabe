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

  const mainText = "Colors Table"

    return (
      <>
      <div className="w-4/5 m-auto  p-5">
        <h1 className="text-5xl font-bold  mb-5">
          {mainText.split("").map((letter,index)=>(<span key={index} className=" text-red-500 hover:text-green-500 transition-colors duration-300 ">
            {letter}
          </span>))}
        </h1>
        <SearchBar query={query} setQuery={setQuery}/>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {filteredColors.map((color, index)=>(
        <ColorItem key={index} color={color} isLast={index === filteredColors.length -1}/>
          ))}
        </div> 
      </div>

        </>
    )
}

export default App
