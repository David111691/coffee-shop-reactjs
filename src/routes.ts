import { createBrowserRouter } from "react-router";

import HomePage from "./Pages/HomePage";
import PantryPage from "./Pages/PantryPage";
import ItemPage from "./Pages/ItemPage";
import LoginPage from "./Pages/LoginPage";

import { getPantryItems, getPantryItem } from "./data/PantryData";
import Dashboard from "./Pages/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomePage,
    },
    {
        path: "/pantry",
        loader: async () => {
            return { items: await getPantryItems() };
        },
        Component: PantryPage,
    },
    {
        path: "/products/:name",
        loader: async ({ params }) => {
            const name = params.name;
            return { item: await getPantryItem(name) };
        },
        Component: ItemPage,
    },
    {
        path: "/login",
        Component: LoginPage,
    },
    {
        path: "/dashboard",
        Component: Dashboard
    }
]);

export default router;
