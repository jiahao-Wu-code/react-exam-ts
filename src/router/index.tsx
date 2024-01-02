import Login from "@/pages/Login";
import { Route, Routes } from "react-router-dom";
export default function RouterConfig() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}