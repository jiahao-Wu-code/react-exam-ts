import React from 'react'
import { Outlet } from 'react-router'
import './index.scss'


export default function Layout() {
    return (
        <div className="layout">
            <div className="header-wrap">
                header
            </div>

            <div className="nav-wrap">
                nav
            </div>

            <div className="outlet-wrap">
                <Outlet />
            </div>

        </div>
    )
}
