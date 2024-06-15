import { useState, useEffect } from "react";
import getCatImg from "../services/getCatImg";

export default function useCatImg(fact: string) {
  const CAT_IMAGE_PREFIX = "https://cataas.com";
  const NUMBER_WORDS = 3;
  const [catImgId, setCatImgId] = useState();
  const words = fact ? fact.split(" ").slice(0, NUMBER_WORDS).join(" ") : "";

  useEffect(() => {
    if (!fact) return;
    getCatImg(words).then((data) => setCatImgId(data["_id"]));
  }, [words, fact]);

  const catImgUrl = catImgId
    ? `${CAT_IMAGE_PREFIX}/cat/${catImgId}/says/${words}`
    : null;

  return { catImgUrl };
}
