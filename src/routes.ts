import { createBrowserRouter } from "react-router";

import HomePage from "./Pages/HomePage";
import PantryPage from "./Pages/PantryPage";

import getPantryItems from "./data/PantryData";

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
]);

export default router;
