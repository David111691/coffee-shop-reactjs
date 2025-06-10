import { useLoaderData } from "react-router";

const PantryPage: React.FC = () => {
    const { items: pantryItems } = useLoaderData();

    console.log(pantryItems);

    return <div></div>;
}

export default PantryPage;