import React, { Component } from 'react'
import ProductIem from './ProductIem';

const data = require("./data.json");

export default class ShoesApp extends Component {

    displayShoes = () => {
        return (
            <div className="row pt-4">
              {data.map((shoe, index) => (
                <div className="col-4" key={index}>
                  <ProductIem prod={shoe}/>
                </div>
              ))}
            </div>
          );
    }
    render() {
        return (  
            <div className='container mt-3'>
                <h3 className='text-center'>Shoes Shop</h3>
                {this.displayShoes()};
                
            </div>
            
        )
    }
}
