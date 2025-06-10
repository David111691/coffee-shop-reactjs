async function getPantryItems() {
    try {
        let data = await fetch('pantry/pantry_items.json');
        data = await data.json();
        return data;
    }
    catch (err) {
        throw new Error(err);
    }
}

export default getPantryItems;