import DrinksPhoto from "../assets/pictures/menu/drinks.jpg";
import ProductCard from "./ProductCard";
import JSONFood from "../data/food.json";

export default function Drinks(){
    const DrinksList = JSONFood.filter((item) => item.category === "drinks").map((item) => <ProductCard key={item.id} item={item}/>)
    return(
        <div>
            <img className="content-header" src={DrinksPhoto} alt="drinks"/>
            <h1>Drinks</h1>
            <p>Here you can find a drink for any occasion. Thirsty? Try our house soda. Need some kick? A home brew will help you. Feeling anxiuos? Handpicked herb tea is there for you. Into fruits? Fresh smoothies are perfect.</p>
            {DrinksList}
        </div>
    )
}