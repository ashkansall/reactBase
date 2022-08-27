import React, { Component, useState } from 'react';
// import CounterClass from './components/Product/ClassCounter';
// import HookArray from './components/Product/HookArray';
// import HookCounter from './components/Product/HookCounter';
// import HookObject from './components/Product/HookObject';
import ProductList from './components/Product/ProductList/ProductList';
import './App.css';
import NavBar from './components/Product/NavBar/NavBar';
import ClassCounter from './components/ClassCounter';
import FunctionalCounter from './components/FunctionalCounter';
import ClassTimer from './components/ClassTimer';
import FunctionalTimer from './components/FunctionalTimer';
import Wrapper from './components/HOC/Wrapper';
import ClickCounter from './components/hocExample/ClickCounter';
import HoverCounter from './components/hocExample/HoverCounter';
import ParentComp from './components/PureMemoComp/ParentComp';
import ClassRef from './components/ref/ClassRef';
import FunctionalRef from './components/ref/FunctionalRef';
import UseRefExample from './components/ref/UseRefExample';
import CounterProvider from './components/Context/CounterProvider';
import CounterOne from './components/Context/CounterOne';
import CountReducer from './components/Reducer/CountReducer';
import ProductsProvider from './components/Providers/ProductsProvider';
import Filter from './components/Filter/Filter';
import SearchBar from './common/Search/Search';

export const UsreContext = React.createContext();
export const websiteContext = React.createContext();

// class App extends Component{

//     constructor(props) {
//         super(props);
//         console.log("app.js constructor");
//     }

//     state = { 
//         products: [
//             {title: 'react.js', price: "29$", id: 1, quantity: 1},
//             {title: 'js', price: "39$", id: 2, quantity: 2},
//             {title: 'bootstarp', price: "49$", id: 3, quantity: 3},
//         ],
//         isShow: true
//         // count: 0,
//      };

//      removeHandler = (id) => {
//         console.log('clicked', id);
//        const filteredProducts = this.state.products.filter(p => p.id !== id);
//        this.setState({products: filteredProducts});
//     }

//     onIncrementHandler = (id) => {
//     // console.log('increment clicked', id);

//     // 1.id => ok
//     // 1.index

//     const index = this.state.products.findIndex(item => item.id === id);
//     console.log(index);

//     // 3. clone the selected index and update the quantity
//     const product = {...this.state.products[index]};
//     product.quantity++;

//     const products = [...this.state.products];
//     products[index] = product;
//     this.setState({products : products});
//     //    const products = [...this.state.products];
//     //    const selectedItem = products.find(p => p.id === id);
//     //    selectedItem.quantity++; 
//     //    console.log(this.state.products[0]);
//     //    this.setState({products: products});
//     }
//     onDecrementHandler = (id) => {
//      // 1.id => ok
//     // 1.index

//     const index = this.state.products.findIndex(item => item.id === id);
//     console.log(index);

//     // 3. clone the selected index and update the quantity
//     const product = {...this.state.products[index]};
    
//        if(product.quantity === 1) {
           
//           const filterProducts = this.state.products.filter(p => p.id !== id);
//           this.setState({products : filterProducts});

//        }else {
//            const products = [...this.state.products];
//            products[index] = product;
//            product.quantity--; 
//            this.setState({products: products});
//        }
//     }

//     changeHandler = (event, id) => {
//       // 1.id => ok
//     // 1.index

//     const index = this.state.products.findIndex(item => item.id === id);
//     console.log(index);

//     // 3. clone the selected index and update the quantity
//     const product = {...this.state.products[index]};
//     product.title = event.target.value;

//     const products = [...this.state.products];
//     products[index] = product;
//     this.setState({products : products});
//     }

//     // clickHandler = (newTitle) => {
//     //     console.log('price changed');
//     //     this.setState({
//     //         products: [
//     //             {title: "react.js", price: "80%"},
//     //             {title: newTitle, price: "10%"},
//     //             {title: "javascript", price: "20%"}
//     //         ],
//     //     });
//     // };
//     // constructor(props) {
//     //     super(props);
//     //     this.countHandler = this.countHandler.bind(this);
//     //     console.log("constructor", this);
//     // }

//     // countHandler(id) {
//     //     console.log('count clicked', id);
//     //     this.setState({count: this.state.count + 1})
//     // }


//     // componentDidMount() {
//     //     console.log("app.js cdm");
//     //     // ajax requests
//     // }

