import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./login/login";
import Register from "./register/register";
import Problem from "./problem/problem";
import ForgotPassword from "./forgotPassword/forgotPassword";
import Report, { ReportDetails } from "./report/report";

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/problem" element={<Problem/>} />
                <Route path="/forgot-password" element={<ForgotPassword/>} />
                <Route path="/report" element={<Report/>} />
                <Route path="/report/:id" element={<ReportDetails/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;