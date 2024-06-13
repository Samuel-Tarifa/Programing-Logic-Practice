const getItems=()=>{
  return fetch("https://randomuser.me/api/?results=50&inc=name,id&nat=us")
  .then((res) => res.json())
}

export default getItems