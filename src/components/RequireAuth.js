import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "./Hooks/useAuth";

const RequireAuth = () => {
    const {auth} = useAuth();
    const location = useLocation();

    return(
        auth.role === "admin" 
        ? <Outlet />
        : auth.username
            ? <Navigate to="/unauthorized" state={{from: location}} replace />
            : <Navigate to="/login" state={{from: location}} replace />
    );
}

export default RequireAuth;