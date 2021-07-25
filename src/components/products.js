import React from 'react'
import product from '../images/product.svg'
import service from '../images/service.svg'
import technology from '../images/technology.svg'
import '../styles/products.css'

function Products() {
    const list=[
        {
            img:product,
            title:"Our Product",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, nemo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ullam."
        },
        {
            img:service,
            title:"Our Service",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, nemo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ullam."
        },
        {
            img:technology,
            title:"Our Technology",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, nemo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ullam."
        }
    ]
    return (
        <div className="products" id="products">
            <h2>Product and Service</h2>
            <div className="cards-container">
            {list.map((element)=>(
                <div className="cards">
                    <img src={element.img} alt={element.title} />
                    <h3>{element.title}</h3>
                    <p>{element.description}</p>
                    <button>Read More</button>
                </div>
            ))}
        </div>
        </div>
        
    )
}

export default Products
