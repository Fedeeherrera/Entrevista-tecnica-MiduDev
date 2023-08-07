import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [fact, setFact] = useState("");
  const [imageUrl, setImageUrl] = useState();
  const CAT_ENDPOINT_RANDOM_FACT = `https://catfact.ninja/fact`;

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);

        const firstWord = fact.split(" ")[0];

        fetch(
          `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
        )
          .then((res) => res.json())
          .then((response) => {
            const { url } = response;
            setImageUrl(`https://cataas.com${url}`)
          });
      });
  }, []);

  return (
    <>
      <h1>Prueba Tecnica React Midudev</h1>
      {fact ? <p>{fact}</p> : ""}
      {imageUrl ? <img className="imageGatos" src={imageUrl} alt="cat" /> : ""}
    </>
  );
}

export default App;
