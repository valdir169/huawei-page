import { Products } from "./Products"
import { Slider } from "./components/Slider"
import { products } from './json/products.json'
import './App.css'

export default function App() {
  return (
    <div className='App'>
      <Slider />
      <Products products={products} />
    </div>
  )
}

