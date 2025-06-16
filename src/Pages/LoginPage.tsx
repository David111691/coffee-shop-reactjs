import { useAuth } from "../Auth/AuthContext";
import { useState } from "react";

const LoginPage: React.FC = () => {
    const { login, isLoggedIn } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login();
    };

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <input value={email} onChange={(e) => setEmail(e.target.value)} />
                <input value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Войти</button>
            </form>
        </div>
    );
};

export default LoginPage;
