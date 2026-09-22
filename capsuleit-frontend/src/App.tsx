import { Route, Routes } from "react-router-dom"; 
import { DashboardLayout } from "./components/layout/DashboardLayout"; 
import Capsules from "./capsule/components/capsules"; 
import CreateCapsule from "./capsule/components/CreateCapsule"; 
import Home from "./components/Home";

export default function App() { 
    return ( 
        <Routes> <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Home />} /> 
            <Route path="create" element={<CreateCapsule />} /> 
            <Route path="capsules" element={<Capsules />} /> 
            </Route> 
        </Routes> 
    ); 
}