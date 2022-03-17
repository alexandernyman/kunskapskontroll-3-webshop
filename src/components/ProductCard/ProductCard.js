import React from 'react'
import {Link} from 'react-router-dom'
import useStyles from "./styles";

function ProductCard(props){
    const classes = useStyles();
    return (
        <div className={classes.body}>
            <Link to={`/products/${props.product.id}`} />
            <div className={classes.root}>
                <div 
                    style={{backgroundImage: `url("${props.product.image}")`}}
                    className={classes.image}
                />
                <h3 >
                    <Link to={`/products/${props.product.id}`} className={classes.titleName}>
                        { props.product.title }
                    </Link>    
                </h3>
                <div >
                    ${ props.product.price }
                </div>
                <Link className={classes.view}
                    to={`/products/${props.product.id}`}
                    
                >
                    View
                </Link>
            </div>
        </div>
    )
}

export default ProductCard