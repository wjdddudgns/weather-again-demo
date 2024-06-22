import { Navigate, Outlet } from "react-router-dom";
import Nav from "../../components/Nav";

function CompleteLogin() {
    const CheckLogin = localStorage.getItem("LoginId");
    console.log(CheckLogin);
    return (
        (CheckLogin ? (<>
            <Nav></Nav>
            <Outlet />
        </>) : <Navigate to="/Login" />)
    )
}

export default CompleteLogin;