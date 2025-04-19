import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import {lazy} from "react";
import "primereact/resources/themes/lara-light-cyan/theme.css";


const Register = lazy(() => import('./pages/register/Register.tsx'));
const Login = lazy(() => import('./pages/login/Login.tsx'));
const Login2 = lazy(() => import('./pages/login/Login2.tsx'));
function App() {

    return (
        <>
            <Router>
                <Routes>
                    {/*<Route path="/" element={<Home/>}/>*/}
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/login2" element={<Login2/>}/>

                </Routes>
            </Router>


        </>
    );
}

const Home = () => (<div>test</div>)
export default App;
