import { routersData, type RouterKeys } from "@/router/config";
import { useLocation } from "react-router"
/**
 * 用于控制菜单栏显示隐藏的 hook
 * @returns boolean
 */
export default function useIsShowMenu() {
    const location = useLocation();
    const key = location.pathname.split('/')[1] as RouterKeys;
    if (!key) {
        return false
    }
    return routersData[key]
}
