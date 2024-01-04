import React, { useEffect, useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { adminMenus } from './config';
import { useLocation, useNavigate } from 'react-router';
import { RouterKeys, routersData } from '@/router/config';

const items: MenuProps['items'] = adminMenus;

const MenuContainer: React.FC = () => {
    const [current, setCurrent] = useState('');
    const location = useLocation();
    useEffect(() => {
        const current = location.pathname.split('/')[1] as RouterKeys;
        if(current){
            setCurrent(current)
        }
    }, [])
    const navigate = useNavigate()
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e.key);
        setCurrent(e.key);
        navigate(routersData[e.key as RouterKeys].path);
    };

    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default MenuContainer;
