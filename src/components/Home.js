import React from 'react'
import { iphone } from '../services/Constant';
import "../styles/Home.css";

const Home = (props) => {
    console.log("home props", props);
    return (
        <>
            <h1>Home Component</h1>
            <div className='cart-wrapper'>
                <div className='img-wrapper item'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRf7Ix0wBdZml5ru41k-ZIRIKZ4MuwoPEWfiQ-7PkSEWmS4hT6E9j87eCZSSvKpQebHm4&usqp=CAU" />
                </div>
                <div className='text-wrappe item'>
                    <span>
                        Iphone
                    </span><br />
                    <span>
                        Price : $1000.00;
                    </span>
                </div>
                <div className='btn-wrapper item'>
                    <button onClick={() => props.addToCartHandler({ price: 1000, name: 'samsung S23' })}>Add To Cart</button>
                    <button className='remove-btn' onClick={() => props.removeToCartHandler()}>Remove To Cart</button>
                </div>
            </div>
        </>
    )
}

export default Home