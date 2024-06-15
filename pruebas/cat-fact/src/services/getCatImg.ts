export default function getCatImg(search: string) {
  return fetch(`https://cataas.com/cat/says/${search}?json=true`).then(
    (res) => res.json()
  );
}
