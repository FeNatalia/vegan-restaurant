// Project files
import { Link } from "react-router-dom";
import JSONFood from "../data/food.json";
import Table from "../components/Table";

export default function Product({ match }) {
  // Constants
  const product = JSONFood[match.params.id - 1];
  const photoObject = require(`../assets/pictures/menu/${product.photo}`);
  const photoURL = photoObject.default;
  const Ingredients = product.ingredients.join(", ");

  return (
    <div className="content">
      <div className="header-text">
        <img className="content-header" src={photoURL} alt={product.title} />
        <h1>{product.title}</h1>
        <p>{product.description}</p>
      </div>
      <div className="content-list">
        <h3>Ingredients</h3>
        <p>{Ingredients}</p>
        <Table product={product} />
        <Link to={`/${product.category}`}>
          <button className="button-main">Go back</button>
        </Link>
      </div>
    </div>
  );
}
