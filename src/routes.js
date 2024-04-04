import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./login/login";
import Register from "./register/register";
import Problema from "./review/problema";
import ForgotPassword from "./forgotPassword/forgotPassword";

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/problema" element={<Problema/>} />
                <Route path="/forgot-password" element={<ForgotPassword/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;