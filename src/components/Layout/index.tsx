import React from 'react'
import { Outlet } from 'react-router'
import './index.scss'
import Header from './Header'
import Menu from './Menu'
import useIsShowMenu from '@/hooks/useIsShowMenu'
import useIsShowHeader from '@/hooks/useIsShowHeader'


export default function Layout() {
    const isShowMenu = useIsShowMenu()
    const isShowHeader = useIsShowHeader()
    return (
        <div className="layout">
            {
                isShowHeader ? (
                    <div className="header-wrap">
                        <Header />
                    </div>
                ) : null
            }

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
