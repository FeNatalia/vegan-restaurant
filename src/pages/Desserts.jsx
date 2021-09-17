// Project files
import DessertPhoto from "../assets/pictures/menu/desserts.jpg";
import ProductCard from "../components/ProductCard";
import JSONFood from "../data/food.json";

export default function Desserts() {
  // List of desserts
  const DessertsList = JSONFood.filter(
    (item) => item.category === "desserts"
  ).map((item) => <ProductCard key={item.id} item={item} />);
  return (
    <div className="content">
      <img className="content-header" src={DessertPhoto} alt="dessert" />
      <div className="header-text">
        <h1>Desserts</h1>
        <p>
          We have a variety of desserts inspired by country side recipes. You
          can find desserts with wild berries or baked items just like your
          grandma makes. We think that the beauty is in the simplicity! Try and
          you will know what we mean.
        </p>
      </div>
      <div className="content-list">{DessertsList}</div>
    </div>
  );
}
