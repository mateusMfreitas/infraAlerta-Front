import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./login/login";
import Register from "./register/register";
import Problem from "./problem/problem";
import ForgotPassword from "./forgotPassword/forgotPassword";

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/problem" element={<Problem/>} />
                <Route path="/forgot-password" element={<ForgotPassword/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;