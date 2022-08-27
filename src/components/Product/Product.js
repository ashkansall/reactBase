// import './product.css';
// import { useState } from 'react';
import styles from './product.module.css';
import { BiTrash } from "react-icons/bi";
import { useEffect, useContext } from 'react';
import { UsreContext, websiteContext } from '../../app';


const Product = ({onChange, onDecrement, onIncrement, product, onDelete, click}) => {
    console.log("product render");

    useEffect(() => {
        console.log("product useeffect");
        return () => {
            // clean up => timer, interval
            console.log('product cwum');
        }
    }, []);

    // const [userName, setUserName] = useState("");
    // const changeHandler = (e) => {
    //     setUserName(e.target.value);
    // }
    
   const user =  useContext(UsreContext);
   const website =  useContext(websiteContext);
   console.log(user);
   console.log(website);


    return(
        <div className={styles.product} onClick={click}>
            {/* <input type='text' onChange={changeHandler} value={userName}/> */}

           <p>product name: {product.title} course</p>
           <p>product price: {product.price}</p>
           <span className={styles.value}>{product.quantity}</span>

           {/* <input type='text' onChange={onChange} value={product.title} className={styles.input}/> */}

          <button className={`${styles.button} ${styles.inc}`} onClick={onIncrement}>+</button>
          <button className={`${styles.button} ${product.quantity === 1 &&  styles.remove}`} onClick={onDecrement}>
               {product.quantity > 1 ? "-" : <BiTrash />}
          </button>
           
           <button className={styles.button} onClick={onDelete}>Delete</button>
        </div>
    );
};

export default Product;