//     // componentDidUpdate(prevProps, prevState) {
//     //     console.log("app.js cdu");
//     //     console.log("app.js", prevState);
//     // }

//     // shouldComponentUpdate(nextprops, nextstate) {
//     //     return true;
//     // }
//     // ..................................................................

//     // how to use useContext
//     // 1. create context
//     // 2. export context
//     // 3. provider
//     // 4. useContext => consume !

    

//     render() {
//         console.log(this.props);
//         // console.log("app.js render");
//         return(
//             // <div className='container' id='title'>
//             <>
//             {/* <UseRefExample /> */}
//             {/* <FunctionalRef /> */}
//             {/* <ClassRef /> */}
//             {/* <ParentComp /> */}
//             {/* <ClickCounter name="ash"/>
//             <HoverCounter /> */}
//                 {/* <button onClick={() => this.setState({isShow: !this.state.isShow})}>
//                     {this.state.isShow ? 'hide' : 'show'}
//                 </button>
//                 {this.state.isShow && <FunctionalTimer />} */}
//                 {/* <ClassCounter /> */}
//                 {/* <FunctionalCounter /> */}
//                 {/* <button onClick={() => this.setState({count: this.state.count +1})}>count {this.state.count}</button> */}
//                 <websiteContext.Provider value={"fronhooks.com"}>
//                     <UsreContext.Provider value={"ashkan"}>
//                         <NavBar totalItems = {this.state.products.filter(p => p.quantity > 0).length}/>
//                         <ProductList products = {this.state.products}
//                         onRemove = {this.removeHandler}
//                         onIncrement = {this.onIncrementHandler}
//                         onChange = {this.changeHandler}
//                         onDecrement = {this.onDecrementHandler}
//                         /> 
//                     </UsreContext.Provider>
//                 </websiteContext.Provider>
//                 {/* <CounterProvider>
//                     <p>welcome to context</p>
//                     <CounterOne />
//                   <CountReducer />
//                 </CounterProvider> */}
//             </>
//             /* <button onClick={() => this.countHandler(2)} className='product'>counter : {this.state.count}</button> */
//             /* </div> */
//         );
//     }
// }

const App = () => {

    // const products = useProducts();
    // const setProducts = useProductsActions();
    //  چون داریم کانتسکت ایجاد می کنیم این استیت باید از اینجا برداشته شود

    // const [products, setProducts] = useState([
    //             {title: 'react.js', price: "29$", id: 1, quantity: 1},
    //             {title: 'js', price: "39$", id: 2, quantity: 2},
    //             {title: 'bootstarp', price: "49$", id: 3, quantity: 3},
    //         ])

        
            // handlers
            
            // در حال حاضر products آن دیفایند می باشد و باید فانکشن فیتر در نوبار برداتشه شود
    return ( 
        <>
            <ProductsProvider>
                <NavBar />
                <Filter />
                <ProductList
                // this products is also undefined
                   
                /> 
            </ProductsProvider>
        </>
     );
}
 

// const App = () => {
//     return(
//         <div className='container' id='title'>
//             <h1>shopping app</h1>
//             <p>product 1: book 1</p>
//             <Product name="react" price="99$"/>
//             <Product name="javascript" price="120$"/>
//             <Product name="webdesign" price="200$">
//                 <p>discount is 15%</p>
//             </Product>
//         </div>
        
//     );
// };

//function component

// const App = () => {
//     const [products, setProducts] = useState([
//         {title: "react.js", price: "80%"},
//         {title: "node.js", price: "10%"},
//         {title: "javascript", price: "20%"}
//     ]);
//     const clickHandler = () => {
//         setProducts([
//             {title: "react.js", price: "1%"},
//             {title: "node.js", price: "2%"},
//             {title: "javascript", price: "3%"}
//         ])
//     }

//     return ( 
//         <div className='container' id='title'>
//               <h1>shopping app</h1>
//               {products.map((product) => {
//                   return <Product name={product.title} price={product.price}/>;
//               })}
//                  <button onClick={clickHandler}>change price</button>
//         </div>
//      );
// }
// function App() {
//     return(
//         <div className='App'>
//             {/* <HookCounter /> */}
//             {/* <CounterClass /> */}
//             {/* <HookObject /> */}
//             <HookArray />
//         </div>
//     )
// }
 
export default Wrapper(App, 'container');


