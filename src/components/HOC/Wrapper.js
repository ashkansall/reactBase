// const Wrapper = (props) => {
//     return <div className={props.class}>
//             {props.children}
//     </div>
// }


// HOC REAL

const Wrapper = (WrappedComponent, className) => {
    return (props) => {
        console.log(props);
        return (
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        );
    };
};

export default Wrapper;