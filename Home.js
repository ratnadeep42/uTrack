import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            {/* <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/adlp/builder/BFF-V1-02-Start--af484eea-e58d-4921-9dd6-ab26b7dd6152._CB428137687_QL85_V1_.jpg" /> */}
            <img className="home__image" src="/udemy2.jpg"></img>
        {/* product id, title, price, image, image  */}
        <Product 
            id={12345} 
            title="The Lean Startup: How Constant Innovation creates"
            price= {3452}
            rating= {5}
            image=""
            />

            {/* Product */}
        
        </div>

    )
}

export default Home
