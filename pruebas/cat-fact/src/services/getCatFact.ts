export default function getCatFact() {
  return fetch("https://catfact.ninja/fact").then((res) => res.json());
}
