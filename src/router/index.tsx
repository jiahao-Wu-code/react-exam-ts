
import Layout from "@/components/Layout";
import Login from "@/pages/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import { routersData } from "./config";

export default function RouterConfig() {
    return (
        <Routes>
            {/* 默认跳转登录页 */}
            <Route path="/" element={<Navigate to={'/login'}></Navigate>}></Route>
            <Route element={<Layout />}>
                <Route path={routersData.login.path} element={<Login />} />
            </Route>
        </Routes>
    )
}