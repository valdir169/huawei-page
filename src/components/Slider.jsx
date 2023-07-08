import { Button } from './Button.jsx'
import './slider.css'

export function Slider() {
    return (
        <div className="slider">

            <div className="slider-image">
                <div>
                    <img src="https://consumer.huawei.com/content/dam/huawei-cbg-site/latam/pe/mkt/homepage/new-homepage/phones/nova-y91.png" alt="" />
                </div>
            </div>

            <div className="slider-container">
                <h3 className='slider-header'>HUAWEI NOVA 11a</h3>
                <strong>Visión extraordinaria</strong>

                <div className='slider-button'>
                    <Button text="Conoce más" className="button-black" />
                    <Button text="Comprar"  className="button-white"/>
                </div>
            </div>
        </div>
    )
}