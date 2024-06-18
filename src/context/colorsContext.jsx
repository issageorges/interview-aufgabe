import { createContext,useState } from "react";
import axios from "axios";


export const ColorsContext = createContext()

export const ColorsProvider = ({children}) =>{
    
    const [allColors,setAllColors] = useState([])
    const [query,setQuery]= useState("")

    const fetchColors = async()=>{
        try {
          const response = await axios.get("https://geenen-it-systeme.de/api/colors")
          setAllColors(response.data)
          
        } catch (error) {
          console.error("error fetching data", error)
        }
      }

      return(
        <ColorsContext.Provider value={{ allColors, query, setQuery, fetchColors }}>
        {children}
        </ColorsContext.Provider>
      )
}