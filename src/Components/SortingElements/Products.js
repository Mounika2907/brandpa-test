import React, {useState} from 'react';

import CardList from './CardList';

const Products = ({products, sortProducts, addToCart}) =>  {

    const [value, setValue] = useState('Select');

    const setList = (e) => {
        setValue(e.target.value);
        sortProducts(e.target.value);
    }
    
    return (
        <div className="products" style ={{    marginLeft: "-170px",}}>

            <div className="products-nav">
                <h3>Products</h3>
                <div className="sort-list" style ={{    marginRight: "370px",}}>
                    Sort by&nbsp;: &nbsp;
                    <select value={value} onChange={setList}>
                        <option value="Select">Select</option>
                        <option value="Highest to Lowest">Highest to Lowest</option>
                        <option value="Lowest to Highest">Lowest to Highest</option>
                        <option value="Less than Ten">Less than Ten</option>

                    </select>
                </div>
            </div>

            <CardList products={products} addToCart={addToCart} />
            
        </div>
    )
}

export default Products;
