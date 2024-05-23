import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./login/login";
import Register from "./register/register";
import Problem from "./problem/problem";
import ForgotPassword from "./forgotPassword/forgotPassword";
import Report from "./report/report";
import { ReportDetails } from "./reportDetails/reportDetails";
import UDashboard from "./user/uDashboard"
import ADashboard from "./admin/aDashboard"
import Graphics from "./graphics/graphics";
import LandingPage from "./landingPage/landingPage";
import { withAuth } from "./auth/auth";

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/" element={<LandingPage/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/problem" element={withAuth(<Problem/>)} />
                <Route path="/forgot-password" element={<ForgotPassword/>} />
                <Route path="/report" element={withAuth(<Report/>)} />
                <Route path="/report/:id" element={withAuth(<ReportDetails/>)} />
                <Route path="/uDashboard" element={withAuth(<UDashboard/>)} />
                <Route path="/aDashboard" element={withAuth(<ADashboard/>)} />
                <Route path="/graphics" element={withAuth(<Graphics/>)}/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;