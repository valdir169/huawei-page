import { Products } from "./Products"
import { Slider } from "./components/Slider"
import { products } from './json/products.json'
import './App.css'
import { SliderDos } from "./components/Slider2"

export default function App() {
  return (
    <div className='App'>
      <Slider />
      <SliderDos />
      <Products products={products} />
    </div>
  )
}

