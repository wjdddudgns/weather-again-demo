import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav";

function CompleteLogin() {
    return (
        <>
            <Nav></Nav>
            <Outlet />
        </>
    )
}

export default CompleteLogin;