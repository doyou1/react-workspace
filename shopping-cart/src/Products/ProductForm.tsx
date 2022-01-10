import React from 'react';

interface ProductFormProps {

}

const ProductForm: React.FC<ProductFormProps> = ({}) => {
    return (
        <div>
            <h2>Add Game to The Store</h2>
            <form>
                <input type="text" placeholder='Game title' name='title'/>
                <input type="text" placeholder='Price' name='price'/>
                <input type="text" placeholder='Id' name='id'/>
                <button > Add Product </button>
            </form>
        </div>
    );
};

export default ProductForm;