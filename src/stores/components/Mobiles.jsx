import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Import your cart context
import { mobileData } from '../data/mobiles';

const Mobiles = () => {
    const firstFiveImages = mobileData.slice(0, 5);
    const { addToCart } = useCart(); // Destructure addToCart from context

    const handleAddToCart = (item) => {
        addToCart(item); // Call the addToCart function
    };

    return (
        <>
            <div className="proTitle">
                <h2>Mobiles</h2>
            </div>
            <div className='proSection'>
                {firstFiveImages.map((item) => {
                    return (
                        <div className='imgBox' key={item.id}> {/* Use a unique key */}
                            <Link to={`/mobiles/${item.id}`}>
                                <img className='proImage' src={item.image} alt={item.name} />
                            </Link>
                            <div className="product-info">
                                <h3>{item.name}</h3> {/* Display the name of the product */}
                                <p>${item.price.toFixed(2)}</p> {/* Display the price */}
                                <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Mobiles;
