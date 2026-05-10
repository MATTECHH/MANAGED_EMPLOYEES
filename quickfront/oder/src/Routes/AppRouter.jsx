import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About.jsx";

export const AppRouter = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Home
                    />
                }
            />

            <Route path="/about" element={<About/>} />
        </Routes>
    );
};