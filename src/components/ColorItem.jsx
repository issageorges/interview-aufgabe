export default function ColorItem({color})  {
    return(
        <div className="p-4 rounded shadow-lg text-white"
             style={{backgroundColor: color.hex }}>

            <p>{color.name}: {color.hex}</p>
            
        </div>
    )
}























































































