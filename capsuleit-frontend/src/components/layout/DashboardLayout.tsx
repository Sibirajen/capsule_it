import { Outlet, NavLink } from "react-router-dom";

export function DashboardLayout() {

    return (
        <div>
            <Outlet />  
        </div>
    );
}