import { useState, useEffect } from "react"
 
export function useFetchYugioh(url) {
  const [data, setData] = useState(null)
  //Fetch para buscar eventos proximos en Mexico
  const getCartas = async() => {
    await fetch(url)
      .then((response) => response.json())
      .then(function (datos){
        console.log(datos)
        var cartas = datos.data
        var lon = cartas.length;
        
        if (lon > 1) {
          var cartasm = cartas.slice(13100)
          console.log(cartasm)
          localStorage.setItem("cartas", JSON.stringify(cartasm))
          setData(cartasm)
        } else { 
          setData(cartas) 
        }
        
      })
      .catch((error) => {
        console.log(error)
        var cartas = JSON.parse(localStorage.getItem("cartas"))
        setData(cartas)
      })
  }

  useEffect( () => {
    getCartas()
  }, [url])

  return {data}
}

  