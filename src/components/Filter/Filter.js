import { useState } from "react";
import { useProductsActions } from "../Providers/ProductsProvider";
import Select from 'react-select';
import styles from "./filter.module.css"
import SelectComponent from "../../common/Select/Select";
import SearchBar from "../../common/Search/Search";

// introduce array of objs

const filterOptions = [

    { value: "", label: "all" },
    { value: "XS", label: "XS" },
    { value: "S", label: "S" },
    { value: "M", label: "M" },
    { value: "L", label: "L" },
    { value: "XL", label: "XL" },
    { value: "XXL", label: "XXL" },
];


// sort by price

const sortOptions = [

    { value: "highest", label: "highest" },
    { value: "lowest", label: "lowest" },
];

const Filter = () => {

    const dispatch = useProductsActions();
    const [filter, setFilter] = useState("");

    // sort by price
    const [sort, setSort] = useState("");


    const filterHandler = (selectedOption) => {
        console.log(selectedOption);
        dispatch({ type: "filter", selectedOption: selectedOption })
        // sort by price
        dispatch({ type: "sort", selectedOption: sort })

        setFilter(selectedOption);
    }

        // sort by price

    const sortHandler = (selectedOption) => {
        console.log(selectedOption);
        dispatch({ type: "sort", selectedOption: selectedOption })
        setSort(selectedOption);
    }

    return ( 
        <section>
            <SearchBar filter={filter}/>
            <div className={styles.filter}>
            <p>filter products based on:</p>
            <SelectComponent 
                title="filter by size"
                value={filter} 
                onChange={filterHandler}
                options={filterOptions}
            />
            
            <SelectComponent 
            title="sort by price"
            value={sort} 
            onChange={sortHandler}
            options={sortOptions} 
            />
            </div>
                {/* <span>order by</span> */}
                {/* <select
                // move dispatch to a seperate function
                onChange={changeHandler}
                value={value}>

                    <option value="">All</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select> */}
                {/* <Select value={value} onChange={changeHandler} options={options} className={styles.select}/> */}
                
            {/* <div className={styles.selectContainer}>
                <span>sort by</span>
                <Select value={sort} onChange={sortHandler} options={sortOptions} className={styles.select}/>
            </div> */}
        </section>
     );
}
 
export default Filter;