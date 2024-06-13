import { FaSearch, FaTimes } from "react-icons/fa";
import { useState, useEffect, useCallback, useRef } from "react";


function SearchBox(){
  const [names, setNames] = useState();
  const [filteredNames, setFilteredNames] = useState();
  const [input, setInput] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50&inc=name,id&nat=us")
      .then((res) => res.json())
      .then((data) => {
        const formattedArray = data.results.map((e) => {
          e.name = Object.values(e.name).join(" ");
          e.id = e.id.value;
          return e;
        });
        setNames(formattedArray);
      });
  }, []);

  const filterNames = useCallback(
    (input) => {
      if (!names) return [];
      const result = names.filter((item) => {
        return (
          item.name.slice(0, input.length).toLowerCase() === input.toLowerCase()
        );
      });
      return result;
    },
    [names]
  );

  const isInputFocused = () => {
    if (!inputRef.current || inputRef.current.value === "") return false;
    return document.activeElement === inputRef.current;
  };

  const clearInput=()=>{
    setInput('')
  }

  useEffect(() => {
    setFilteredNames(filterNames(input));
  }, [input, filterNames]);
  return (
    <main className="min-h-[100vh] p-10">
    <section className="flex flex-col border-black border">
      <header className="flex items-center gap-4 w-full justify-between p-4 border">
        <input
          type="text"
          value={input}
          ref={inputRef}
          onChange={(e) => setInput(e.target.value)}
          className="bg-inherit grow rounded-full border border-black w-full py-1 px-4"
        />
        {isInputFocused() && (
          <button onClick={()=>clearInput()}>
            <FaTimes />
          </button>
        )}
        {!isInputFocused() && <FaSearch />}
      </header>
      <ul className="flex flex-col">
        {!filteredNames && <li className="p-2 text-center">Cargando...</li>}
        {filteredNames && filteredNames.length === 0 && (
          <li className="p-2 text-center">No matches</li>
        )}
        {filteredNames &&
          filteredNames.map((item) => {
            return (
              <li key={item.id} className="border p-2 text-center">
                <strong>{item.name.slice(0,input?.length)}</strong>
                {item.name.slice(input?.length,item.name.length)}
              </li>
            );
          })}
      </ul>
    </section>
  </main>
  )
}

export default SearchBox