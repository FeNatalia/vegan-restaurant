//Project files
import ProductCard from "../components/ProductCard";
import JSONFood from "../data/food.json";
import DishPhoto from "../assets/pictures/menu/dishes.jpg";

export default function Dishes() {
  //Constants
  const FoodList = JSONFood.filter(
    (item) => item.category === "dishes"
  ).map((item) => <ProductCard key={item.id} item={item} />);
  return (
    <div className="content">
      <div className="header-text">
        <img className="content-header" src={DishPhoto} alt="soup" />
        <h1>Dishes</h1>
        <p>
          All our main course dishes are plant based, picked carefully and we
          change the menu seasonally. We grow our own vegetables and they are
          ecological with no added chemicals. You will understand the difference
          between store bought veggies and homegrown ones by trying a meal from
          this section!
        </p>
      </div>
      <div className="content-list">{FoodList}</div>
    </div>
  );
}
