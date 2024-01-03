import React from 'react'
import { Outlet } from 'react-router'
import './index.scss'
import Header from './Header'
import Menu from './Menu'


export default function Layout() {
    return (
        <div className="layout">
            <div className="header-wrap">
                <Header />
            </div>

            <div className="nav-wrap">
                <Menu />
            </div>

            <div className="outlet-wrap">
                <Outlet />
            </div>

        </div>
    )
}
