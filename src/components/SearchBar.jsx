

export default function SearchBar({query,setQuery}) {
  
  return (
    <div>

       <input type="text"
        placeholder="Search by color..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="border border-black focus:outline-none rounded-2xl  m-3 py-1 px-2"/>

      </div>
  )
}

