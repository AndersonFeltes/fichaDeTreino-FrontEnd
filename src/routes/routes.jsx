import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages/login/login";
import { SignUp } from "../pages/signup/signUp";

export const MainRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/signup" element={<SignUp/>} />
            </Routes>
        </BrowserRouter>
    )
}