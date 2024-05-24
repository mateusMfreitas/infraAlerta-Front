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

const ProtectedProblem = withAuth(Problem);
const ProtectedReport = withAuth(Report);
const ProtectedReportDetails = withAuth(ReportDetails);
const ProtectedUDashboard = withAuth(UDashboard);
const ProtectedADashboard = withAuth(ADashboard);
const ProtectedGraphics = withAuth(Graphics);


function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
            <Route path="/login" element={<Login/>} />
                <Route path="/" element={<LandingPage/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/problem" element={<ProtectedProblem/>} />
                <Route path="/forgot-password" element={<ForgotPassword/>} />
                <Route path="/report" element={<ProtectedReport/>} />
                <Route path="/report/:id" element={<ProtectedReportDetails/>} />
                <Route path="/uDashboard" element={<ProtectedUDashboard/>} />
                <Route path="/aDashboard" element={<ProtectedADashboard/>} />
                <Route path="/graphics" element={<ProtectedGraphics/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;