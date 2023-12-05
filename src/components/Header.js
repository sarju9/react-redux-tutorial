import React from 'react'
import "../styles/Home.css";
const Header = (props) => {
    console.log("header", props.cartData);
    return (
        <>
            <div className='add-to-cart'>
                <span className='cart-count'>{props.cartData.length}</span>
                <img src="https://cdn.shopify.com/app-store/listing_images/2b9bba2ab61edabc6d836f14f9377671/icon/CL-Lhc30lu8CEAE=.png" />
            </div>
        </>
    )
}

export default Header