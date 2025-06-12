export async function getPantryItems() {
    try {
        let data = await fetch('/pantry/pantry_items.json');
        data = await data.json();
        return data;
    }
    catch (err) {
        throw new Error(err);
    }
}

export async function getPantryItem(name) {
    try {
        const response = await fetch('/pantry/pantry_items.json');
        const data = await response.json();

        console.log(data);
        const item = data.find(item => item.route_name === name);
        // console.log(item);
        return item;
    }
    catch (err) {
        throw new Error(err);
    }
}