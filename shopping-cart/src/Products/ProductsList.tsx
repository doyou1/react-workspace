import React from "react";
import { useSelector } from "react-redux";
import { addToCart } from "../Cart/cart.slice";
import { RootState } from "../store";
import { useAppDispatch } from "../store.hooks";
import { Product, removeProduct, selectAllProducts, selectProductById, selectProductEntities, selectProductIds, selectTotalProducts } from "./products.slice";


const ProductsList: React.FC = ({}) => {
    
    const products = useSelector(selectAllProducts)
    const rpg = useSelector<RootState>(state => selectProductById(state, 'rpg'))
    const totalNumberOfProducts = useSelector(selectTotalProducts);
    const productsIds = useSelector(selectProductIds)
    const entities = useSelector(selectProductEntities)
    console.log(products)
    console.log(rpg)
    console.log(totalNumberOfProducts)
    console.log(productsIds)
    console.log(entities)


    const dispatch = useAppDispatch()

    const removeFromStore = (id:string) => {
        dispatch(removeProduct(id))
    }

    const addToCartHandler = (product: Product) => dispatch(addToCart(product))
    return (
        <div>
            <h2>게임리스트</h2>
            {products.map(product => {
                return (
                <div key={product.id}>
                    <span>{`${product.title} : ${product.price}`}</span>
                    <button onClick={() => addToCartHandler(product)}>Add To Cart</button>
                    <button onClick={() => removeFromStore(product.id)}>Remove from the store</button>
                </div>);
            })}
        </div>
    );
}

export default ProductsList;