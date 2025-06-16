import { useAuth } from '../Auth/AuthContext';


const Dashboard: React.FC = () => {
    const { logout } = useAuth();

    return (
        <div>
            <h2>Добро пожаловать!</h2>
            <button onClick={logout}>Выйти</button>
        </div>
    );
};

export default Dashboard;