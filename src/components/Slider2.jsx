import {Button} from './Button'
import './sliderDos.css'

export function SliderDos({src, title, description, price, className}) {
    return (
        <div className={`sliderDos ${className}`}>
            <div className="sliderDos-image">
                <img src={src} alt="" />
            </div>

            <div className="sliderDos-container">
                <h3 className="sliderDos-header">{title}</h3>
                <p>{description}</p>
                <strong>{`Desde $ - ${price}`}</strong>

                <div className="sliderDos-button">
                    <Button text="Conoce más" className="button-black"/>
                    <Button text="Comprar" className="button-white"/>
                </div>
            </div>
        </div>
    )
}