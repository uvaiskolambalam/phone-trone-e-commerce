import React from 'react'
import './HomeMain.css'
import homeImage from '../../../Assets/home image.jpg'
import Product from '../Product/Product'
import Footter from '../Footter/Footter'
const HomeMain = () => {
    return (
        <div className='HomeMain'>
            <div className="HomeMain-homeImage">

                <img src={homeImage} alt="" />
            </div>
            <div className='HomeMain-image-text'>
                <p>Phone Trone Services are Avileble</p>
            </div>
            <div className="HomeMain-fetures">
                <div className='HomeMain-fetures-left'>
                <div className="feture">
                    <i class="bi bi-rocket-takeoff"></i>
                    <p><strong>Free Delivery</strong> <br /> For all oders over $99</p>

                </div>
                {/* <hr /> */}
                <div className="feture">
                    <i class="bi bi-arrow-repeat"></i>
                    <p><strong>90 Days Return</strong> <br /> If goods have problems</p>
                </div>
                </div>
                {/* <hr /> */}
                <div className='HomeMain-fetures-right'>
                <div className="feture">
                    <i class="bi bi-credit-card-2-back"></i>
                    <p><strong>Secure Payment</strong> <br /> 100% secure payment</p>

                </div>
                {/* <hr /> */}
                <div className="feture">
                    <i class="bi bi-chat"></i>
                        <p><strong>24/7 Support</strong> <br /> Dedicated support</p>
                        

                    </div>
                    
                </div>
            </div>
            <div className='HomeMain-products'>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                
            </div>
            <div className="footter">
                <Footter/>
            </div>


        </div>
    )
}

export default HomeMain