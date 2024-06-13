import { FaSearch, FaTimes } from "react-icons/fa";
import { useState, useRef } from "react";

import useItems from "../hooks/useItems";

function SearchBox() {
  const [input, setInput] = useState("");
  const inputRef = useRef();

  const { filteredItems } = useItems(input);

  const isInputFocused = () => {
    if (!inputRef.current || inputRef.current.value === "") return false;
    return document.activeElement === inputRef.current;
  };

  const clearInput = () => {
    setInput("");
  };

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
            <button onClick={() => clearInput()}>
              <FaTimes />
            </button>
          )}
          {!isInputFocused() && <FaSearch />}
        </header>
        <ul className="flex flex-col">
          {!filteredItems && <li className="p-2 text-center">Cargando...</li>}
          {filteredItems && filteredItems.length === 0 && (
            <li className="p-2 text-center">No matches</li>
          )}
          {filteredItems &&
            filteredItems.map((item) => {
              return (
                <li key={item.id} className="border p-2 text-center">
                  <strong>{item.name.slice(0, input?.length)}</strong>
                  {item.name.slice(input?.length, item.name.length)}
                </li>
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default SearchBox;
