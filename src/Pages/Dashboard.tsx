import React, { useState } from 'react';
import { useAuth } from '../Auth/AuthContext';

const Dashboard: React.FC = () => {
    const { logout } = useAuth();

    const [formData, setFormData] = useState({
        image: '',
        price: '',
        name: '',
        route_name: '',
        description: '',
        weight: '',
        ingredients: '',
        sustainability: '',
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const product = {
            ...formData,
            price: Number(formData.price),
            weight: Number(formData.weight),
        };
    }

    return (
        <div className="dashboard">
            <h2>Welcome!</h2>
            <form className="dashboard__form" onSubmit={handleSubmit}>
                <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
                <input name="price" placeholder="Price" type="number" value={formData.price} onChange={handleChange} />
                <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                <input name="route_name" placeholder="Route Name" value={formData.route_name} onChange={handleChange} />
                <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
                <input name="weight" placeholder="Weight (g)" type="number" value={formData.weight} onChange={handleChange} />
                <input name="ingredients" placeholder="Ingredients" value={formData.ingredients} onChange={handleChange} />
                <input name="sustainability" placeholder="Sustainability" value={formData.sustainability} onChange={handleChange} />

                <button type="submit">Add Product</button>
            </form>

            <button onClick={logout}>Log out</button>
        </div>
    );
};

export default Dashboard;
