// NPM Package
import { Link } from "react-router-dom";

export default function ProductCard({ item }) {
  // Constants
  const { id, photo, title, description } = item;
  const photoObject = require(`../assets/pictures/menu/${photo}`);
  const photoURL = photoObject.default;

  return (
    <div className="product-preview">
      <div className="product-image">
        <img src={photoURL} alt={title} />
      </div>
      <div className="product-text">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={`/${id}`}>
          <button className="button-view">View details</button>
        </Link>
      </div>
    </div>
  );
}
