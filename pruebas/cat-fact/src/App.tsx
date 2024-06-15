import "./App.css";
import useCatFact from "./hooks/useCatFact";
import useCatImg from "./hooks/useCatImg";

function App() {
  const { catFact: fact } = useCatFact();
  const { catImgUrl } = useCatImg(fact);

  return (
    <main className="flex flex-col items-center my-8 w-1/2 p-4">
      <h1 className="text-4xl font-bold">Cat Fact Prueba técnica React</h1>
      {!fact && <h3 className="text-pretty">Cargando fact...</h3>}
      {fact && <h3 className="text-pretty">Fact: {fact}</h3>}
      {catImgUrl && <img className="w-full" src={catImgUrl} alt={fact} />}
    </main>
  );
}

export default App;
