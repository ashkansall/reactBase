import { useProducts, useProductsActions } from '../../Providers/ProductsProvider';
import Product from '../Product';


// class ProductList extends Component {
//     componentDidUpdate(prevProps, prevState) {
//         console.log("productlist cdu");
        
//     }

     
//     render() {
//         console.log("productlist render");
//         const {products} = this.props;
        
//     }
// }
 

const ProductList = (props) => {
    
    const products = useProducts();
    // const {onChange, onDecrement, onIncrement, onRemove} = props;
    // const {removeHandler, onIncrementHandler, onDecrementHandler, changeHandler} = useProductsActions();

    // useReducer

    const dispatch = useProductsActions();

    const renderProduct = () => {

         if (products.length === 0) return <div>your cart is empty</div>;

             return products.map((product, index) => {
                return (
                    <Product product={product}
                     key={index}
                    // onDelete={() => removeHandler(product.id)}
                    // usereducer
                    onDelete={() => dispatch({ type: "remove", id: product.id })}
                    onIncrement={() => dispatch({ type: "increment", id: product.id })}
                    onDecrement={() => dispatch({ type: "decrement", id: product.id })}
                    onChange={(e) => dispatch({ type: "edit", id: product.id, event: e })}/>
                );
            })
     }

    return (

        <div>
            {!products.length && <div>go to shopping</div>}
            {renderProduct()}
        </div>
    );
}
 
export default ProductList;
