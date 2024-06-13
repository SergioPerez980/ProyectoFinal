import './App.css'
import { useState } from 'react';
import { useFetchYugioh } from './useFetchYugioh';
import logo from './assets/logo_yugioh.svg'

function App() {

  const url1 = 'https://db.ygoprodeck.com/api/v7/cardinfo.php'

  const [url, setUrl] = useState(url1)

  function valorInput() {
    var input = document.getElementById('input-busqueda');

    // Verificar si el input es null o undefined
    if (input) {
        // Obtener el valor del input
        
        var valor = input.value;
  
        var url2 = `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${valor}`
        setUrl(url2)
    } else {
        alert('Inserta una nombre de carta correcto')
    }
    
  }

  const { data } = useFetchYugioh(url)

  return (
    <>
    <div className='encabezado'>
        <img src={logo} alt="" width={170} height={70} />         
        <div className='contenidoBuscador'>
          <img className='iconoBuscar' src='' alt="" />
          <input type="text" id='input-busqueda' name='busqueda' placeholder='Buscar por nombre de carta' />
          <button type='button' className='btnBuscar' onClick={valorInput}>Buscar</button>
        </div> 
    </div>

      <div className='contenidoPrincipal'>
        <>
          {data?.map((carta) => (
            
              <div key={carta.id} className='card'>
              <div className='front'>
                <div className="contentCard">  
                  <img src={carta.card_images[0].image_url_small} alt="" />

                  </div>
                </div>

              <div className='back'>
                <div className="contentBack">
                  <div>
                    <h2>Set Name</h2>
                    <p>{carta.card_sets[0].set_name}</p>
                  </div>
                  <div>
                    <h2>Set Rarity</h2>
                    <p>{carta.card_sets[0].set_rarity}</p>
                  </div>
                  
                </div>
              </div> 

            </div>

          ))
        }
        </>
      </div>
    </>
  )
}

export default App
