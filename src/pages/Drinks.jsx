// Project files
import DrinksPhoto from "../assets/pictures/menu/drinks.jpg";
import ProductCard from "../components/ProductCard";
import JSONFood from "../data/food.json";

export default function Drinks() {
  // List of drinks
  const DrinksList = JSONFood.filter(
    (item) => item.category === "drinks"
  ).map((item) => <ProductCard key={item.id} item={item} />);
  return (
    <div className="content">
      <div className="header-text">
        <img className="content-header" src={DrinksPhoto} alt="drinks" />
        <h1>Drinks</h1>
        <p>
          Here you can find a drink for any occasion. Thirsty? Try our house
          soda. Need some kick? A home brew will help you. Feeling anxiuos?
          Handpicked herb tea is there for you. Into fruits? Fresh smoothies are
          perfect.
        </p>
      </div>
      <div className="content-list">{DrinksList}</div>
    </div>
  );
}
