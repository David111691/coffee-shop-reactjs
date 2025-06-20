import { useLoaderData } from "react-router";
import ProductItem from "../Components/ProductItem";

const PantryPage: React.FC = () => {
    const { items: pantryItems } = useLoaderData();

    // console.log(pantryItems);

    return (
        <div className="pantry">
            {pantryItems.map((item) => (
                <ProductItem imgLink={item.image} name={item.name} price={item.price} routeName={item.route_name} />
            ))}
        </div>
    );
};

export default PantryPage;
