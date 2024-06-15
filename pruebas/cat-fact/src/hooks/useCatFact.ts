import { useState,useEffect} from "react";
import getCatFact from "../services/getCatFact";

export default function useCatFact(){
  const [catFact,setCatFact]=useState('')
  useEffect(()=>{
    getCatFact().then(data=>setCatFact(data.fact))
  },[])
  return {catFact}
}