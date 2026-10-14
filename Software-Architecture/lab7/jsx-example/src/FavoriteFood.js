const FavoriteFoods = () => {
const foods = ["Pizza", "Sushi", "Burger"];
return (
<div>
<h1>My favorite foods:</h1>
<ul>
{foods.map((food, index) => (
<li key={index}>{food}</li>
))}
</ul>
</div>
);
};
export default FavoriteFoods;