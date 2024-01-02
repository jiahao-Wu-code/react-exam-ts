

import Layout from "@/components/Layout";
import Login from "@/pages/Login";
import { Route, Routes } from "react-router-dom";
export default function RouterConfig() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/login" element={<Login />} />
            </Route>
        </Routes>
    )
}