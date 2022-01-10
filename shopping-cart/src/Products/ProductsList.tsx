import React, { useState } from "react";

interface ProductsListProps {

}

const initialProducts = [
    {title: '롤', price: 15, id: 'aos'},
    {title: '로아', price: 60, id: 'rpg'},
    {title: '롤체', price: 10, id: 'chess'},
]

interface Product {
    title: string;
    price: number;
    id: string;
}

const ProductsList: React.FC<ProductsListProps> = ({}) => {
    
    const [products, setProducts] = useState<Product[]>(initialProducts)
    
    return (
        <div>
            <label>게임리스트</label>
            {products.map(product => {
                return (
                <div key={product.id}>
                    <span>{`${product.title} : ${product.price}`}</span>
                </div>);
            })}

            <button onClick={()=>{
                setProducts(
                    prevProducts =>[{
                        title: '프렌즈팝',
                        price: 5,
                        id: 'puzzle'        
                    }, ...prevProducts]
                )
            }}>Add Product</button>
        </div>
    );
}

export default ProductsList;