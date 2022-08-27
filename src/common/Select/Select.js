import styles from "./select.module.css";
import Select from "react-select";

// ...rest operators

// const SelectComponent = ({value, onChange, options, title}) => {
// using rest parameters:
const SelectComponent = ({title, ...rest}) => {
    console.log(rest);
    return ( 
        <div className={styles.selectContainer}>
            <span>{title}</span>
            <Select 
            // value={value} 
            // onChange={onChange} 
            // options={options} 
            // using rest parameters:
            {...rest}
            className={styles.select}
            />
        </div>
     );
}
 
export default SelectComponent;