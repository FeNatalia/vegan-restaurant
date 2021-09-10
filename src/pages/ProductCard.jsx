import { Link } from "react-router-dom";

export default function ProductCard( { item }){
    const { id, photo, title, description } = item;
    const photoObject = require(`../assets/pictures/menu/${photo}`);
    const photoURL = photoObject.default;

    return(
        <div className="product-preview">
            <img src={photoURL} alt={title}/>
            <h3>{title}</h3>
            <p>{description}</p>
            <Link to={`/${id}`}><button> View product</button></Link>
        </div>
    )
}