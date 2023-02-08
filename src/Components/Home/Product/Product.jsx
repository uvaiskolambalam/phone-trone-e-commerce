import React from 'react'
import user from '../../../Assets/user.jpg'
import './Product.css'

const Product = () => {
    return (
        <>
            <div className='product'>
                <div className="product-image">
                    <img src={user} alt="" />
                </div>

                <div className="product-details">
                    <p className='product-Name'>Apple iPhone 7 plus 128 GB - Red color</p>
                    <span>⭐⭐⭐⭐</span>
                    <p className='Product-prize'>Rs:50000.0</p>
                    

                </div>
                <div className='Product-buttons'>
                    <div className="button">
                        <i className="bi bi-cart3" ></i>
                        <button>Cart</button>
                    </div>
                    <div className="button">
                        <i className="bi bi-heart" ></i>
                        <button>Wishlist</button>

                    </div>



                </div>


            </div>
            <div className='underLine'>
                <hr />
            </div>
           
        </>
    )
}

export default Product