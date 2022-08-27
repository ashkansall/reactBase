import { useProducts } from '../../Providers/ProductsProvider';
import styles from './navBar.module.css';




const NavBar = () => {

    const products = useProducts();
    const totalItems = products.filter((p) => p.quantity > 0).length;


    return ( 
        <header className={styles.navbar}>
            <h2>shopping</h2>
            <span>{totalItems}</span>
        </header>
     );
}
 
export default NavBar;