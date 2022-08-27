import React, { useState, useContext, useReducer } from 'react';
import { productsData } from '../../db/productsData';
  
import _ from "lodash";

const ProductContext = React.createContext(); // state
const ProductContextDispatcher = React.createContext(); // setState


// useReducer
    const initialState = [
        {title: 'react.js', price: "29$", id: 1, quantity: 1},
        {title: 'js', price: "39$", id: 2, quantity: 2},
        {title: 'bootstarp', price: "49$", id: 3, quantity: 3},
    ];

    const reducer = (state, action) => {
        // console.log(state, action);
    
        switch (action.type) {

            case 'increment':
                {
                    const index = state.findIndex(item => item.id === action.id);
                    const product = {...state[index]};
                    product.quantity++;
                    const updatedProducts = [...state];
                    updatedProducts[index] = product;
                    return updatedProducts;
                }

            case 'decrement':
                {
                    const index = state.findIndex(item => item.id === action.id);
                    console.log(index);
                    const product = {...state[index]};
                    if(product.quantity === 1) {
                        const filterProducts = state.filter(p => p.id !== action.id);
                        return filterProducts;
                    }else {
                        const updatedProducts = [...state];
                        updatedProducts[index] = product;
                        product.quantity--; 
                        return updatedProducts;
                    }
                }

            case 'edit':
                {
                    const index = state.findIndex(item => item.id === action.id);
                    console.log(index);
                    const product = {...state[index]};
                    product.title = action.event.target.value;
                    const updatedProducts = [...state];
                    updatedProducts[index] = product;
                    return updatedProducts;
                }
            case 'remove':
                const filteredProducts = state.filter(p => p.id !== action.id);
                return filteredProducts;

            case "filter":
                {
                    // console.log(action.event.value);
                    // change to
                    const value = action.selectedOption.value;
                   
                    // console.log(value);
                    if(value === "") {
                        return productsData;
                    }else {
                        const updatedProducts = productsData.filter(p => p.availableSizes.indexOf(value) >= 0)
                        return updatedProducts;
                    }
                }
            case "sort":
                {
                    const value = action.selectedOption.value;
                    const products = [...state];
                    if (value === "lowest") {
                        // const sorttedProducts = products.sort((a, b) => {
                        //     if (a.price < b.price) {
                        //         return 1;
                        //     }
                        //     if (a.price > b.price) {
                        //         return -1;
                        //     }
                        //     return 0;
                        // })

                        // using lodash
                        return _.orderBy(products, ['price'], ['asc']);
                    }else {
                        // using lodash
                        return _.orderBy(products, ['price'], ['desc']);
                        // const sorttedProducts = products.sort((a, b) => {
                        //     if (a.price > b.price) {
                        //         return 1;
                        //     }
                        //     if (a.price < b.price) {
                        //         return -1;
                        //     }
                        //     return 0;
                        // })
                        // return sorttedProducts;
                    }
                }
            case "search":
                {
                    const value = action.event.target.value;
                    
                    if (value === "") {
                        return state;
                    }else {
                        const filteredProducts = state.filter((p) => 
                            p.title.toLowerCase().includes(value.toLowerCase())
                        );
                        return filteredProducts;
                    }
                }   

            default:
                return state;
        }
    }

const ProductsProvider = ({children}) => {
    // const [count, setCount] = useState(4);
    // const [product, setProducts] = useState([

    //     {title: 'react.js', price: "29$", id: 1, quantity: 1},
    //     {title: 'js', price: "39$", id: 2, quantity: 2},
    //     {title: 'bootstarp', price: "49$", id: 3, quantity: 3},
    // ]);

    //use useReducer instead of useState (up)

    const [product, dispatch] = useReducer(reducer, productsData);


    return ( 
        <ProductContext.Provider value={product}>
            <ProductContextDispatcher.Provider value={dispatch}>
                {children}
            </ProductContextDispatcher.Provider>
        </ProductContext.Provider>
     );
}
 
export default ProductsProvider;

export const useProducts = () => {
 return useContext(ProductContext);
}

export const useProductsActions = () => {

// const setProducts = useContext(ProductContextDispatcher);
// const products = useContext(ProductContext);

// usereducer()

return useContext(ProductContextDispatcher);

    // const removeHandler = (id) => {

    //     console.log('clicked', id);
    //     const filteredProducts = products.filter(p => p.id !== id);
    //     setProducts(filteredProducts);
    // }

    // const onIncrementHandler = (id) => {
    // // console.log('increment clicked', id);

    // // 1.id => ok
    // // 1.index

    // const index = products.findIndex(item => item.id === id);
    // console.log(index);

    // // 3. clone the selected index and update the quantity
    // const product = {...products[index]};
    // product.quantity++;
    // // update producs
    // const updatedProducts = [...products];
    // updatedProducts[index] = product;
    // setProducts(updatedProducts)
    // //    const products = [...this.state.products];
    // //    const selectedItem = products.find(p => p.id === id);
    // //    selectedItem.quantity++; 
    // //    console.log(this.state.products[0]);
    // //    this.setState({products: products});
    // }
    // const onDecrementHandler = (id) => {
    // // 1.id => ok
    // // 1.index

    // const index = products.findIndex(item => item.id === id);
    // console.log(index);

    // // 3. clone the selected index and update the quantity
    // const product = {...products[index]};

    // if(product.quantity === 1) {
        
    //     const filterProducts = products.filter(p => p.id !== id);
    //     setProducts(filterProducts)        
    // }else {
    //     const updatedProducts = [...products];
    //     updatedProducts[index] = product;
    //     product.quantity--; 
    //     setProducts(updatedProducts)
        
    // }
    // }

    // const changeHandler = (event, id) => {
    // // 1.id => ok
    // // 1.index

    // const index = products.findIndex(item => item.id === id);
    // console.log(index);

    // // 3. clone the selected index and update the quantity
    // const product = {...products[index]};
    // product.title = event.target.value;

    // const updatedProducts = [...products];
    // updatedProducts[index] = product;
    // setProducts(updatedProducts)
    // }
    // because we r using usereducer, we dont need tp return these functions

    // return {removeHandler, onIncrementHandler, onDecrementHandler, changeHandler};
}

