import { useAuth } from "../Auth/AuthContext";
import { useState } from "react";
import { Navigate } from "react-router";

const LoginPage: React.FC = () => {
    const { login, isLoggedIn } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login();
    };

    if (isLoggedIn) {
        return <Navigate to="/dashboard" replace />;
    }

    return (
        <div className="login">
            <form className="login__form" onSubmit={handleSubmit}>
                <input className="login__email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" />
                <input className="login__password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button className="login__button" type="submit">Log in</button>
            </form>
        </div>
    );
};

export default LoginPage;
