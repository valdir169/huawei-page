import  './slider.css'

export function Slider() {
    return (
        <div className="slider">
            
            <div className="slider-image">
                <img src="https://informeaereo.com/wp-content/uploads/2023/01/HUAWEI-nova-Y90.webp" alt="" />
            </div>

            <div className="slider-container">
                <h3 className='slider-header'>HUAWEI NOVA 11a</h3>
                <strong>Visión extraordinaria</strong>

                <div className='slider-button'>
                    <button className='button-know-more'>Conoce más</button>
                    <button className='slider-buy'>Comprar</button>
                </div>
            </div>
        </div>
    )
}