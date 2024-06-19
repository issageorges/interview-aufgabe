export default function ColorItem({color,isLast })  {
    return(
        <div className="p-4 rounded shadow-lg text-black"
             style={{backgroundColor: color.hex }}>

            <p className={isLast?"text-white":"text-black"}>{color.name}: {color.hex}</p>
            
        </div>
    )
}

