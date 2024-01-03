import React from 'react'
import { Outlet } from 'react-router'
import './index.scss'
import Header from './Header'
import Menu from './Menu'
import useIsShowMenu from '@/hooks/useIsShowMenu'


export default function Layout() {
    const isShowMenu = useIsShowMenu()
    return (
        <div className="layout">
            <div className="header-wrap">
                <Header />
            </div>
            {
                isShowMenu ? (
                    <div className="nav-wrap">
                        <Menu />
                    </div>
                ) : null
            }

            <div className="outlet-wrap">
                <Outlet />
            </div>

        </div>
    )
}
