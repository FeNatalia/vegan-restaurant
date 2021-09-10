import DessertPhoto from "../assets/pictures/menu/desserts.jpg"
import ProductCard from "./ProductCard"
import JSONFood from "../data/food.json"

export default function Desserts(){
    const DessertsList = JSONFood.filter((item) => item.category === "desserts").map((item) => <ProductCard key={item.id} item={item}/>)
    return(
        <div>
            <img className="content-header" src={DessertPhoto} alt="dessert"/>
            <h1>Desserts</h1>
            <p>We have a variety of desserts inspired by country side recipes. You can find desserts with wild berries or baked items just like your grandma makes. We think that the beauty is in the simplicity! Try and you will know what we mean.</p>
            {DessertsList}
        </div>
    )
}