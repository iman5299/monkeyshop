import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Login2 from "./pages/Login2.tsx"; // مسیر صفحه ثبت‌نام

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

            </Routes>
        </Router>
    );
}

// صفحه Home
function Home() {
    return (
        <div>
            <h2>Home Page</h2>
            <p>خوش اومدی به Monkey Shop 🐒</p>
        </div>
    );
}

export default App;
