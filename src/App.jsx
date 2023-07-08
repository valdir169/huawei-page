import { Products } from "./Products"
import { Slider } from "./components/Slider"
import { products } from './json/products.json'
import './App.css'
import { SliderDos } from "./components/Slider2"

export default function App() {
  return (
    <div className='App'>
      <Slider />
      <SliderDos 
      src="https://consumer.huawei.com/content/dam/huawei-cbg-site/latam/pe/mkt/homepage/new-homepage/model-banner/freebuds5/freebuds-5.png"
      title="HUAWEI MatePad SE"
      description="Pantalla HUAWEI FullView 2K con confort ocular | Sonido envolvente optimizado por Histen 8.0 | Súper Dispositivo"
      price="749"
      />

      <SliderDos 
      src="https://consumer.huawei.com/content/dam/huawei-cbg-site/latam/cl/mkt/homepage/model-banner/watch-gt3-se/watch-gt3-se.png"
      title="HUAWEI WATCH GT 3 SE"
      description="Batería de 2 semanas de duración | Programa científico de entrenamiento | Diseño ultra ligero"
      price="599"
      className="sliderDos-reverse"
      />
      <SliderDos 
      src="https://consumer.huawei.com/content/dam/huawei-cbg-site/latam/pe/mkt/homepage/new-homepage/model-banner/matepad-se/matepad-se.png"
      title="HUAWEI MatePad SE"
      description="Diseño curvo para un ajuste óptimo | Driver ultra magnético con graves poderosos | Hasta 30 hrs de reproducción de música"
      price="499"
      />

      {/* <Products products={products} /> */}
    </div>
  )
}

