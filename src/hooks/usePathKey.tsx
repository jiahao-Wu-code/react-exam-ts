import { RouterKeys } from '@/router/config';
import { useLocation } from 'react-router'
/**
 *  获取对应菜单key
 */
export default function usePathKey() {
    const location = useLocation();
    const pathname = location.pathname.split('/')[1] as RouterKeys;
    return pathname
}
