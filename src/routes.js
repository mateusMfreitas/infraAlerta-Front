import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./login/login";
import Register from "./register/register";
import Problem from "./problem/problem";
import ForgotPassword from "./forgotPassword/forgotPassword";
import Report from "./report/report";
import { ReportDetails } from "./reportDetails/reportDetails";
import UDashboard from "./user/uDashboard"
import ADashboard from "./admin/aDashboard"
import LandingPage from "./landingPage/landingPage";

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/" element={<LandingPage/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/problem" element={<Problem/>} />
                <Route path="/forgot-password" element={<ForgotPassword/>} />
                <Route path="/report" element={<Report/>} />
                <Route path="/report/:id" element={<ReportDetails/>} />
                <Route path="/uDashboard" element={<UDashboard/>}/>
                <Route path="/aDashboard" element={<ADashboard/>}/>

            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;