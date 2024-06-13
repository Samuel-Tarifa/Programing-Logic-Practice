import { useState,useEffect,useCallback } from "react";

function useItems(input) {
  const [items, setItems] = useState();
  const [filteredItems, setFilteredItems] = useState();

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50&inc=name,id&nat=us")
      .then((res) => res.json())
      .then((data) => {
        const formattedArray = data.results.map((e) => {
          e.name = Object.values(e.name).join(" ");
          e.id = e.id.value;
          return e;
        });
        setItems(formattedArray);
      });
  }, []);

  const filterNames = useCallback(
    (input) => {
      if (!items) return [];
      const result = items.filter((item) => {
        return (
          item.name.slice(0, input.length).toLowerCase() === input.toLowerCase()
        );
      });
      return result;
    },
    [items]
  );

  useEffect(() => {
    setFilteredItems(filterNames(input));
  }, [input, filterNames]);

  return {filteredItems}
}

export default useItems