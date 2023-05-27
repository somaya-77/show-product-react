import dataProduct from "../DataProduct";
import Product from "./Product";

function ProductsList() {
    const products = dataProduct.map((product) => {
        return(
            <Product key={product.id} product={product}/>
        )
    })
    return (
        <div className="card-list">
            {products}
        </div>
    )
}

export default ProductsList;