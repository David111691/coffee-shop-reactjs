import { useLoaderData } from "react-router";

const ProductItemPage: React.FC = () => {
  const { item: pantryItem } = useLoaderData();

  // console.log(pantryItem);

  return <div className="">
    {/* заголовок */}
    <h1>{pantryItem.name}</h1>
    {/* рейтинг и кол-во отзывов */}
    <div>
      <div></div>
      <span>N reviews</span>
    </div>
    {/* цена */}
    <p>${pantryItem.price}</p>
    {/* полоска */}
    <div></div>
    {/* кол-во */}
    <div></div>
    {/* добавить в корзину */}
    <button>Add to cart</button>
    {/* описание */}
    <p>{pantryItem.description}</p>
    {/* вес */}
    <span>{pantryItem.weight}</span>
    {/* ингредиенты */}
    <div>{pantryItem.ingredients}</div>
    {/* sustainability */}
    <div>{pantryItem.sustainability}</div>
  </div>;
};

export default ProductItemPage;
