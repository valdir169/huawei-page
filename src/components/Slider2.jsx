import {Button} from './Button'
import './sliderDos.css'

export function SliderDos() {
    return (
        <div className="sliderDos">
            <div className="sliderDos-image">
                <img src="https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/homepage/new-homepage/new/nova-10-prokv.jpg" alt="" />
            </div>

            <div className="sliderDos-container">
                <h3 className="sliderDos-header">HUAWEI FreeBuds 5</h3>
                <p>Diseño curvo para un ajuste óptimo | Driver ultra magnético con graves poderosos | Hasta 30 hrs de reproducción de música</p>
                <strong>Desde $ - 550</strong>

                <div className="sliderDos-button">
                    <Button text="Conoce más" className="button-black"/>
                </div>
            </div>
        </div>
    )
}