import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./login/login";
import Register from "./register/register";
import Problem from "./problem/problem";
import ForgotPassword from "./forgotPassword/forgotPassword";
import DashboardAdm from "./dashboardAdm/dashboardAdm";
import Dashboard from "./dashboard/dashboard";

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/problem" element={<Problem/>} />
                <Route path="/forgot-password" element={<ForgotPassword/>} />
                <Route path="/dashboardAdm" element={<DashboardAdm/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;