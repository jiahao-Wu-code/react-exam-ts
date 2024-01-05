import React, { useEffect, useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { adminMenus } from './config';
import { useNavigate } from 'react-router';
import { RouterKeys, routersData } from '@/router/config';
import usePathKey from '@/hooks/usePathKey';

const items: MenuProps['items'] = adminMenus;

const MenuContainer: React.FC = () => {
    const [current, setCurrent] = useState('');
    const pathKey = usePathKey()
    useEffect(() => {
        if (pathKey) {
            setCurrent(pathKey)
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
